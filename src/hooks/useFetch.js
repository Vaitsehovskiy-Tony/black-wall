import { useQuery } from "react-query";
import { makeFetch } from "../services/route.service";
import { LangContext } from "../utils/getLangContext";
import { useContext } from "react";

export const useFetch = (name, id) => {
  const { locales } = useContext(LangContext);
  const { isLoading, data, status, error } = useQuery(
    [`${!!id ? id : name}Data`, locales.activeLocale],
    () => makeFetch(name, id, locales.activeLocale),
    {
      keepPreviousData: true,
    }
  );

  let content = null;

  // todo: unify cases
  if (status === "success") {
    switch (name) {

      case "mainPage":
        content = data.data[0].attributes;
        break;

      case "contactsPage":
        content = data.data[0].attributes;
        break;

      case "portfolioPage":
        content = data.data[0].attributes;
        break;

      case "pricesPage":
        content = data.data[0].attributes;
        break;

      case "orderForm":
        content = data.data.attributes;
        break;

      case "header":
        content = data.data.attributes.header;
        break;

      case "footer":
        content = data.data.attributes.footer;
        break;

      case "contactUs":
        content = data.data.attributes;
        break;

      case "projectList":
        content = data.data;
        break;

      case "projectPage":
        content = data.data.attributes;
        break;

        case "tags":
          content = data.data;
          break;

      default:
        return undefined;
    }
  }
  if (status === "error") {
  }

  return { isLoading, content, error};
};
