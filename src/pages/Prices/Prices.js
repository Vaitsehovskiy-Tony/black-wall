import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { PriceCards } from "../../components/PriceCards/PriceCards";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";
import { Workflow } from "../../components/Workflow/Workflow";
import { getPriceObj } from "../../utils/getPriceObj";
import { MobilePriceDetails } from "../../components/MobilePriceDetails/MobilePriceDetails";
import { useLayoutEffect } from "react";

export const Prices = ({ prices, orderFormContent }) => {
  const isNarrow = window.matchMedia("screen and (max-width: 750px)");

  const priceObj = getPriceObj(prices.priceCard, prices.priceDetails);
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className="prices page__wrapper">
      <PageTitle
        description={prices.pageTitle.description}
        title={prices.pageTitle.title}
      />
      <PriceCards cards={prices.priceCard}  orderForm={orderFormContent}/>
      <Workflow content={prices.workflow} />
      {isNarrow.matches ? (
        <MobilePriceDetails
          pricesObj={priceObj}
          title={prices.priceDetailsTitle}
        />
      ) : (
        <PriceDetails pricesObj={priceObj} details={prices.priceDetails} />
      )}
    </main>
  );
};
