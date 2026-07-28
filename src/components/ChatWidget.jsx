import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import { askAssistant } from "../services/assistantApi";

const MENSAJE_BIENVENIDA = {
  rol: "asistente",
  texto:
    "¡Hola! Soy el asistente de este portafolio. Pregúntame sobre la experiencia, habilidades o proyectos de Jesús.",
  fuentes: [],
};

const TIEMPO_DESPERTAR = 3000;

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mensajes, setMensajes] = useState([MENSAJE_BIENVENIDA]);
  const [pregunta, setPregunta] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [despertando, setDespertando] = useState(false);
  const finRef = useRef(null);
  const wakingTimeoutRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("chatWidgetSeen")) {
      const timer = setTimeout(() => setShowTooltip(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  const abrir = () => {
    setOpen(true);
    setShowTooltip(false);
    localStorage.setItem("chatWidgetSeen", "1");
  };

  const enviarPregunta = async (e) => {
    e.preventDefault();
    const texto = pregunta.trim();
    if (!texto || enviando) return;

    setMensajes((prev) => [
      ...prev,
      { rol: "usuario", texto, fuentes: [] },
      { rol: "asistente", texto: "", fuentes: [], cargando: true },
    ]);
    setPregunta("");
    setEnviando(true);

    wakingTimeoutRef.current = setTimeout(() => setDespertando(true), TIEMPO_DESPERTAR);

    try {
      const data = await askAssistant(texto);
      setMensajes((prev) => [
        ...prev.slice(0, -1),
        { rol: "asistente", texto: data.respuesta, fuentes: data.fuentes ?? [] },
      ]);
    } catch (error) {
      setMensajes((prev) => [
        ...prev.slice(0, -1),
        {
          rol: "asistente",
          texto:
            "No pude conectar con el asistente. Puede que esté iniciando (Render tarda un poco tras estar inactivo) — intenta de nuevo en unos segundos.",
          fuentes: [],
        },
      ]);
    } finally {
      clearTimeout(wakingTimeoutRef.current);
      setDespertando(false);
      setEnviando(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-2">
        <AnimatePresence>
          {showTooltip && !open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm rounded-lg shadow-lg px-4 py-2 max-w-[220px] border border-slate-200 dark:border-slate-700"
            >
              ¡Pregúntame sobre la experiencia de Jesús! 👋
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => (open ? setOpen(false) : abrir())}
          aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
          className="relative bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {!open && (
            <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-40" />
          )}
          {open ? <FiX className="text-2xl" /> : <FiMessageCircle className="text-2xl" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[90] w-[90vw] max-w-sm h-[70vh] max-h-[520px] bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                Asistente del portafolio
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                RAG en vivo · respuestas basadas en el CV real
              </p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {mensajes.map((m, i) => (
                <div key={i} className={`flex ${m.rol === "usuario" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                      m.rol === "usuario"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {m.cargando ? (
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 py-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                        </div>
                        {despertando && (
                          <p className="text-xs opacity-70">
                            El asistente puede tardar hasta 40s la primera vez (el servidor se está despertando)…
                          </p>
                        )}
                      </div>
                    ) : (
                      <>
                        <p className="whitespace-pre-wrap">{m.texto}</p>
                        {m.fuentes?.length > 0 && (
                          <p className="mt-1.5 text-xs opacity-70">
                            Fuentes: {m.fuentes.map((f) => f.documento).join(", ")}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
              <div ref={finRef} />
            </div>

            <form onSubmit={enviarPregunta} className="border-t border-slate-200 dark:border-slate-700 p-2 flex gap-2">
              <input
                type="text"
                value={pregunta}
                onChange={(e) => setPregunta(e.target.value)}
                placeholder="Pregunta sobre su experiencia…"
                disabled={enviando}
                className="flex-1 bg-slate-100 dark:bg-slate-700 dark:text-slate-100 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
              />
              <button
                type="submit"
                aria-label="Enviar"
                disabled={enviando || !pregunta.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-lg px-3 transition-colors"
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
