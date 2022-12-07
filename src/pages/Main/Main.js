import Hero from "../../components/Hero/Hero";
import { useContext } from "react";
import About from "../../components/About/About";
import NewProjects from "../../components/NewProjects/NewProjects";
import OurTeam from "../../components/OurTeam/OurTeam";
import OrderForm from "../../components/OrderForm/OrderForm";
import ContactUs from "../../components/ContactUs/ContactUs";
import Slider from "../../components/Slider/Slider";
import { DataContext } from "../../utils/getContext";
const Main = () => {
  const { mainPage, projectsList } = useContext(DataContext);

  return (
    <main className="main-page">
      <Hero mainPageData={mainPage} />
      <About mainPageData={mainPage} />
      <Slider mainPageData={mainPage} projectsList={projectsList} />
      <NewProjects mainPageData={mainPage} projectsList={projectsList} />
      <OurTeam mainPageData={mainPage} />
      {/*<ContactUs mainPageData={mainPage} />*/}
      <OrderForm mainPageData={mainPage} />
    </main>
  );
};

export default Main;
