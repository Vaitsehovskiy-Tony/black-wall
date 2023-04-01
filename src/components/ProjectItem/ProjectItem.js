import { Link } from "react-router-dom";

export const ProjectItem = ({ projectItem, staticText }) => {
  const imgPath = projectItem.coverImage.data.attributes.url;

  return (
    <Link
      className="project-item animate"
      to={`/project_` + projectItem.projectId}
    >
      <div className="project-item__img-wrapper">
        <div
          className="project-item__img"
          style={{
            backgroundImage: `url(https://api.vaitstony.art${imgPath})`,
          }}
          alt={projectItem.title}
        />
      </div>
      <h6 className="project-item__title">{projectItem.title}</h6>
      <div className="project-item__link-container">
        <span className="project-item__link">{staticText.watchProject}</span>
        <hr className="project-item__hr" />
      </div>
    </Link>
  );
};
