import { Hero } from "../../components/Hero/Hero";
import { GalleryBlock } from "../../components/GalleryBlock/GalleryBlock";
import { OtherProjects } from "../../components/OtherProjects/OtherProjects";
import { DetailsBlock } from "../../components/DetailsBlock/DetailsBlock";
import { Article } from "../../components/Article/Article";
import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { useParams } from "react-router-dom";
import { OrderForm } from "../../components/OrderForm/OrderForm";

export const Project = ({ orderFormContent, projectsListContent, staticTexts }) => {
  const { id } = useParams();
  const projectPage = useFetch("projectPage", id);

  if (projectPage.isLoading) {
    return <Preloader />;
  }
  return (
    <main className="project-page page__wrapper">
      <Hero content={projectPage.content.hero} />
      <DetailsBlock content={projectPage.content.aboutProject} staticText={staticTexts.textsProject.goToGalleryButton}/>
      <Article
        content={projectPage.content.projectElement}
        title={projectPage.content.articleTitle  || ''}
        staticText={staticTexts.textsProject}
      />
      <GalleryBlock content={projectPage.content.gallery} staticText={staticTexts.textsProject.galleryTitle}/>
      {/* <OtherProjects content={projectsListContent} staticText={staticTexts.textsProject.otherProjectsTitle} /> */}
      <OrderForm content={orderFormContent} />
    </main>
  );
};
