import { Logo } from "../common/Logo/Logo";
import { Navbar } from "../common/Navbar/Navbar";
import { HeaderCTABtn } from "./HeaderCTABtn/HeaderCTABtn";
import { HeaderLanguageSelector } from "./HeaderLanguageSelector/HeaderLanguageSelector";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useContext, useEffect } from "react";
import { ElementsContext } from "../../utils/getElementsContext";
import { useLocation } from "react-router-dom";

export const Header = ({ headerStyle, content }) => {
  const scrollDirection = useScrollDirection();
  const { modalState, handleModal } = useContext(ElementsContext).modal;
  const isNarrow = window.matchMedia("screen and (max-width: 750px)");
  const { pathname } = useLocation();
  const cssClass = pathname.split("_")[0].substring(1) || "main";
  let headerAnimation = "show";
  let dynamicHeaderStyle = "light";

  useEffect(() => {
    if (!!modalState) {
      handleModal();
    }
  }, [pathname]);

  if (!!modalState && isNarrow.matches) {
    dynamicHeaderStyle = "light";
  } else {
    dynamicHeaderStyle = headerStyle || "light";
  }

  switch (scrollDirection) {
    case "down":
      headerAnimation = "hide";
      break;
    case "unset":
      headerAnimation = "transparent";
  }

  return (
    <header
      className={`header header_${dynamicHeaderStyle} ${headerAnimation} ${cssClass}`}
    >
      <div className="header__wrapper">
        <Logo headerStyle={dynamicHeaderStyle || "light"} />
        <Navbar navbar={content.navbar} />
        <HeaderLanguageSelector headerStyle={dynamicHeaderStyle || "light"} />
        <HeaderCTABtn
          bttnText={content.orderProject}
          headerStyle={dynamicHeaderStyle || "light"}
        />
      </div>
    </header>
  );
};
