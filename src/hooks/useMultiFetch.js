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

  if (
    headerContent.isLoading ||
    termsContent.isLoading ||
    notFound.isLoading ||
    orderFormContent.isLoading ||
    projectsListContent.isLoading ||
    mainPageContent.isLoading ||
    contactUsContent.isLoading ||
    footerContent.isLoading ||
    pricesContent.isLoading ||
    staticTextsContent.isLoading
  ) {
    result.state = "loading";
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
