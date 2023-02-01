import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { ProjectSample } from "../../components/ProjectSample/ProjectSample";
import { OrderForm } from "../../components/OrderForm/OrderForm";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { useLayoutEffect } from "react";

export const Portfolio = ({ orderFormContent, projectsListContent }) => {
  const [filter, setFilter] = useState();

  const portfolio = useFetch("portfolioPage");
  const tagsArr = useFetch("tags");
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    if (!tagsArr.isLoading && !!tagsArr.content && !filter) {
      setFilter(tagsArr.content[0].attributes.tag);
    }
  }, [tagsArr, filter]);

  if (portfolio.isLoading || tagsArr.isLoading) {
    return <Preloader />;
  }

  const tags = tagsArr.content.map((i) => {
    return i.attributes.tag;
  });

  const handleClick = (e) => {
    setFilter(e.target.textContent);
  };

  return (
    <main className="portfolio page__wrapper">
      <PageTitle
        description={portfolio.content.portfolioDescription}
        title={portfolio.content.portfolioTitle}
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
      <div className="portfolio__items-container wrapper">
        {projectsListContent.map((i) => (
          <ProjectSample
            projectItem={i}
            filter={filter === tags[0] ? null : filter}
            key={i.id}
          />
        ))}
      </div>
      <OrderForm content={orderFormContent} display={"mixed"} />
    </main>
  );
};
