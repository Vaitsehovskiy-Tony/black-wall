export const GalleryBlock = ({ gallery }) => {
  return (
    <section className="page-gallery">
      <h3 className="page-gallery__title">{gallery.title}</h3>
      <div className="page-gallery__grid">
        <div className="page-gallery__img-container">
          {gallery.gallery.data.map((e, i) => (
            <img
              src={`http://vaitstony.art:1337${e.attributes.url}`}
              alt=""
              className="page-gallery__img"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
