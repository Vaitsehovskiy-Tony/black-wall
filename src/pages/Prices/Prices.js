import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { PriceCards } from "../../components/PriceCards/PriceCards";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";
import { Workflow } from "../../components/Workflow/Workflow";
import { getPriceObj } from "../../utils/getPriceObj";
import { MobilePriceDetails } from "../../components/MobilePriceDetails/MobilePriceDetails";
import { useLayoutEffect } from "react";
import { SEO } from "../../components/common/SEO/SEO";

export const Prices = ({ prices, orderFormContent }) => {
  const isNarrow = window.matchMedia("screen and (max-width: 750px)");

  const priceObj = getPriceObj(prices.priceCard, prices.priceDetails);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: "Black Wall",
    description:
      "BLACK WALL is an interior design and architecture studio. Our team designs residential and public interiors individually designed.",
    keywords: "Design, Interior, Architecture",
    image: "https://api.vaitstony.art/uploads/091_A1640_522f5c2e62.webp",
  };

  return (
    <main className="prices page__wrapper">
      <SEO seoData={seoData} />
      <PageTitle
        description={prices.pageTitle.description}
        title={prices.pageTitle.title}
      />
      <PriceCards cards={prices.priceCard} title={prices.priceCardsTitle} />
      {isNarrow.matches ? (
        <MobilePriceDetails
          pricesObj={priceObj}
          title={prices.priceDetailsTitle}
        />
      ) : (
        <PriceDetails pricesObj={priceObj} details={prices.priceDetails} />
      )}
      <Workflow content={prices.workflow} />
    </main>
  );
};
