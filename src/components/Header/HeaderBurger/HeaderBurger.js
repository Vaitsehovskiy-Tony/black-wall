import whiteBurger from "../../../images/burger_white.png";
import blackBurger from "../../../images/burger_black.png";
import whiteCross from "../../../images/close_white.png";
import blackCross from "../../../images/close_black.png";

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
