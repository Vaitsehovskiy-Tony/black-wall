import { useState } from "react";
import {getLocales} from "../../../utils/getLocales";
import bottomArrow from "../../../images/bottom-arrow.svg";
import bottomArrowDark from "../../../images/bottom-arrow-dark.png";

export const HeaderLanguageSelector = ({ headerStyle }) => {
  const [isActive, setIsActive] = useState(false);
  function handleLangSwitch() {
    setIsActive(!isActive);
  }

  const bottomIcon = headerStyle === "light" ? bottomArrow : bottomArrowDark;
  const { currentLocale, locales } = getLocales();
  return (
    <div className="header-lang" onMouseLeave={handleLangSwitch}>
      <div className="header-lang__item-container" onClick={handleLangSwitch}>
        <span className="header-lang__item">{currentLocale}</span>
        <img
          className={`header-lang__bottom-arrow ${isActive ? "active" : ""}`}
          src={bottomIcon}
          alt="bottom arrow"
        />
      </div>
      <ul className={`header-lang__options ${isActive ? "active" : ""}`}>
        {locales.map((locale, index) => (
          <li className="header-lang__options-item" key={index}>
            {locale}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderLanguageSelector;
