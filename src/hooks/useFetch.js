import { useQuery } from "react-query";
import { makeFetch } from "../services/route.service";

export const useFetch = (name, id) => {
  const { isLoading, data, status, error }= useQuery(
    `${!!id ? id : name}Data`,
    () => makeFetch(name, id),
    {
      keepPreviousData: true,
    }
  );

  let content = null;

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
      case "projectList":
        content = data.data;
        break;
      case "projectPage":
        debugger
        content = data.data.attributes;
        break;
      default:
        return undefined;
    }
  }
  if (status === "error") {
  }

  return { isLoading, content };
};
