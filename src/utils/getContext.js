import React from "react";
import getData from "./getData";
const DataContext = React.createContext();
const headerData = getData("header");
const footerData = getData("footer");
const [mainPageData, projectsList] = getData("mainPage");
const [portfolioPageData, projectList] = getData("portfolio");
const projectData = getData("project");
const DataContextProvider = ({ children }) => {
  const state = {
    header: headerData,
    mainPage: mainPageData,
    projectsList: projectsList,
    footer: footerData,
    portfolio: portfolioPageData,
    project: projectData,
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export { DataContextProvider, DataContext };
