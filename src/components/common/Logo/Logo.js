import { Link } from "react-router-dom";
import logoLight from "../../../images/logo-white.webp";
import logoDark from "../../../images/logo-dark.webp";

export const Logo = ({ headerStyle }) => {
  const logo = headerStyle === "light" ? logoLight : logoDark;

  return (
    <Link to={"/"} className="logo">
      <img className="logo__img" src={logo} alt="page logo" />
    </Link>
  );
}