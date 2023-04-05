import { getProjectsList } from "../utils/getProjectsList";
import { useFetch } from "./useFetch";

export const useMultiFetch = () => {
  const result = {
    state: null,
    content: null,
  };

  const headerContent = useFetch("header");
  const orderFormContent = useFetch("orderForm");
  const termsContent = useFetch("terms");
  const notFound = useFetch("notFound");
  const projectsListContent = useFetch("projectList");
  const mainPageContent = useFetch("mainPage");
  const contactUsContent = useFetch("contactUs");
  const footerContent = useFetch("footer");
  const pricesContent = useFetch("pricesPage");
  const staticTextsContent = useFetch("staticTexts");

  const results = [
    headerContent,
    termsContent,
    notFound,
    orderFormContent,
    projectsListContent,
    mainPageContent,
    contactUsContent,
    footerContent,
    pricesContent,
    staticTextsContent,
  ];

  if (results.some((i) => i.isLoading)) {
    result.state = "loading";
    return result;
  } else if (results.some((i) => i.error)) {
    result.state = "error";
    return result;
  }

  const projectsList = getProjectsList(projectsListContent.content);

  result.state = "success";
  result.content = {
    header: headerContent.content,
    orderForm: orderFormContent.content,
    projectsList,
    mainPage: mainPageContent.content,
    contactUs: contactUsContent.content,
    prices: pricesContent.content,
    footer: footerContent.content,
    terms: termsContent.content,
    notFound: notFound.content,
    staticTexts: staticTextsContent.content,
  };

  return result;
};
