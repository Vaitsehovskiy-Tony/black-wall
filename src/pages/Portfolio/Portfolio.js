import { useContext } from "react";
import { DataContext } from "../../utils/getContext";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import ProjectSample from "../../components/ProjectSample/ProjectSample";
import OrderForm from "../../components/OrderForm/OrderForm";
const Portfolio = () => {
  const { portfolio, projectsList } = useContext(DataContext);
  const staticTags = ["Все", "Жилые помещения", "Нежилые помещения"];
  const state = "disabled";

  console.log(portfolio, projectsList);

  return (
    <main className="portfolio">
      <PageTitle
        description={portfolio.portfolioDescription}
        title={portfolio.portfolioTitle}
      />
      <div className="portfolio__tags">
        {staticTags.map((i) => (
          <span className={`portfolio__tag ${state}`}>{i}</span>
        ))}
      </div>
      <div className="portfolio__items-container">
        {projectsList.map((i) => (
          <ProjectSample projectItem={i} />
        ))}
      </div>
      <OrderForm display={""} />
    </main>
  );
};

export default Portfolio;
