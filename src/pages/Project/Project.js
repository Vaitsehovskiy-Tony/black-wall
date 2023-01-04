import { Hero } from "../../components/Hero/Hero";
import { GalleryBlock } from "../../components/GalleryBlock/GalleryBlock";
import { OtherProjects } from "../../components/OtherProjects/OtherProjects";
import { DetailsBlock } from "../../components/DetailsBlock/DetailsBlock";
import { Article } from "../../components/Article/Article";
import { useFetch } from "../../hooks/useFetch";
import { getProjectsList } from "../../utils/getProjectsList";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { useParams } from "react-router-dom";

export const Project = () => {
  const projectsList = useFetch("projectList");
  const { id } = useParams();
  const projectPage = useFetch("projectPage", id);

  if (projectPage.isLoading || projectsList.isLoading) {
    return <Preloader />;
  }
  console.log(projectPage);
  const projectsListContent = getProjectsList(projectsList.content);

  return (
    <main className="project-page">
      <Hero mainPageData={projectPage.content} />
      <DetailsBlock about={projectPage.content.aboutProject} />
      <Article project={projectPage.content} />
      <GalleryBlock gallery={projectPage.content.gallery} />
      <OtherProjects projects={projectsListContent} />
    </main>
  );
};
