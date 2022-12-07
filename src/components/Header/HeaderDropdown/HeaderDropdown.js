import React from "react";

function HeaderDropdown({ dropdown }) {
  const defaulDropdownMenu = [
    {
      id: 1,
      title: "О нас",
      link: "/",
    },
    {
      id: 2,

      title: "Портфолио",
      link: "/",
    },
    {
      id: 3,

      title: "Контакты",
      link: "/",
    },
    {
      id: 4,

      title: "Этапы проекта",
      link: "/",
    },
    {
      id: 5,

      title: "Заказать проект",
      link: "/",
    },
  ];

  const dropdownItem = dropdown ? dropdown : defaulDropdownMenu;

  return (
    <div className="header__dropdown" key={dropdownItem.id}>
      <span className="header__navbar-item">{dropdownItem.title}</span>
      <ul className="header__dropdown-menu">
        {dropdownItem.dropdown.map((i) => (
          <a className="header__dropdown-item" href={i.link} key={i.id}>
            {i.title}
          </a>
        ))}
      </ul>
    </div>
  );
}

export default HeaderDropdown;
