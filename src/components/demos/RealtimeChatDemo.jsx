import { useState, useRef, useEffect } from "react";
import { FaTelegramPlane, FaWhatsapp, FaGlobe, FaPaperPlane } from "react-icons/fa";

const canalIcono = {
  telegram: <FaTelegramPlane className="text-sky-500" />,
  whatsapp: <FaWhatsapp className="text-green-500" />,
  web: <FaGlobe className="text-slate-400" />,
};

const conversacionInicial = {
  cliente: "María López",
  canal: "telegram",
  mensajes: [
    { id: 1, remitente: "cliente", texto: "Hola, tengo un problema con mi pedido #4521, no me ha llegado." },
    { id: 2, remitente: "agente", texto: "Hola María, permíteme revisar tu pedido y te confirmo en un momento." },
  ],
};

const RealtimeChatDemo = () => {
  const [mensajes, setMensajes] = useState(conversacionInicial.mensajes);
  const [respuesta, setRespuesta] = useState("");
  const [simulando, setSimulando] = useState(false);
  const [conectado, setConectado] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [mensajes]);

  const enviarRespuesta = () => {
    if (!respuesta.trim()) return;
    setMensajes((prev) => [...prev, { id: prev.length + 1, remitente: "agente", texto: respuesta.trim() }]);
    setRespuesta("");
  };

  const simularEntrante = () => {
    setSimulando(true);
    setConectado(false);
    setTimeout(() => {
      setConectado(true);
      setMensajes((prev) => [
        ...prev,
        { id: prev.length + 1, remitente: "cliente", texto: "¿Ya tienes noticias de mi pedido?" },
      ]);
      setSimulando(false);
    }, 1100);
  };

  return (
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
        Simulación de un panel de soporte en tiempo real, inspirado en el sistema de mensajería con Laravel Reverb y Redis que desarrollé. Simula un mensaje entrante para ver el aviso en vivo.
      </p>

      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
          <span className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            {canalIcono[conversacionInicial.canal]} {conversacionInicial.cliente}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className={`w-1.5 h-1.5 rounded-full ${conectado ? "bg-green-500" : "bg-amber-400 animate-pulse"}`} />
            {conectado ? "En vivo" : "Conectando…"}
          </span>
        </div>

        <div ref={scrollRef} className="p-4 space-y-2.5 max-h-64 overflow-y-auto">
          {mensajes.map((m) => (
            <div key={m.id} className={`flex ${m.remitente === "agente" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[75%] rounded-lg px-3 py-1.5 text-sm ${
                  m.remitente === "agente"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                }`}
              >
                {m.texto}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 p-3 border-t border-slate-200 dark:border-slate-700">
          <input
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && enviarRespuesta()}
            placeholder="Responder como agente…"
            className="flex-1 text-sm px-3 py-1.5 rounded border border-slate-300 dark:border-slate-600 dark:bg-slate-900 focus:outline-blue-500"
          />
          <button
            onClick={enviarRespuesta}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors"
          >
            <FaPaperPlane className="text-[11px]" /> Enviar
          </button>
        </div>
      </div>

      <button
        onClick={simularEntrante}
        disabled={simulando}
        className="mt-3 w-full text-xs font-semibold bg-slate-700 hover:bg-slate-800 disabled:opacity-50 text-white rounded py-2 transition-colors"
      >
        {simulando ? "Recibiendo mensaje…" : "Simular mensaje entrante (webhook)"}
      </button>
    </div>
  );
};

export default RealtimeChatDemo;
