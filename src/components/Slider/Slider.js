import { useState, useEffect, useRef } from "react";

export default function Slider({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [previousSlideIndex, setPreviousSlideIndex] = useState(slides.length-1);
  const enabled = useRef(false);

  let currentSlides = [slides[previousSlideIndex], slides[slideIndex]];

  function changeSlide() {
    const nextSlideIndex =
      slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    setPreviousSlideIndex(slideIndex);
    setSlideIndex(nextSlideIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      enabled.current = true;
      changeSlide();
    }, 300000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="slider">
      {currentSlides.map((slide) => (
        <div className={`slider_slide ${enabled.current  ? 'enabled' : ''}`} key={slide.id}>
          <img className="slider__img" src={slide.url} alt="slide img" />
          <div className="slider__text-block">
            <h2 className="slider__title">{slide.title}</h2>
            <h2 className="slider__subtitle">{slide.subtitle}</h2>
            <span className="slider__text">{slide.text}</span>
          </div>
          <a className="slider__arrow-link" href={slide.linkToPost}>{'>'}
          </a>
        </div>
      ))}
    </div>
  );
}
