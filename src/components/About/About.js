export const About = ({ content }) => {
  return (
    <section className="about wrapper">
      <div className="about__side-text-container">
        <h3 className="about__side-text-title">{content.sideTitle}</h3>
        <span className="about__side-text-subtitle">{content.sideSubtitle}</span>
      </div>
      <div className="about__text-container">
        <h6 className="about__title">{content.title}</h6>
        <p className="about__text">{content.text}</p>
      </div>
    </section>
  );
};
