import { PageTitle } from "../common/PageTitle/PageTitle";

export const Hero = ({ content, imageSample }) => {
  const image =
    content && content.picture
      ? `https://api.vaitstony.art${content.picture.data.attributes.url}`
      : imageSample;

  return (
    <section className="hero">
      <picture className="hero__bg">
        <source media="(max-width: 991px)" src={image} />
        <img className="hero__bg-img" src={image} alt="Hero" />
      </picture>
      <PageTitle title={content.title} description={content.description} />
      <div className="hero__overlay"></div>
    </section>
  );
};
