import { Logo } from "../common/Logo/Logo";
import { Navbar } from "../common/Navbar/Navbar";
import { HeaderCTABtn } from "./HeaderCTABtn/HeaderCTABtn";
import { HeaderLanguageSelector } from "./HeaderLanguageSelector/HeaderLanguageSelector";
import { useScrollDirection } from "../../hooks/useScrollDirection";

export const Header = ({
  headerStyle,
  content
}) => {

    const scrollDirection = useScrollDirection();

  // const handleModal = (type) => {
  //   if (type === "orderForm") {
  //     setModalState({ state: modalState.state, content: "orderForm" });
  //   } else if (type === "orderFormFullscreen") {
  //     setModalState({ state: !modalState.state, content: "orderForm"});
  //   } else {
  //     setModalState({ state: !modalState.state, content: "navbar" });
  //   }
  // };

  return (
    <header
      className={`header header_${headerStyle} ${
        scrollDirection === "down" ? "hide" : "show"
      }`}
    >
      <div className="header__wrapper">
        <Logo headerStyle={headerStyle || "light"} />
        <Navbar navbar={content.navbar} />
        <HeaderLanguageSelector headerStyle={headerStyle || "light"} />
        <HeaderCTABtn
          bttnText={content.orderProject}
          headerStyle={headerStyle || "light"}
        />
      </div>
    </header>
  );
};
