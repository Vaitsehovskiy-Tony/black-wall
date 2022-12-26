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

const Main = () => {

  // const [someData, setSomeData] = useState({});


  const fetchData = async () => {
    const response = await fetch("https://api.vaitstony.art/api/contacts-pages?locale=ru&populate=%2A");
    return response.json();
    // console.log('1', data);
  }

  const {data, status} = useQuery("someData", fetchData);
  // console.log('2', data.results)

  // console.log('2', someData.results);

  console.log('3', status);
  const { mainPage, projectsList } = useContext(DataContext);

  if (status === "loading") {
    return <h1>loading</h1>
  }


  return (
    <main className="main-page">
      {/* <p>{data.data[0].attributes.title}</p> */}
      <Hero mainPageData={mainPage} />
      <About mainPageData={mainPage} />
      <Slider mainPageData={mainPage} projectsList={projectsList} />
       <NewProjects mainPageData={mainPage} projectsList={projectsList} />
      <OurTeam mainPageData={mainPage} />
      {/*<ContactUs mainPageData={mainPage} />*/}
      <OrderForm mainPageData={mainPage} display={"none"} />
    </main>
  );
};

export default Main;
