export const GalleryBlock = ({ content }) => {
  return (
    <section className="page-gallery project-wrapper">
      <h3 className="page-gallery__title">{content.title}</h3>
      <div className="page-gallery__grid">
        {content.gallery.data.map((e, i) => (
          <img
            src={`https://api.vaitstony.art${e.attributes.url}`}
            alt=""
            className="page-gallery__img"
            key={i}
          />
        ))}
      </div>
    </section>
  );
};
