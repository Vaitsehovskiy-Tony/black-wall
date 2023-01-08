export const ProjectItem = ({ projectItem }) => {
  const imgPath = projectItem.coverImage.data.attributes.url;

  return (
    <div className="project-item">
      {/*<div className="wtf">*/}
      <img
        className="project-item__img"
        src={`https://api.vaitstony.art${imgPath}`}
        alt={projectItem.title}
      />
      {/*</div>*/}

      <h6 className="project-item__title">{projectItem.title}</h6>
      <div className="project-item__link-container">
        <a className="project-item__link" href={projectItem.id}>
          смотреть ПРОЕКТ
        </a>
        <hr className="project-item__hr" />
      </div>
    </div>
  );
};
