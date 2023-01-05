import { PageTitle } from "../common/PageTitle/PageTitle";

export const Hero = ({ mainPageData }) => {
  const hero = mainPageData.hero;

  return (
    <section className="hero">
      <picture className="hero__bg">
        <source
          media="(max-width: 991px)"
          src={
            `https://api.vaitstony.art${hero.picture.data.attributes.url}`
          }
        />
        <img
          className="hero__bg-img"
          src={
            `https://api.vaitstony.art${hero.picture.data.attributes.url}`
          }
          alt="Hero photo"
        />
      </picture>
      <PageTitle title={hero.title} description={hero.description} />
      <div className="hero__overlay"></div>
    </section>
  );
};
