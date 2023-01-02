import Hero from "../../components/Hero/Hero";
import { useContext, useEffect, useState } from "react";
import About from "../../components/About/About";
import NewProjects from "../../components/NewProjects/NewProjects";
import OurTeam from "../../components/OurTeam/OurTeam";
import OrderForm from "../../components/OrderForm/OrderForm";
import ContactUs from "../../components/ContactUs/ContactUs";
import Slider from "../../components/Slider/Slider";
import { DataContext } from "../../utils/getContext";
import DataElement from "../../tmp/DataElement";
import { useQuery } from "react-query";
import Fetch from "../../hooks/Fetch";
import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";

const Main = () => {

  const { projectsList } = useContext(DataContext);

  const {isLoading, content} = useFetch('mainPage', 'page');
  
  if (isLoading) {
    return <Preloader/>
  }

  return (
    <main className="main-page">
      {/* <p>{data.data[0].attributes.title}</p> */}
      <Hero mainPageData={content} />
      <About mainPageData={content} />
      {/* <Slider mainPageData={mainPage} projectsList={projectsList} /> */}
      <NewProjects mainPageData={content} projectsList={projectsList} />
      {/* <OurTeam mainPageData={mainPage} /> */}
      {/*<ContactUs mainPageData={mainPage} />*/}
      <OrderForm mainPageData={content} display={"none"} />
    </main>
  );
};

export default Main;
