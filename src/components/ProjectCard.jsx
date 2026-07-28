import { useState, lazy, Suspense } from "react";
import Modal from "./Modal";

const KanbanDemo = lazy(() => import("./demos/KanbanDemo"));
const RagChatDemo = lazy(() => import("./demos/RagChatDemo"));
const TaekwondoDashboardDemo = lazy(() => import("./demos/TaekwondoDashboardDemo"));
const FamilyStoreDemo = lazy(() => import("./demos/FamilyStoreDemo"));
const RealtimeChatDemo = lazy(() => import("./demos/RealtimeChatDemo"));
const CmsDemo = lazy(() => import("./demos/CmsDemo"));
const ArchitectureDiagram = lazy(() => import("./ArchitectureDiagram"));

const demoComponents = {
  kanban: KanbanDemo,
  rag: RagChatDemo,
  dashboard: TaekwondoDashboardDemo,
  familystore: FamilyStoreDemo,
  chat: RealtimeChatDemo,
  cms: CmsDemo,
};

const ProjectCard = ({ title, description, tech, repo, repoBackend, demo, architecture }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [activeTab, setActiveTab] = useState("demo");
  const DemoComponent = demo ? demoComponents[demo] : null;

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 dark:border-slate-700">
      <div>
        <h3 className="text-xl text-blue-700 dark:text-blue-400 font-semibold">{title}</h3>
        <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, index) => (
            <span
              key={index}
              className="bg-slate-100 dark:bg-slate-700 text-sm px-2 py-1 rounded-full font-medium text-slate-600 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-6 text-sm font-medium">
        {repo ? (
          <span className="flex gap-3">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              {repoBackend ? "Frontend" : "Repositorio"}
            </a>
            {repoBackend && (
              <a
                href={repoBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                Backend
              </a>
            )}
          </span>
        ) : (
          <span />
        )}
        {DemoComponent && (
          <button
            onClick={() => setShowDemo(true)}
            className="text-orange-500 hover:underline cursor-pointer"
          >
            Ver demo
          </button>
        )}
      </div>

      {DemoComponent && (
        <Modal
          isOpen={showDemo}
          onClose={() => {
            setShowDemo(false);
            setActiveTab("demo");
          }}
          title={title}
        >
          {architecture && (
            <div className="flex gap-4 mb-4 border-b border-slate-200 dark:border-slate-700 text-sm font-medium">
              <button
                onClick={() => setActiveTab("demo")}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === "demo"
                    ? "border-orange-400 text-slate-800 dark:text-slate-100"
                    : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                }`}
              >
                Demo
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === "architecture"
                    ? "border-orange-400 text-slate-800 dark:text-slate-100"
                    : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                }`}
              >
                Arquitectura
              </button>
            </div>
          )}
          <Suspense fallback={<p className="text-sm text-slate-500 dark:text-slate-400">Cargando…</p>}>
            {activeTab === "architecture" && architecture ? (
              <ArchitectureDiagram chart={architecture} />
            ) : (
              <DemoComponent />
            )}
          </Suspense>
        </Modal>
      )}
    </div>
  );
};

export default ProjectCard;
