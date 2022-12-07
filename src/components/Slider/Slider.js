import { useState, useEffect, useRef } from "react";

export default function Slider({ mainPageData }) {
  const slides = mainPageData.slides;

  const direction = useRef("normal");
  const [secondSlideIndex, setSecondSlideIndex] = useState(0);
  const [firstSlideIndex, setFirstSlideIndex] = useState(slides.length - 1);

  let arr = [];
  for (let i = 0; i < slides.length; i++) {
    arr.push(i);
  }

  const [indexes, setIndexes] = useState(arr.splice(0, 3));
  const currentSlides = [
    slides[firstSlideIndex].sliderImage.data,
    slides[secondSlideIndex].sliderImage.data,
  ];

  function nextSlide() {
    setIndexes(indexes.map((i) => i + 1));
  }

  const previousSlide = () => {
    direction.current = "reverse";
    // const nextSlideIndex =
    //   secondSlideIndex === 0 ? slides.length - 1 : secondSlideIndex - 1;
    // setFirstSlideIndex(secondSlideIndex);
    // setSecondSlideIndex(nextSlideIndex);
  };

  return (
    <div className="slider">
      <div className="slider__slides">
        {indexes.map((i) => (
          <div className={`slider__slide ${direction.current}`} key={i}>
            <img
              className="slider__img"
              src={`http://localhost:1337${slides[i].sliderImage.data.attributes.url}`}
              alt="slide img"
              onClick={nextSlide}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
