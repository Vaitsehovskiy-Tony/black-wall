import { HeaderBurger } from "../HeaderBurger/HeaderBurger";
import { ModalContext } from "../../../utils/getModalContext";
import { useContext } from "react";

export const HeaderCTABtn = ({ bttnText, headerStyle }) => {

  const { modalState, handleModal, handleModalContent } =
    useContext(ModalContext);
    
  const isNarrow = window.matchMedia("screen and (max-width: 750px)");

  return (
    <>
      {isNarrow.matches ? (
        <HeaderBurger
          headerStyle={headerStyle}
          handleModalContent={handleModalContent}
          modalState={modalState}
          handleModal={handleModal}
        />
      ) : (
        <button
          className="header__contact"
          onClick={() => {
            handleModalContent("orderForm");
            handleModal();
          }}
        >
          {bttnText}
        </button>
      )}
    </>
  );
};
