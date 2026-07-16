import { useState } from "react";
import Modal from "./Modal";
import KanbanDemo from "./demos/KanbanDemo";
import RagChatDemo from "./demos/RagChatDemo";

const demoComponents = {
  kanban: KanbanDemo,
  rag: RagChatDemo,
};

const ProjectCard = ({ title, description, tech, repo, demo }) => {
  const [showDemo, setShowDemo] = useState(false);
  const DemoComponent = demo ? demoComponents[demo] : null;

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-xl p-6 hover:shadow-lg transition border border-slate-100 dark:border-slate-700">
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
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Repositorio
          </a>
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
        <Modal isOpen={showDemo} onClose={() => setShowDemo(false)} title={title}>
          <DemoComponent />
        </Modal>
      )}
    </div>
  );
};

export default ProjectCard;
