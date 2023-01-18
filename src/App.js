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
// import { useEffect } from "react";

function App() {
  // useEffect(() => window.scroll(0, 5000));

  const { header, page } = PageStyles();
  const { state, content } = useMultiFetch();

  if (state === "loading") {
    return <Preloader />;
  }

  return (
    <div className={`page page_${page}`}>
      <Header
        headerStyle={header}
        content={content.header}
        orderFormContent={content.orderForm}
        pricesModal={content.prices.priceCard}
      />
      <Modal
        navbar={content.header.navbar}
        orderForm={content.orderForm}
        prices={content.prices.priceCard}
        headerStyle={header}
      />
      <Routes>
        <Route exact path={"/"} element={<Main content={content} />}></Route>
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
          path={`/project/:id`}
          element={
            <Project
              orderFormContent={content.orderForm}
              projectsListContent={content.projectsList}
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
      <Footer content={content.footer} />
    </div>
  );
}

export default App;
