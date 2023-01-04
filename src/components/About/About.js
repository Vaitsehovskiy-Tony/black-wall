export const About = ({ mainPageData }) => {
  const about = mainPageData.about;
  return (
    <section className="about">
      <div className="about__side-text-container">
        <h3 className="about__side-text-title">{about.sideTitle}</h3>
        <span className="about__side-text-subtitle">{about.sideSubtitle}</span>
      </div>
      <div className="about__text-container">
        <h6 className="about__title">{about.title}</h6>
        <p className="about__text">{about.text}</p>
      </div>
    </section>
  );
};
