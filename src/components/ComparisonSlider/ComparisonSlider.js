import { useState } from "react";

export const ComparisonSlider = ({ element }) => {
  const firstImage = `https://api.vaitstony.art${element.images.data[0].attributes.url}`;
  const secondImage = `https://api.vaitstony.art${element.images.data[1].attributes.url}`;
  const [sliderValue, setSliderValue] = useState("500");

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <section className="comparison">
      <div className="comparison__slider-container">
        <div
          className="comparison__image"
          style={{ backgroundImage: `url(${firstImage})` }}
        ></div>
        <div
          className="comparison__image"
          style={{
            width: `${sliderValue * 0.1}%`,
            backgroundImage: `url(${secondImage})`,
          }}
        ></div>
        <input
          type="range"
          min="1"
          max="1000"
          value={sliderValue}
          className="comparison__slider"
          name="slider"
          id="slider"
          onChange={handleChange}
        />
        <div
          className="slider-button"
          style={{ left: `calc(${sliderValue * 0.1}% - 15px)` }}
        ></div>
      </div>
      <div className="comparison__description">
        <span className="comparison__text">{element.textBefore}</span>
        <input
          type="range"
          className="comparison__mini-slider"
          min="1"
          max="1000"
          value={sliderValue}
        />
        <span className="comparison__text">{element.textAfter}</span>
      </div>
    </section>
  );
};
