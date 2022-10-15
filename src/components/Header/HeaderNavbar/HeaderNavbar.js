import React from "react";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";

function HeaderNavbar() {
  const headerNavbar = [
    {
      id: 1,
      title: "Портфолио",
      link: "/",
    },
    {
      id: 2,

      title: "Контакты",
      link: "/",
    },
    {
      id: 3,

      title: "Цены",
      link: "/",
    },
  ];
  return (
    <ul className="header__navbar">
      <HeaderDropdown />
      {headerNavbar.map((i) => (
        <a className="header__navbar-item" href={i.link} key={i.id}>
          {i.title}
        </a>
      ))}
    </ul>
  );
}

export default HeaderNavbar;
