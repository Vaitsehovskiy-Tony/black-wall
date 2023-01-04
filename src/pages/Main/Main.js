import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { NewProjects } from "../../components/NewProjects/NewProjects";
import { OurTeam } from "../../components/OurTeam/OurTeam";
import { OrderForm } from "../../components/OrderForm/OrderForm";
import { Slider } from "../../components/Slider/Slider";
import { useFetch } from "../../hooks/useFetch";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { getProjectsList } from "../../utils/getProjectsList";

export const Main = () => {
  const projectsList = useFetch("projectList");
  const { isLoading, content } = useFetch("mainPage");

  if (isLoading || projectsList.isLoading) {
    return <Preloader />;
  }

  const projectsListContent = getProjectsList(projectsList.content);

  return (
    <main className="main-page">
      <Hero mainPageData={content} />
      <About mainPageData={content} />
      <Slider mainPageData={content} projectsList={projectsListContent} />
      <NewProjects mainPageData={content} projectsList={projectsListContent} />
      <OurTeam mainPageData={content} />
      {/* <ContactUs mainPageData={content} /> */}
      <OrderForm orderFormData={content.orderForm} display={"none"} />
    </main>
  );
};
