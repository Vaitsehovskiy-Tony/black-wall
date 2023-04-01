import { HeaderBurger } from "../HeaderBurger/HeaderBurger";
import { ElementsContext } from "../../../utils/getElementsContext";
import { useContext } from "react";

export const HeaderCTABtn = ({ bttnText, headerStyle }) => {

  const { modalState, handleModal, handleModalContent } =
    useContext(ElementsContext).modal;
    
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
