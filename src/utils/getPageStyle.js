import { useLocation } from "react-router-dom";

export const PageStyles = () => {
  const location = useLocation();
  const styles = {};

  if (location.pathname === "/portfolio" || location.pathname === "/prices") {

    styles.header = "dark";
    styles.page = "light"

  } else if (location.pathname.includes("/project")) {
    
    styles.header = "light";
    styles.page = "light"

  } else {

    styles.header = "light";
    styles.page = "dark"

  }

  return styles;
};
