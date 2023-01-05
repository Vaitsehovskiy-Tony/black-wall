import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { PriceCards } from "../../components/PriceCards/PriceCards";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { useFetch } from "../../hooks/useFetch";
import { Workflow } from "../../components/Workflow/Workflow";

export const Prices = () => {
  const { isLoading, content } = useFetch("pricesPage");

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <main className="prices-page">
      <PageTitle
        description={content.pageTitle.description}
        title={content.pageTitle.title}
      />
      <PriceCards cards={content.priceCard} />
      <Workflow content={content.workflow} />
      <PriceDetails cards={content.priceCard} details={content.priceDetails} />
    </main>
  );
};
