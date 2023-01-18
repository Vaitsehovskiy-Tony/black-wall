import { Hero } from "../../components/Hero/Hero";
import { GalleryBlock } from "../../components/GalleryBlock/GalleryBlock";
import { OtherProjects } from "../../components/OtherProjects/OtherProjects";
import { DetailsBlock } from "../../components/DetailsBlock/DetailsBlock";
import { Article } from "../../components/Article/Article";
import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { useParams } from "react-router-dom";
import { OrderForm } from "../../components/OrderForm/OrderForm";

export const Project = ({ orderFormContent, projectsListContent }) => {
  const { id } = useParams();
  const projectPage = useFetch("projectPage", id);

  if (projectPage.isLoading) {
    return <Preloader />;
  }
  return (
    <main className="project-page page__wrapper">
      <Hero content={projectPage.content.hero} />
      <DetailsBlock content={projectPage.content.aboutProject} />
      <Article content={projectPage.content.projectElement} />
      <GalleryBlock content={projectPage.content.gallery} />
      <OtherProjects content={projectsListContent} />
      <OrderForm content={orderFormContent} />
    </main>
  );
};
