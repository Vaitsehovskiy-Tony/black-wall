import { CollapsingField } from "../common/CollapsingField/CollapsingField";
import arrow from "../../images//arrow_down-black.webp";

export const MobilePriceDetails = ({ pricesObj, title }) => {
  return (
    <section className="mobile-price wrapper">
      <h3 className="mobile-price__tile">{title}</h3>
      {pricesObj.map((i) => (
        <CollapsingField
          title={i.title}
          text={i.options}
          type="object"
          icon={arrow}
        />
      ))}
    </section>
  );
};
