import { useState } from "react";
import { FaFileAlt, FaNewspaper, FaFilePdf, FaEye, FaEyeSlash } from "react-icons/fa";

const tipoIcono = {
  pagina: <FaFileAlt className="text-blue-500" />,
  noticia: <FaNewspaper className="text-amber-500" />,
  recurso: <FaFilePdf className="text-red-500" />,
};

const tipoLabel = {
  pagina: "Página",
  noticia: "Noticia",
  recurso: "Recurso",
};

const contenidoInicial = [
  { id: 1, tipo: "pagina", titulo: "Quiénes somos", publicada: true },
  { id: 2, tipo: "noticia", titulo: "Inauguración del nuevo auditorio", publicada: true },
  { id: 3, tipo: "recurso", titulo: "Reglamento institucional 2026", publicada: false },
  { id: 4, tipo: "noticia", titulo: "Resultados del ciclo escolar", publicada: false },
];

const CmsDemo = () => {
  const [contenido, setContenido] = useState(contenidoInicial);

  const alternar = (id) => {
    setContenido((prev) => prev.map((c) => (c.id === id ? { ...c, publicada: !c.publicada } : c)));
  };

  const publicados = contenido.filter((c) => c.publicada);

  return (
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
        Simulación del panel administrativo, inspirado en el sistema de gestión de contenido institucional (Angular + Node + MySQL) que desarrollé. Publica o despublica contenido y observa cómo cambia el sitio público al instante.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Panel administrativo</h4>
          <div className="space-y-2">
            {contenido.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2"
              >
                <span className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                  {tipoIcono[item.tipo]}
                  <span>
                    {item.titulo}
                    <span className="block text-[10px] text-slate-400 uppercase">{tipoLabel[item.tipo]}</span>
                  </span>
                </span>
                <button
                  onClick={() => alternar(item.id)}
                  className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
                    item.publicada
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-400"
                  }`}
                >
                  {item.publicada ? <FaEye className="text-[10px]" /> : <FaEyeSlash className="text-[10px]" />}
                  {item.publicada ? "Publicada" : "Borrador"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Vista pública</h4>
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-4 min-h-[160px]">
            {publicados.length === 0 ? (
              <p className="text-xs text-slate-400">Aún no hay contenido publicado.</p>
            ) : (
              <ul className="space-y-2">
                {publicados.map((item) => (
                  <li key={item.id} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    {tipoIcono[item.tipo]} {item.titulo}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsDemo;
