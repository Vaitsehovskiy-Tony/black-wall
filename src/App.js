import { Route, Routes } from "react-router-dom";
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
  const handleHeroState = () => {
    setHeroState(!heroState);
  };

  // This will run after the page has mounted
  // useEffect(() => {
  //   const image = new Image();
  //   image.src =
  //     "https://api.vaitstony.art/uploads/hero_Rubinshtejna_ffc22a16df.webp";
  //   image.onload = () => {
  //     console.log(image, heroState);
  //     setHeroState(true);
  //   };
  // }, [setHeroState]);

  createImage(
    "https://api.vaitstony.art/uploads/hero_Rubinshtejna_ffc22a16df.webp"
  ).then((results) => {
    setHeroState(true);
    // console.log("finished", results);
  });

  useEffect(() => {
    const onScroll = () => {
      animationInspector();
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (state === "loading" || !heroState) {
    return <Preloader />;
  }

  // useEffect(() => window.scroll(0, 10000));

  //   useEffect(() => {
  //     const handleContextmenu = e => {
  //         e.preventDefault()
  //     }
  //     document.addEventListener('contextmenu', handleContextmenu)
  //     return function cleanup() {
  //         document.removeEventListener('contextmenu', handleContextmenu)
  //     }
  // }, [ ])

  const seoData = {
    title: "Black Wall",
    description:
      "BLACK WALL is an interior design and architecture studio. Our team designs residential and public interiors individually designed.",
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
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path={"/portfolio"}
          element={
            <Portfolio
              orderFormContent={content.orderForm}
              projectsListContent={content.projectsList}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path={"/prices"}
          element={
            <Prices
              prices={content.prices}
              orderFormContent={content.orderForm}
            />
          }
        ></Route>
      </Routes>
      <Routes>
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
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path={"/contacts"}
          element={
            <Contacts
              orderFormContent={content.orderForm}
              contactUsContent={content.contactUs}
            />
          }
        ></Route>
      </Routes>
      <Modal
        navbar={content.header.navbar}
        orderForm={content.orderForm}
        prices={content.prices.priceCard}
        headerStyle={header}
      />
      <Footer content={content.footer} />
    </div>
  );
}

export default App;
