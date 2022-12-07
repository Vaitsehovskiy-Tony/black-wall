export const DetailsBlock = ({ about }) => {
  return (
    <section className="details project-wrapper">
      <h2 className="details__title">{about.title}</h2>
      <div className="details__container">
        {about.projectDetails.map((i) => (
          <div className="details__item-container" key={i.id}>
            <span className="details__item-topic">{i.topic}</span>
            <span className="details__item-details">{i.details}</span>
          </div>
        ))}
      </div>
      <button className="details__scroll">{about.goToButton}</button>
    </section>
  );
};
