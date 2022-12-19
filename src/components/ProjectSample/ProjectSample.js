const ProjectSample = ({ projectItem }) => {
  const imgPath = (projectItem.imageHorizontal || projectItem.imageVertical)
    .data.attributes.url;

  return (
    <a className="sample">
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
    </a>
  );
};

export default ProjectSample;
