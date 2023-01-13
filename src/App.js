import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main/Main";
import { Project } from "./pages/Project/Project";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Contacts } from "./pages/Contacts/Contacts";
import { Prices } from "./pages/Prices/Prices";
import { Footer } from "./components/Footer/Footer";
import { QueryClientProvider, QueryClient } from "react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  useEffect(() => window.scroll(0, 6000));

  return (
    <QueryClientProvider client={queryClient}>
      <div className="page">
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Main />}></Route>
        </Routes>
        <Routes>
          <Route exact path={"/portfolio"} element={<Portfolio />}></Route>
        </Routes>
        <Routes>
          <Route exact path={"/prices"} element={<Prices />}></Route>
        </Routes>
        <Routes>
          <Route exact path={`/project/:id`} element={<Project />}></Route>
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
