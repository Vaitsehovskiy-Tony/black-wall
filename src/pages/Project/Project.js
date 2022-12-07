import { useContext } from "react";
import { DataContext } from "../../utils/getContext";
import ProjectSample from "../../components/ProjectSample/ProjectSample";
import OrderForm from "../../components/OrderForm/OrderForm";
import Hero from "../../components/Hero/Hero";
import { GalleryBlock } from "../../components/GalleryBlock/GalleryBlock";
import { OtherProjects } from "../../components/OtherProjects/OtherProjects";
import { DetailsBlock } from "../../components/DetailsBlock/DetailsBlock";
import { Article } from "../../components/Article/Article";

const Project = () => {
  const { project, projectsList } = useContext(DataContext);

  return (
    <main className="project-page">
      <Hero mainPageData={project} />
      <DetailsBlock about={project.aboutProject} />
      <Article project={project} />
      <GalleryBlock gallery={project.gallery} />
      <OtherProjects projects={projectsList} />
    </main>
  );
};

export default Project;
