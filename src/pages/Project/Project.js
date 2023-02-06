import { Hero } from "../../components/Hero/Hero";
import { GalleryBlock } from "../../components/GalleryBlock/GalleryBlock";
import { OtherProjects } from "../../components/OtherProjects/OtherProjects";
import { DetailsBlock } from "../../components/DetailsBlock/DetailsBlock";
import { Article } from "../../components/Article/Article";
import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { useParams } from "react-router-dom";
import { OrderForm } from "../../components/OrderForm/OrderForm";
import { useLayoutEffect } from "react";
import imageSample from "../../images/image-sample.webp";

export const Project = ({
  orderFormContent,
  projectsListContent,
  staticTexts,
}) => {
  const { id } = useParams();
  const projectPage = useFetch("projectPage", id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (projectPage.isLoading) {
    return <Preloader />;
  }
  return (
    <main className="project-page page__wrapper">
      <Hero content={projectPage.content.hero} imageSample={imageSample} />
      <DetailsBlock
        content={projectPage.content.aboutProject}
        staticText={staticTexts.textsProject}
      />
      <Article
        content={projectPage.content.projectElement}
        title={projectPage.content.articleTitle || ""}
        staticText={staticTexts.textsProject}
        imageSample={imageSample}
      />
      <GalleryBlock
        content={projectPage.content.gallery}
        staticText={staticTexts.textsProject.galleryTitle}
        imageSample={imageSample}
      />
      <OtherProjects
        content={projectsListContent}
        staticText={staticTexts.textsProject.otherProjectsTitle}
      />
      <OrderForm content={orderFormContent} />
    </main>
  );
};
