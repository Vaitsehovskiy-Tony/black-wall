import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { ProjectSample } from "../../components/ProjectSample/ProjectSample";
import { OrderForm } from "../../components/OrderForm/OrderForm";
import { useFetch } from "../../hooks/useFetch";
import { getProjectsList } from "../../utils/getProjectsList";
import { useEffect, useState } from "react";

export const Portfolio = () => {
  const [filter, setFilter] = useState();
  const { isLoading, content } = useFetch("portfolioPage");
  const orderForm = useFetch("orderForm");
  const projectsList = useFetch("projectList");
  const tagsArr = useFetch("tags");

  useEffect(() => {
    if (!tagsArr.isLoading && !!tagsArr.content && !filter) {
      setFilter(tagsArr.content[0].attributes.tag);
    }
  }, [tagsArr, filter]);

  if (
    isLoading ||
    projectsList.isLoading ||
    orderForm.isLoading ||
    tagsArr.isLoading
  ) {
    return <h1>loading</h1>;
  }
  const tags = tagsArr.content.map((i) => {
    return i.attributes.tag;
  });

  const projectsListContent = getProjectsList(projectsList.content);
  const handleClick = (e) => {
    setFilter(e.target.textContent);
  };

  return (
    <main className="portfolio">
      <PageTitle
        description={content.portfolioDescription}
        title={content.portfolioTitle}
      />
      <div className="portfolio__tags">
        {tags.map((i) => (
          <span
            className={`portfolio__tag ${
              filter === i ? "enabled" : "disabled"
            }`}
            onClick={handleClick}
            key={i.id}
          >
            {i}
          </span>
        ))}
      </div>
      <div className="portfolio__items-container">
        {projectsListContent.map((i) => (
          <ProjectSample
            projectItem={i}
            filter={filter === tags[0] ? null : filter}
            key={i.id}
          />
        ))}
      </div>
      <OrderForm orderFormData={orderForm.content} display={"visible"} />
    </main>
  );
};
