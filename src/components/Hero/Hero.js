import PageTitle from "../common/PageTitle/PageTitle";

export default function Hero({ mainPageData }) {
  const hero = mainPageData.hero;

  return (
    <section className="hero">
      <picture className="hero__bg">
        <source
          media="(max-width: 991px)"
          src={
            "http://vaitstony.art:1337/uploads/Rectangle_4276_77953d2707.png"
          }
        />
        <img
          className="hero__bg-img"
          src={
            "http://vaitstony.art:1337/uploads/Rectangle_4276_77953d2707.png"
          }
          alt="Hero photo"
        />
      </picture>
      <PageTitle title={hero.title} description={hero.description} />
      <div className="hero__overlay"></div>
    </section>
  );
}
