//Component for Research Page

const Projects = (props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <p>Our projects are listed below:</p>
      <div className="grid grid-cols-1 gap-4">
        {props.data.portfolio.projects.map((project) => (
          <div key={project.title} className="border rounded p-4">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-sm">{project.category}</p>
            <p className="text-sm">{project.year}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
