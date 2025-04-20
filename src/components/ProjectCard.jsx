const ProjectCard = ({ title, description, tech, repo, demo }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition border border-slate-100">
      <div>
        <h3 className="text-xl text-blue-700 font-semibold">{title}</h3>
        <p className="text-sm mt-2 text-slate-600">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, index) => (
            <span
              key={index}
              className="bg-slate-100 text-sm px-2 py-1 rounded-full font-medium text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6 text-sm font-medium">
        <a
          href={repo}
          target="_blank"
          className="text-orange-500 hover:underline"
        >
          Repositorio
        </a>
        <a
          href={demo}
          target="_blank"
          className="text-orange-500 hover:underline"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
