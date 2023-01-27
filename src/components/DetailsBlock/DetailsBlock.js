export const DetailsBlock = ({ content, staticText }) => {
  const makeScroll = () => {
    const gallery = document.querySelector(".page-gallery");
    gallery.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="details project-wrapper">
      <h2 className="details__title">{content.title}</h2>
      <div className="details__container">
        {content.projectDetails.map((i) => (
          <div className="details__item-container" key={i.id}>
            <span className="details__item-topic">{i.topic}</span>
            <span className="details__item-details">{i.details}</span>
          </div>
        ))}
      </div>
      <button className="details__scroll" onClick={makeScroll}>
        {staticText}
      </button>
    </section>
  );
};
