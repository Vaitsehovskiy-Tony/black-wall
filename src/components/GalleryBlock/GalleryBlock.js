import { useEffect } from "react";

export const GalleryBlock = ({ gallery }) => {
  useEffect(() => window.scroll(0, 6000));

  return (
    <section className="page-gallery">
      <h3 className="page-gallery__title">{gallery.title}</h3>
      <div className="page-gallery__grid">
        {gallery.gallery.data.map((e, i) => (
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
