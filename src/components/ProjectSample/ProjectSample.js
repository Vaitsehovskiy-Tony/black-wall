import { Link } from "react-router-dom";

const ProjectSample = ({ projectItem }) => {
  const imgPath = (projectItem.imageHorizontal || projectItem.imageVertical)
    .data.attributes.url;

  return (
    <Link to={"/project/some-project"} className="sample">
      <div className="sample__img-container">
        <img
          className="sample__img"
          src={`http://vaitstony.art:1337${imgPath}`}
          alt={projectItem.title}
        />
      </div>
      <div className="sample__content">
        <h6 className="sample__title">'{projectItem.title}'</h6>
        <span className="sample__subtitle">{projectItem.subtitle}</span>
      </div>
    </Link>
  );
};

export default ProjectSample;
