import React from "react";

function HeaderNavbar({navbar}) {

  return (
    <ul className="header__navbar">
      {navbar.map((i) => (
        <a className="header__navbar-item" href={i.link} key={i.id}>
          {i.title}
        </a>
      ))}
    </ul>
  );
}

export default HeaderNavbar;
