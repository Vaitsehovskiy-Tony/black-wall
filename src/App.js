import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import getData from "./utils/getData";

function App() {

  const headerData = getData('header');
  const mainPageData = getData('mainPage');

  return (
      <div className="page">
        <Header headerData={headerData}/>
        <Hero mainPageData={mainPageData}/>
      </div> 
  );
}

export default App;
