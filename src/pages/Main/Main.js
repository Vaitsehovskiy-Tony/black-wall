import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { NewProjects } from "../../components/NewProjects/NewProjects";
import { OurTeam } from "../../components/OurTeam/OurTeam";
import { OrderForm } from "../../components/OrderForm/OrderForm";
import { Slider } from "../../components/Slider/Slider";
import { ContactUs } from "../../components/ContactUs/ContactUs";

export const Main = ({ content }) => {
  return (
    <main className="main-page page__wrapper">
      <Hero content={content.mainPage.hero} />
      <About content={content.mainPage.about} />
      <Slider
        content={content.mainPage.slides}
        projectsList={content.projectsList}
      />
      <NewProjects
        content={content.mainPage.newProjects}
        projectsList={content.projectsList}
      />
      <OurTeam content={content.mainPage.ourTeam} members={content.mainPage.teamMember} />
      <ContactUs content={content.contactUs} />
      <OrderForm
        content={content.orderForm}
        display={"none"}
        onClick={() => console.log("click")}
      />
    </main>
  );
};
