import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main/Main";
import { Project } from "./pages/Project/Project";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Contacts } from "./pages/Contacts/Contacts";
import { Prices } from "./pages/Prices/Prices";
import { Footer } from "./components/Footer/Footer";
import { PageStyles } from "./utils/getPageStyle";
import { Preloader } from "./components/common/Preloader/Preloader";
import { useMultiFetch } from "./hooks/useMultiFetch";
import { Modal } from "./components/Modal/Modal";
import { useEffect, useState } from "react";
import { SEO } from "./components/common/SEO/SEO";
import { animationInspector } from "./services/animationInspector";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { UnderConstruction } from "./pages/UnderConstruction/UnderConstruction";

function createImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = source;
  });
}

function App() {
  const { header, page } = PageStyles();
  const { state, content } = useMultiFetch();
  const [heroState, setHeroState] = useState(false);
  const { pathname } = useLocation();
  const handleHeroState = () => {
    setHeroState(!heroState);
  };

  const paths = ["/", "/portfolio", "/prices", "/contacts"];
  const routeMatches = paths.some(
    (i) => pathname === i || pathname.includes("/project_")
  );
  
  createImage(
    "https://api.vaitstony.art/uploads/hero_Rubinshtejna_ffc22a16df.webp"
  )
    .then((res) => {
      setHeroState(true);
    })
    .catch((err) => console.error(err));

  useEffect(() => {
    const onScroll = () => {
      animationInspector();
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (state === "loading") {
    return <Preloader />;
  } else if (state === "error") {
    return <UnderConstruction />;
  } else if (!routeMatches) { 
    <PageNotFound notFound={content.notFound} />
  }

  const seoData = {
    title: "Студия дизайна интерьера и архитектуры | Black Wall",
    description:
      "BLACK WALL – это дизайна интерьера и архитектуры. Наша команда занимаемся проектированием жилых и общественных интерьеров индивидуального исполнения...",
    keywords: "Design, Interior, Architecture",
    image: "https://api.vaitstony.art/uploads/091_A1640_522f5c2e62.webp",
  };

  return (
    <div className={`page page_${page} ${heroState ? "animate" : ""}`}>
      <SEO seoData={seoData} />
      <Header
        headerStyle={header}
        content={content.header}
        orderFormContent={content.orderForm}
        pricesModal={content.prices.priceCard}
      />
      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <Main
              content={content}
              heroState={heroState}
              handleHeroState={handleHeroState}
            />
          }
        />
        <Route
          exact
          path={"/portfolio"}
          element={
            <Portfolio
              orderFormContent={content.orderForm}
              projectsListContent={content.projectsList}
            />
          }
        />
        <Route
          exact
          path={"/prices"}
          element={
            <Prices
              prices={content.prices}
              orderFormContent={content.orderForm}
            />
          }
        />

        <Route
          exact
          path={`/project_:id`}
          element={
            <Project
              orderFormContent={content.orderForm}
              projectsListContent={content.projectsList}
              staticTexts={content.staticTexts}
            />
          }
        />
        <Route
          exact
          path={"/contacts"}
          element={
            <Contacts
              orderFormContent={content.orderForm}
              contactUsContent={content.contactUs}
            />
          }
        />
        <Route
          path="*"
          element={<PageNotFound notFound={content.notFound} />}
        />
      </Routes>
      <Modal
        navbar={content.header.navbar}
        orderForm={content.orderForm}
        prices={content.prices.priceCard}
        headerStyle={header}
      />
      <Footer content={content.footer} terms={content.terms} />
    </div>
  );
}

export default App;
