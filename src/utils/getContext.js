import React from "react";
import GetData from "./GetData";

const DataContext = React.createContext();
const {
  header,
  mainPage,
  projectsList,
  footer,
  portfolio,
  project,
  orderForm,
  contacts,
  prices,
} = GetData();

const DataContextProvider = ({ children }) => {

  const state = {
    header,
    mainPage,
    projectsList,
    footer,
    portfolio,
    project,
    orderForm,
    contacts,
    prices,
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export { DataContextProvider, DataContext };
