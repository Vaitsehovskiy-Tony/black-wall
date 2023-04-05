import { CollapsingData } from "./CollapsingData/CollapsingData";
import whiteArrow from "../../../images/arrow_down.webp";
import blackArrow from "../../../images/arrow_down-black.webp";

export const CollapsingField = ({ title, text, iconStyle = "black", type }) => {
  const icon = iconStyle === "white" ? whiteArrow : blackArrow;

  return (
    <>
      <details className="collapsing__container">
        <summary className="collapsing__bar">
          <h4 className="collapsing__title">{title}</h4>
          <img className="collapsing__img" alt="arrow down" src={icon} />
        </summary>
        <CollapsingData text={text} type={type} />
      </details>
      <hr className="collapsing__bottom-line" />
    </>
  );
};
