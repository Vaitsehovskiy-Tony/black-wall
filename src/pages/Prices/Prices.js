import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { PriceCards } from "../../components/PriceCards/PriceCards";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";
import { Preloader } from "../../components/common/Preloader/Preloader";
import { useFetch } from "../../hooks/useFetch";
import { Workflow } from "../../components/Workflow/Workflow";
import { getPriceObj } from "../../utils/getPriceObj";
import { MobilePriceDetails } from "../../components/MobilePriceDetails/MobilePriceDetails";

export const Prices = () => {
  const { isLoading, content } = useFetch("pricesPage");

  if (isLoading) {
    return <Preloader />;
  }

  const isNarrow = window.matchMedia("screen and (max-width: 750px)");
  const priceObj = getPriceObj(content.priceCard, content.priceDetails);

  return (
    <main className="prices-page">
      <PageTitle
        description={content.pageTitle.description}
        title={content.pageTitle.title}
      />
      <PriceCards cards={content.priceCard} />
      <Workflow content={content.workflow} />
      {isNarrow.matches ? (
        <MobilePriceDetails pricesObj={priceObj}/>
      ) : (
        <PriceDetails pricesObj={priceObj} details={content.priceDetails} />
      )}
    </main>
  );
};
