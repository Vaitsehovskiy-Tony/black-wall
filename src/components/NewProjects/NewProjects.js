import { Link } from "react-router-dom";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import arrow from "../../images/right-arr.webp";

export const NewProjects = ({ content, projectsList, staticText }) => {
  const desktopList = projectsList.slice(0, 4);
  const mobileList = projectsList.slice(0, 2);
  const isNarrow = window.matchMedia("screen and (max-width: 600px)");

  const projectList = isNarrow.matches ? mobileList : desktopList;

  return (
    <section className="new-projects wrapper">
      <h3 className="new-projects__title">{content.title}</h3>
      <div className="new-projects__container">
        {projectList.map((i) => (
          <div className="new-projects__item-container" key={i.id}>
            <ProjectItem projectItem={i} staticText={staticText} />
          </div>
        ))}
      </div>
      <Link to="/portfolio" className="new-projects__link-container">
        <span className="new-projects__link-text">
          {staticText.watchAllProjeects}
        </span>
        <img className="new-projects__right-arrow" src={arrow} alt="right arrow" />
      </Link>
    </section>
  );
};
