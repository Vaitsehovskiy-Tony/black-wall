import { Link } from "react-router-dom";

export const ProjectSample = ({ projectItem, filter }) => {
  const imgPath = projectItem.coverImage.data.attributes.url;
  const itemTag = projectItem.tag.data.attributes.tag;

  return (
    <Link
      to={`/project/` + projectItem.projectId}
      className={`sample ${!!filter && filter !== itemTag ? "hidden" : ""}`}
    >
      <div className="sample__img-container">
        <img
          className="sample__img"
          src={`https://api.vaitstony.art${imgPath}`}
          alt={projectItem.title}
        />
      </div>
      <div className="sample__content">
        <h6 className="sample__title">{projectItem.title}</h6>
        <span className="sample__subtitle">{projectItem.subtitle}</span>
      </div>
    </Link>
  );
};
