import { Link } from "react-router-dom";
import logoLight from "../../../images/logo-white.svg";
import logoDark from "../../../images/logo-dark.svg";

export const Logo = ({ headerStyle }) => {
  const logo = headerStyle === "light" ? logoLight : logoDark;

  return (
    <Link to={"/"} className="logo">
      <img src={logo} alt="page logo" />
    </Link>
  );
}