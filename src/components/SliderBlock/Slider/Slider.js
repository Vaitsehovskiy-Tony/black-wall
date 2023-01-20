import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const Slider = ({ slides }) => {
  const direction = useRef("normal");
  const [secondSlideIndex, setSecondSlideIndex] = useState(0);
  const [firstSlideIndex, setFirstSlideIndex] = useState(slides.length - 1);
  const [paused, setPaused] = useState(false);
  const currentSlides = [slides[firstSlideIndex], slides[secondSlideIndex]];

  const nextSlide = () => {
    direction.current = "normal";
    const nextSlideIndex =
      secondSlideIndex === slides.length - 1 ? 0 : secondSlideIndex + 1;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(nextSlideIndex);
  };

  const previousSlide = () => {
    direction.current = "reverse";
    const nextSlideIndex =
      secondSlideIndex === 0 ? slides.length - 1 : secondSlideIndex - 1;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(nextSlideIndex);
  };

  const swipeHanlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       direction.current = "normal";
  //       nextSlide();
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <section className="slider__wrapper">
      <div className="slider" {...swipeHanlers}>
        {!!currentSlides.length &&
          currentSlides.map((slide) => (
            <div
              className={`slider_slide ${direction.current}`}
              key={slide.id}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <picture>
                <source media="(min-width:900px)" srcSet={slide.url} />
                <img
                  className="slider__img"
                  src={slide.mobileUrl}
                  alt="slide img"
                />
              </picture>
              <div className="slider__description-container">
                <span className="slider__description">{slide.subtitle}</span>
              </div>
            </div>
          ))}
      </div>
      <ProgressBar length={slides.length} index={secondSlideIndex} />
    </section>
  );
};
