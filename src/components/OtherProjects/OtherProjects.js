import { ProjectSample } from "../ProjectSample/ProjectSample";

export const OtherProjects = ({ projects }) => {
  return (
    <section className="other-projects">
      <h3 className="other-projects__title"></h3>
      <div className="other-projects__items">
        {projects.map((i) => (
          <ProjectSample
            projectItem={i}
            key={i.id}
          />
        ))}
      </div>
    </section>
  );
};
