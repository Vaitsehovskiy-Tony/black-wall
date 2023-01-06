import whiteBurger from "../../../images/burger_white.png";
import blackBurger from "../../../images/burger_black.png";

export const HeaderBurger = ({ headerStyle }) => {
  const burger = headerStyle === "light" ? whiteBurger : blackBurger;

  return (
    <img className="header__burger" src={burger} />     
  );
};
