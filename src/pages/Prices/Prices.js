import { useContext } from "react";
import { DataContext } from "../../utils/getContext";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import { PriceCards } from "../../components/PriceCards/PriceCards";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";

const Prices = () => {
  const { prices } = useContext(DataContext);
  console.log(prices);
  return (
    <main className="prices-page">
      <PageTitle
        description={prices.pageTitle.description}
        title={prices.pageTitle.title}
      />
      <PriceCards cards={prices.priceCard} />
      <PriceDetails cards={prices.priceCard} details={prices.priceDetails} />
    </main>
  );
};

export default Prices;
