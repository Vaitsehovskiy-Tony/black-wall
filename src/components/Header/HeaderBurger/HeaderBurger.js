import whiteBurger from "../../../images/burger_white.webp";
import blackBurger from "../../../images/burger_black.webp";
import whiteCross from "../../../images/close_white.webp";
import blackCross from "../../../images/close_black.webp";

export const HeaderBurger = ({ headerStyle, modalState, handleModal, handleModalContent }) => {
  const burger = headerStyle === "light" ? whiteBurger : blackBurger;
  const cross = headerStyle === "light" ? whiteCross : blackCross;
  
  if (!!modalState) {
    return (
      <img
        className="header__icon"
        src={cross}
        onClick={handleModal}
        alt='cross'
      />
    );
  } else {
    return (
      <img
        className="header__icon"
        src={burger}
        onClick={()=>{handleModalContent("navbar"); handleModal()}}
        alt='burger'
      />
    );
  }
};
