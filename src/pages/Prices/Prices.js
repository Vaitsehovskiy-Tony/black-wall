import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { PriceCards } from "../../components/PriceCards/PriceCards";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { useFetch } from "../../hooks/useFetch";

export const Prices = () => {
  const { isLoading, content } = useFetch("pricesPage");

  if (isLoading) {
    return <Preloader />;
  }
  console.log(content)

  return (
    <main className="prices-page">
      <PageTitle
        description={content.pageTitle.description}
        title={content.pageTitle.title}
      />
      <PriceCards cards={content.priceCard} />
      <PriceDetails cards={content.priceCard} details={content.priceDetails} />
    </main>
  );
};
