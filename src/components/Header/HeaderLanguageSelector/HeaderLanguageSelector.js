import { useState } from "react";
import { LangContext } from "../../../utils/getLangContext";
import { useContext } from "react";
import bottomArrow from "../../../images/bottom-arrow.webp";
import bottomArrowDark from "../../../images/bottom-arrow-dark.webp";

export const HeaderLanguageSelector = ({ headerStyle }) => {
  const [isActive, setIsActive] = useState(false);
  const { locales, userLocaleChange } = useContext(LangContext);
  const bottomIcon = headerStyle === "light" ? bottomArrow : bottomArrowDark;
  const handleLanguageChange = (locale) => userLocaleChange(locale);
  const handleLangSwitch = () => setIsActive(!isActive);

  return (
    <div className="header-lang" onMouseLeave={() => setIsActive(false)}>
      <div className="header-lang__item-container" onClick={handleLangSwitch}>
        <span className="header-lang__item">{locales.activeLocale}</span>
        <img
          className={`header-lang__bottom-arrow ${isActive ? "active" : ""}`}
          src={bottomIcon}
          alt="bottom arrow"
        />
      </div>
      <ul className={`header-lang__options ${isActive ? "active" : ""}`}> 
        {locales.localeOptions.map((locale, index) => (
          <li
            className="header-lang__options-item"
            key={index}
            onClick={() => handleLanguageChange(locale)}
          >
            {locale}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLanguageSelector;
