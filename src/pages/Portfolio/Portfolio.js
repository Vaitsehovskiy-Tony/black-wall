import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { ProjectSample } from "../../components/ProjectSample/ProjectSample";
import { OrderForm } from "../../components/OrderForm/OrderForm";
import { useFetch } from "../../hooks/useFetch";
import { getProjectsList } from "../../utils/getProjectsList";

export const Portfolio = () => {

  const { isLoading, content } = useFetch("portfolioPage");
  const orderForm = useFetch("orderForm");
  const projectsList = useFetch("projectList");

  const staticTags = ["Все", "Жилые помещения", "Нежилые помещения"];
  const state = "disabled";

  if (isLoading || projectsList.isLoading || orderForm.isLoading) {
    return <h1>loading</h1>;
  }
  const projectsListContent = getProjectsList(projectsList.content);

  return (
    <main className="portfolio">
      <PageTitle
        description={content.portfolioDescription}
        title={content.portfolioTitle}
      />
      <div className="portfolio__tags">
        {staticTags.map((i) => (
          <span className={`portfolio__tag ${state}`}>{i}</span>
        ))}
      </div>
      <div className="portfolio__items-container">
        {projectsListContent.map((i) => (
          <ProjectSample projectItem={i} />
        ))}
      </div>
      <OrderForm orderFormData={orderForm.content} display={'none'} />
    </main>
  );
};
