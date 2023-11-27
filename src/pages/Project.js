import { useState } from "react";
import Title from "../components/Title";
import projects from "../datas/project.json";

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (id) => {
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className="project">
      <div className="project__wrapper">
        <Title prop={`Projets`} />
        <ul className="projects">
          {projects.map((project) => (
            <li
              key={project.id}
              className="project"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => {
                handleMouseEnter(project.id);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="project__title">{project.title}</h3>
              <p className="project__skill">{project.skill}</p>
              {hoveredProject === project.id && (
                <img
                  src={project.prevImg}
                  alt="project"
                  style={{
                    width: "370px",
                    position: "fixed",
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: "translate(-200px,-150px)",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
