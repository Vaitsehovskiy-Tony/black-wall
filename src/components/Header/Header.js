import { DataContext } from "../../utils/getContext";
import { useContext } from "react";
import Logo from "../common/Logo/Logo";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import HeaderOrderBtn from "./HeaderOrderBtn/HeaderOrderBtn";
import HeaderLanguageSelector from "./HeaderLanguageSelector/HeaderLanguageSelector";
import { HeaderStyle } from "../../utils/getHeaderStyle";

function Header() {
  const { header } = useContext(DataContext);
  const headerStyle = HeaderStyle();

  return (
    <header className={`header header_${headerStyle}`}>
      <div className="header__wrapper">
        <Logo headerStyle={headerStyle} />
        <HeaderNavbar navbar={header.navbar} />
        <HeaderLanguageSelector headerStyle={headerStyle} />
        <HeaderOrderBtn bttnText={header.orderProject} />
      </div>
    </header>
  );
}

export default Header;
