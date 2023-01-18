import { PageTitle } from "../common/PageTitle/PageTitle";

export const Hero = ({ content }) => {
  return (
    <section className="hero">
      <picture className="hero__bg">
        <source
          media="(max-width: 991px)"
          src={`https://api.vaitstony.art${content.picture.data.attributes.url}`}
        />
        <img
          className="hero__bg-img"
          src={`https://api.vaitstony.art${content.picture.data.attributes.url}`}
          alt="Hero"
        />
      </picture>
      <PageTitle title={content.title} description={content.description} />
      <div className="hero__overlay"></div>
    </section>
  );
};
