import { ProjectItem } from "../ProjectItem/ProjectItem";

export const NewProjects = ({ content, projectsList }) => {
  const desktopList = projectsList.slice(0, 4);

  return (
    <section className="new-projects wrapper">
      <h3 className="new-projects__title">{content.title}</h3>
      <div className="new-projects__container">
        {desktopList.map((i) => (
          <div className="new-projects__item-container" key={i.id}>
            <ProjectItem projectItem={i} />
          </div>
        ))}
      </div>
    </section>
  );
};
