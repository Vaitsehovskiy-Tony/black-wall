import { Logo } from "../common/Logo/Logo";
import { HeaderNavbar } from "./HeaderNavbar/HeaderNavbar";
import { HeaderOrderBtn } from "./HeaderOrderBtn/HeaderOrderBtn";
import { HeaderLanguageSelector } from "./HeaderLanguageSelector/HeaderLanguageSelector";
import { HeaderStyle } from "../../utils/getHeaderStyle";
import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";

export const Header = () => {
  const headerStyle = HeaderStyle();

  const { isLoading, content } = useFetch("header");

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <header className={`header header_${headerStyle}`}>
      <div className="header__wrapper">
        <Logo headerStyle={headerStyle} />
        <HeaderNavbar navbar={content.navbar} />
        <HeaderLanguageSelector headerStyle={headerStyle || "header_light"} />
        <HeaderOrderBtn bttnText={content.orderProject} />
      </div>
    </header>
  );
};
