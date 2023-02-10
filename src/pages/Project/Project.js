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
import { SEO } from "../../components/common/SEO/SEO";
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

  const seoData = {
    title: "Black Wall",
    description:
      "BLACK WALL is an interior design and architecture studio. Our team designs residential and public interiors individually designed.",
    keywords: "Design, Interior, Architecture",
    image: "https://api.vaitstony.art/uploads/091_A1640_522f5c2e62.webp",
  };
  return (
    <main className="project-page page__wrapper">
      <SEO seoData={seoData} />
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
