import { useState } from "react";

export const ComparisonSlider = ({ element, staticText }) => {

  const firstImage = `https://api.vaitstony.art${element.imageAfter.data.attributes.url}`;
  const secondImage = `https://api.vaitstony.art${element.imageBefore.data.attributes.url}`;
  const [sliderValue, setSliderValue] = useState("50");

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <section className="comparison">
      <div className="comparison__slider-container">
      <img
          className="comparison__image"
          src={firstImage}
        />
        <img
          className="comparison__image_finaly"
          src={secondImage}
          style={{
            '--exposure': `${sliderValue - .5}%`,
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
