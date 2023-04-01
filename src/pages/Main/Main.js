import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { NewProjects } from "../../components/NewProjects/NewProjects";
import { OurTeam } from "../../components/OurTeam/OurTeam";
import { OrderForm } from "../../components/OrderForm/OrderForm";
import { Carousel } from "../../components/Carousel/Carousel";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import { Instagram } from "../../components/Instagram/Instagram";
import { useLayoutEffect, useState } from "react";

export const Main = ({ content, handleHeroState }) => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className={`main-page page__wrapper`}>
      <Hero content={content.mainPage.hero} handleHeroState={handleHeroState}/>
      <About content={content.mainPage.about} />
      <Carousel
        projectsList={content.projectsList}
      />
      <NewProjects
        content={content.mainPage.newProjects}
        projectsList={content.projectsList}
        staticText={content.staticTexts.textsMain}
      />
      <OurTeam
        content={content.mainPage.ourTeam}
        members={content.mainPage.teamMember}
      />
      <Instagram content={content.mainPage.instagram} />
      <ContactUs content={content.contactUs} />
      <OrderForm
        content={content.orderForm}
        display={"none"}
      />
    </main>
  );
};
