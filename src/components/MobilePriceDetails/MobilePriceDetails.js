import { CollapsingField } from "../common/CollapsingField/CollapsingField";
import arrow from "../../images/bottom-arrow.png";

export const MobilePriceDetails = ({ pricesObj }) => {
  return (
    <section className="mobile-price">
      {pricesObj.map((i) => (
        <CollapsingField title={i.title} text={i.options} icon={arrow}/>
      ))}
    </section>
  );
};
