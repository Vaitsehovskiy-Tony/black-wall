import { useQuery } from "react-query";
import { makeFetch } from "../services/route.service";

export const useFetch = (name) => {
  const { isLoading, data, status, error } = useQuery(`${name}Data`, () => makeFetch(name), {
    keepPreviousData: true,
  });

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
      case "orderForm":
        content = data.data.attributes;
        break;
      case "pricesPage":
        content = data.data[0].attributes;
        break;
      default:
        return undefined;
    }
    console.log(content)
  }
  if (status === "error") {
  }

  return { isLoading, content };
};
