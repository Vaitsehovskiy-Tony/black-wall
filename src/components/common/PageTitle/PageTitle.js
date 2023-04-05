import { useLocation } from "react-router-dom";

export const PageTitle = ({ description, title }) => {
  const location = useLocation();
  const position =
    location.pathname === "/portfolio" ||
    location.pathname === "/prices" ||
    location.pathname === "/contacts"
      ? ""
      : "fixed";

  return (
    <div className={`page-title__content ${position}`}>
      <h2 className="page-title__description">{description}</h2>
      <h1 className="page-title__title">{title}</h1>
    </div>
  );
};
