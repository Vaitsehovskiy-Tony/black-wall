import { Link } from "react-router-dom";

export const ProjectSample = ({ projectItem }) => {
  const imgPath = projectItem.coverImage.data.attributes.url;
  console.log('1', projectItem)
  return (
    <Link to={`/project/` + projectItem.projectId} className="sample">
      <div className="sample__img-container">
        <img
          className="sample__img"
          src={`http://api.vaitstony.art${imgPath}`}
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