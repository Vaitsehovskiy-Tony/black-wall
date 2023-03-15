import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ navbar, handleModal }) => {
  const location = useLocation();

  return (
    <ul className="header__navbar">
      {navbar.map((i) =>
        i.link === location.pathname ? (
          <h5 className="header__navbar-item current">{i.title}</h5>
        ) : (
          <Link
            to={i.link}
            className="header__navbar-item"
            key={i.id}
            onClick={handleModal}
          >
            {i.title}
          </Link>
        )
      )}
    </ul>
  );
};
