import { Link } from "react-router-dom";
import logoLight from "../../../images/logo-white.svg";
import logoDark from "../../../images/logo-dark.svg";

function Logo({ headerStyle }) {
  const logo = headerStyle === "light" ? logoLight : logoDark;

  return (
    <Link to={"/black-wall"} className="logo">
      <img src={logo} alt="page logo" />
    </Link>
  );
}

export default Logo;
