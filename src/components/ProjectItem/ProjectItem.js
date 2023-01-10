import { Link } from "react-router-dom";

export const ProjectItem = ({ projectItem }) => {
  const imgPath = projectItem.coverImage.data.attributes.url;

  return (
    <Link className="project-item" to={projectItem.id}>
      <img
        className="project-item__img"
        src={`https://api.vaitstony.art${imgPath}`}
        alt={projectItem.title}
      />
      <h6 className="project-item__title">{projectItem.title}</h6>
      <div className="project-item__link-container">
        <span className="project-item__link">смотреть ПРОЕКТ</span>
        <hr className="project-item__hr" />
      </div>
    </Link>
  );
};
