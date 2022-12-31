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

const Main = () => {
  const url =
    "https://api.vaitstony.art/api/main-pages?locale=ru&populate[about][populate[slide][populate]]=%2A&populate[newProjects][populate]=%2A&populate[ourTeam][populate]=%2A&populate[contactUs][populate]=%2A&populate[orderForm][populate]=%2A&populate[hero][populate]=%2A&populate[slide][populate]=%2A&populate[projectItem][populate]=%2A&populate[teamMember][populate]=%2A";

  const { data, status, error } = useQuery("someData", () => Fetch(url), {
    keepPreviousData: true,
  });
  const { projectsList } = useContext(DataContext);

  let mainPage;

  if (status === "loading") {
    return <h1>loading</h1>;
  }
  if (status === "success") {
    mainPage = data.data[0].attributes;
  }
  if (status === "error") {
    // console.log(error);
  }
  return (
    <main className="main-page">
      {/* <p>{data.data[0].attributes.title}</p> */}
      <Hero mainPageData={mainPage} />
      <About mainPageData={mainPage} />
      {/* <Slider mainPageData={mainPage} projectsList={projectsList} /> */}
      <NewProjects mainPageData={mainPage} projectsList={projectsList} />
      {/* <OurTeam mainPageData={mainPage} /> */}
      {/*<ContactUs mainPageData={mainPage} />*/}
      <OrderForm mainPageData={mainPage} display={"none"} />
    </main>
  );
};

export default Main;
