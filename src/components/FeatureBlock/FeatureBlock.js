import closedArrow from "../../images/bottom-arrow.png";

export const FeatureBlock = ({ element }) => {
  const text = element.text;
  return (
    <div className="feature">
      <div className="feature__top-container">
        <h6 className="feature__title">{element.title}</h6>
        <img src={closedArrow} alt="arrow icon" className="feature__icon" />
      </div>
      <div
        className="feature__text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
