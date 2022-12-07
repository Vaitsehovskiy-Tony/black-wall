import { useLocation } from "react-router-dom";

export const HeaderStyle = () => {
  const location = useLocation();

  if (location.pathname === "/portfolio" || location.pathname === "/prices") {
    return "dark";
  }
  return "light";
};
