import { Logo } from "../common/Logo/Logo";
import { HeaderNavbar } from "./HeaderNavbar/HeaderNavbar";
import { HeaderOrderBtn } from "./HeaderOrderBtn/HeaderOrderBtn";
import { HeaderLanguageSelector } from "./HeaderLanguageSelector/HeaderLanguageSelector";
import { HeaderStyle } from "../../utils/getHeaderStyle";
import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { HeaderBurger } from "./HeaderBurger/HeaderBurger";

export const Header = () => {
  const headerStyle = HeaderStyle();
  const isNarrow = window.matchMedia("screen and (max-width: 950px)");
  const { isLoading, content } = useFetch("header");

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <header className={`header header_${headerStyle}`}>
      <div className="header__wrapper">
        <Logo headerStyle={headerStyle || "light"} />
        <HeaderNavbar navbar={content.navbar} />
        <HeaderLanguageSelector headerStyle={headerStyle || "light"} />
        { isNarrow.matches ? (
          <HeaderBurger headerStyle={headerStyle || "light"} />
        ) : (
          <HeaderOrderBtn
            bttnText={content.orderProject}
            headerStyle={headerStyle}
          />
        )}
      </div>
    </header>
  );
};
