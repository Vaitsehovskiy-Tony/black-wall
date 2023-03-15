import { GalleryModal } from "../GalleryModal/GalleryModal";
import { DetailsModal } from "../DetailsModal/DetailsModal";
import whiteCross from "../../../images/close_white.webp";

const simpleModalType = (modalProps) => {
  console.log(modalProps.type);

  switch (modalProps.type) {
    case "gallery":
      return <GalleryModal modalProps={modalProps} />;
    case "details":
      return <DetailsModal modalProps={modalProps} />;
  }
};

export const SimpleModal = ({ modalProps }) => {
  // modalState: simpleModal,
  // type: "galery",
  // content,
  // index,


  if (modalProps.modalState ) {
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
