import { useState } from "react";
import { SimpleModal } from "../Modal/SimpleModal/SimpleModal";

export const GalleryBlock = ({ content, staticText }) => {
  const [simpleModal, setSimpleModal] = useState(false);
  const [index, setIndex] = useState(null);

  const handleSimleModal = () => {
    setSimpleModal(!simpleModal);
  };

  const modalProps = {
    modalState: simpleModal,
    type: "gallery",
    content,
    index,
    handleSimleModal
  };

  return (
    <section className="page-gallery project-wrapper">
      <SimpleModal modalProps={modalProps} />
      <h3 className="page-gallery__title">{content.title || staticText}</h3>
      <div className="page-gallery__grid">
        {content.gallery.data.map((e, i) => (
          <img
            src={`https://api.vaitstony.art${e.attributes.url}`}
            alt="gallery item"
            className="page-gallery__img"
            key={i}
            onClick={() => {
              setIndex(i);
              handleSimleModal();
            }}
          />
        ))}
      </div>
    </section>
  );
};
