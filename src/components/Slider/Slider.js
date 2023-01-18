import { useState } from "react";
import rightArrow from "../../images/right-arrow.png";
import leftArrow from "../../images/left-arrow.png";

export const Slider = ({ content }) => {
  // const isLoop = true;

  // const direction = useRef("normal");
  // const position = useRef("start");
  const [indexes, setIndexes] = useState([-1, 0, 1]);

  function simpleNextSlide() {
    if (indexes[indexes.length - 1] < content.length) {
      setIndexes(
        indexes.map((index) => {
          return index + 1;
        })
      );
    }
  }

  function simplePreviousSlide() {
    if (indexes[0] >= 0) {
      setIndexes(
        indexes.map((index) => {
          return index - 1;
        })
      );
    }
  }

  // function nextSlide() {
  //   // isActive.current = true;
  //   setIndexes(
  //     indexes.map((index) => {
  //       if (index === content.length - 1) {
  //         return 0;
  //       }
  //       return index + 1;
  //     })
  //   );
  // }
  //
  // function previousSlide() {
  //   setIndexes(
  //     indexes.map((index) => {
  //       if (index === 0) {
  //         return content.length - 1;
  //       }
  //       return index - 1;
  //     })
  //   );
  // }

  function getImg(i) {
    return !!i
      ? `https://api.vaitstony.art${i.sliderImage.data.attributes.url}`
      : "";
  }
  return (
    <div className="slider wrapper">
      <div className="slider__slides">
        {indexes.map((i) =>
          !!content[i] ? (
            <figure className={`slider__slide `} key={i}>
              <img
                className="slider__img"
                src={getImg(content[i])}
                alt="slide img"
              />
              <figcaption className="slider__description-container">
                <hr className="slider__description-line" />
                <span className="slider__description">
                  {content[i].sliderDescription}
                </span>
              </figcaption>
            </figure>
          ) : (
            <div className="slider__slide fake" />
          )
        )}
      </div>
      <div className="slider__index-container">
        <img
          src={leftArrow}
          alt=""
          className="slider__arrow"
          onClick={simplePreviousSlide}
        />
        <span className="slider__index-item">
          {indexes[1] < 10 ? `0${indexes[1] + 1}` : indexes[1]}
        </span>
        <hr className="slider__index-line" />
        <span className="slider__index-item">
          {indexes.length < 10 ? `0${content.length}` : content.length}
        </span>
        <img
          src={rightArrow}
          alt="slider arrow"
          className="slider__arrow"
          onClick={simpleNextSlide}
        />
      </div>
    </div>
  );
};
