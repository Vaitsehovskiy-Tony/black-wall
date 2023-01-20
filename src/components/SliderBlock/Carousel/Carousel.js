import { useState } from "react";
import rightArrow from "../../../images/right-arrow.png";
import leftArrow from "../../../images/left-arrow.png";

export const Carousel = ({content}) => {
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
    <div className="carousel wrapper">
      <div className="carousel__slides">
        {indexes.map((i) =>
          !!content[i] ? (
            <figure className={`carousel__slide `} key={i}>
              <img
                className="carousel__img"
                src={getImg(content[i])}
                alt="slide img"
              />
              <figcaption className="carousel__description-container">
                <span className="carousel__description">
                  {content[i].sliderDescription}
                </span>
              </figcaption>
            </figure>
          ) : (
            <div className="carousel__slide fake" />
          )
        )}
      </div>
      <div className="carousel__index-container">
        <img
          src={leftArrow}
          alt=""
          className="carousel__arrow"
          onClick={simplePreviousSlide}
        />
        <span className="carousel__index-item">
          {indexes[1] < 10 ? `0${indexes[1] + 1}` : indexes[1]}
        </span>
        <hr className="carousel__index-line" />
        <span className="carousel__index-item">
          {indexes.length < 10 ? `0${content.length}` : content.length}
        </span>
        <img
          src={rightArrow}
          alt="carousel arrow"
          className="carousel__arrow"
          onClick={simpleNextSlide}
        />
      </div>
    </div>
  );
}
