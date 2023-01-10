import { Link } from "react-router-dom";

export const Navbar = ({ navbar, handleModal }) => {
  return (
    <ul className="header__navbar">
      {navbar.map((i) => (
        <Link to={i.link} className="header__navbar-item" key={i.id} onClick={handleModal}>
          {i.title}
        </Link>
      ))}
    </ul>
  );
}