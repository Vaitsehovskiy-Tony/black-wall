import { HeaderBurger } from "../HeaderBurger/HeaderBurger";

export const HeaderCTABtn = ({
  bttnText,
  headerStyle,
  modalState,
  handleModal,
}) => {
  const isNarrow = window.matchMedia("screen and (max-width: 750px)");

  return (
    <>
      {isNarrow.matches ? (
        <HeaderBurger
          headerStyle={headerStyle}
          modalState={modalState}
          handleModal={handleModal}
        />
      ) : (
        <button className="header__contact">{bttnText}</button>
      )}
    </>
  );
};
