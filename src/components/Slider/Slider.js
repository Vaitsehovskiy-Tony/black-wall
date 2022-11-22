import { useState, useEffect, useRef } from "react";

export default function Slider({ slides }) {
  
  const direction = useRef("normal");
  const [secondSlideIndex, setSecondSlideIndex] = useState(0);
  const [firstSlideIndex, setFirstSlideIndex] = useState(slides.length - 1);

  const currentSlides = [slides[firstSlideIndex], slides[secondSlideIndex]];

  function nextSlide() {
    const nextSlideIndex =
      secondSlideIndex === slides.length - 1 ? 0 : secondSlideIndex + 1;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(nextSlideIndex);
  }
  
  const previousSlide = () => {
    direction.current = "reverse";
    const nextSlideIndex =
      secondSlideIndex === 0 ? slides.length - 1 : secondSlideIndex - 1;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(nextSlideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      direction.current = "normal";
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="slider">
      {currentSlides.map((slide) => (
        <div className={`slider_slide ${direction.current}`} key={slide.id}>
          <img
            className="slider__img"
            src={slide.url}
            alt="slide img"
            onClick={previousSlide}
          />
          <div className="slider__text-block">
            <h2 className="slider__title">{slide.title}</h2>
            <h2 className="slider__subtitle">{slide.subtitle}</h2>
            <span className="slider__text">{slide.text}</span>
          </div>
          <a className="slider__arrow-link" href={slide.linkToPost}>
            {">"}
          </a>
        </div>
      ))}
    </div>
  );
}
