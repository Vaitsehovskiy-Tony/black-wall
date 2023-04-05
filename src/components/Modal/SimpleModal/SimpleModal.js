import { GalleryModal } from "../GalleryModal/GalleryModal";
import { DetailsModal } from "../DetailsModal/DetailsModal";
import whiteCross from "../../../images/close_white.webp";
import { TermsModal } from "../TermsModal/TermsModal";

const simpleModalType = (modalProps) => {
  switch (modalProps.type) {
    case "gallery":
      return <GalleryModal modalProps={modalProps} />;
    case "details":
      return <DetailsModal modalProps={modalProps} />;
    case "terms":
      return <TermsModal modalProps={modalProps} />;
  }
};

export const SimpleModal = ({ modalProps }) => {
  // modalState: simpleModal,
  // type: "galery",
  // content,
  // index,

  if (modalProps.modalState) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  if (modalProps.modalState)
    return (
      <div className="simple-modal active">
        <img
          className="simple-modal__close-bttn"
          alt="cross"
          src={whiteCross}
          onClick={() => modalProps.handleSimleModal()}
        />
        {simpleModalType(modalProps)}
      </div>
    );
};
