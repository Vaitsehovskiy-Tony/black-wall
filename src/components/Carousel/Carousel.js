import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import rightArrow from "../../images/right-arrow.png";
import leftArrow from "../../images/left-arrow.png";
import { ProgressBar } from "../common/ProgressBar/ProgressBar";

export const Carousel = ({ content }) => {
  const [current, setCurrent] = useState(-1);
  const isLoop = false;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
  });

  const nextSlide = () => {
    return current < content.length - 2 ? setCurrent(current + 1) : "";
  };

  const previousSlide = () => {
    return current === -1 ? "" : setCurrent(current - 1);
  };

  const getImg = (i) => {
    return `https://api.vaitstony.art${i.sliderImage.data.attributes.url}`;
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 37) {
      previousSlide();
    } else if (event.keyCode === 39) {
      nextSlide();
    }
  };

  return (
    <div className="carousel wrapper">
      <div
        className="carousel__slides"
        style={{
          "--index": current,
        }}
        {...swipeHandlers}
        onKeyDown={handleKeyPress}
        tabIndex={0}
      >
        {content.map((item, index) => (
          <figure className={`carousel__slide `} key={index}>
            <img className="carousel__img" src={getImg(item)} alt="slide img" />
            <figcaption className="carousel__description-container">
              <span className="carousel__description">
                {item.sliderDescription}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="carousel__index-container">
        <img
          src={leftArrow}
          alt=""
          className="carousel__arrow"
          onClick={previousSlide}
        />
        <span className="carousel__index-item">
          {current < 10 ? `0${current + 2}` : current}
        </span>
        <hr className="carousel__index-line" />
        <span className="carousel__index-item">
          {current < 10 ? `0${content.length}` : content.length}
        </span>
        <img
          src={rightArrow}
          alt="carousel arrow"
          className="carousel__arrow"
          onClick={nextSlide}
        />
      </div>
      <ProgressBar length={content.length} index={current + 1} />
    </div>
  );
};
