import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Project from "./pages/Project/Project";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contacts from "./pages/Contacts/Contacts";
import Prices from "./pages/Prices/Prices";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import MainApi from "./api/MainApi";
import { headerRoute } from "./constants/routes"


import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();


function App() {
  const location = useLocation();
  // console.log(MainApi(headerRoute))

  // todo: remove
  // useEffect(() => window.scrollTo(0, 1000));

  return (
    <QueryClientProvider client={queryClient}>

    <div className="page">
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Main />}></Route>
      </Routes>
      {/*<Main mainPageData={mainPageData} projectsList={projectsList} />*/}
      <Routes>
        <Route exact path={"/portfolio"} element={<Portfolio />}></Route>
      </Routes>
      <Routes>
        <Route exact path={"/prices"} element={<Prices />}></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path={"/project/some-project"}
          element={<Project />}
        ></Route>
      </Routes>
      <Routes>
        <Route exact path={"/contacts"} element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
    </QueryClientProvider>

  );
}

export default App;
