const ProjectCard = ({ title, description, tech, repo, demo }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
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
            className="text-blue-600 font-semibold hover:underline"
          >
            Repositorio
          </a>
          <a
            href={demo}
            target="_blank"
            className="text-green-600 font-semibold hover:underline"
          >
            Demo
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  