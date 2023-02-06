import { useState } from "react";
import imageSample from "../../images/image-sample.webp";

export const ComparisonSlider = ({ element, staticText }) => {
  const [sliderValue, setSliderValue] = useState("50");
  const firstImage =
    element && element.imageAfter
      ? `https://api.vaitstony.art${element.imageBefore.data.attributes.url}`
      : imageSample;
  const secondImage =
    element && element.imageAfter
      ? `https://api.vaitstony.art${element.imageAfter.data.attributes.url}`
      : imageSample;

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <section className="comparison">
      <div className="comparison__slider-container">
        <img className="comparison__image" src={firstImage} alt="before" />
        <img
          className="comparison__image_finaly"
          src={secondImage}
          alt="after"
          style={{
            "--exposure": `${sliderValue - 0.5}%`,
          }}
        />
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          className="comparison__slider"
          name="slider"
          id="slider"
          onChange={handleChange}
        />
        <div
          className="slider-button"
          style={{ left: `calc(${sliderValue}% - (14px + .5vmin))` }}
        ></div>
      </div>
      <div className="comparison__description">
        <span className="comparison__text">
          {!!element.textBefore
            ? element.textBefore
            : staticText.comparisonSliderTextBefore}
        </span>
        <input
          type="range"
          className="comparison__mini-slider"
          min="1"
          max="100"
          value={sliderValue}
          onChange={handleChange}
        />
        <span className="comparison__text">
          {!!element.textAfter
            ? element.textAfter
            : staticText.comparisonSliderTextAfter}
        </span>
      </div>
    </section>
  );
};
