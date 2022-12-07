const ProjectItem = ({ projectItem }) => {
  const imgPath = (projectItem.imageHorizontal || projectItem.imageVertical)
    .data.attributes.url;

  return (
    <div className="project-item">
      {/*<div className="wtf">*/}
      <img
        className="project-item__img"
        src={`http://localhost:1337${imgPath}`}
        alt={projectItem.title}
      />
      {/*</div>*/}

      <h6 className="project-item__title">'{projectItem.title}'</h6>
      <div className="project-item__link-container">
        <a className="project-item__link" href={projectItem.link}>
          смотреть ПРОЕКТ
        </a>
        <hr className="project-item__hr" />
      </div>
    </div>
  );
};

export default ProjectItem;
