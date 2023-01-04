import { Link } from "react-router-dom";

export const HeaderNavbar = ({ navbar }) => {
  return (
    <ul className="header__navbar">
      {navbar.map((i) => (
        <Link to={i.link} className="header__navbar-item" key={i.id}>
          {i.title}
        </Link>
      ))}
    </ul>
  );
}

export default HeaderNavbar;
