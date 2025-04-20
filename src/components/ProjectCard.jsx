const ProjectCard = ({ title, description, tech, repo, demo }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <div>
          <h3 className="text-xl text-blue-700 font-semibold">{title}</h3>
          <p className="text-sm mt-2 text-slate-600">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, index) => (
              <span
                key={index}
                className="bg-gray-200 text-sm px-2 py-1 rounded font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
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
  