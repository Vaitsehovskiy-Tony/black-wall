import { ProjectSample } from "../ProjectSample/ProjectSample";

export const OtherProjects = ({ content }) => {
  return (
    <section className="other-projects project-wrapper">
      {/* <h3 className="other-projects__title"></h3> */}
      <div className="other-projects__items">
        {content.map((i) => (
          <ProjectSample projectItem={i} key={i.id} />
        ))}
      </div>
    </section>
  );
};
