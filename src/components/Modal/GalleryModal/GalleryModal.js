import rightArrow from "../../../images/right-arrow.webp";
import leftArrow from "../../../images/left-arrow.webp";
import { useState,useLayoutEffect, useDebugValue } from "react";
import { useSwipeable } from "react-swipeable";

export const GalleryModal = ({ modalProps }) => {
  const [current, setCurrent] = useState();

  useLayoutEffect(() => {
    setCurrent(modalProps.index)
  }, [modalProps.index])
  
  const isLoop = false;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
  });

  const nextSlide = () => {
    if (current < modalProps.content.gallery.data.length - 1) {
      setCurrent((current) => current + 1);
    }
  };

  const previousSlide = () => {
    debugger;
    if (current !== 0) {
      setCurrent((current) => current - 1);
    }
  };

  const getImg = (i) => {
    return `https://api.vaitstony.art${i.attributes.url}`;
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 37) {
      previousSlide();
    } else if (event.keyCode === 39) {
      nextSlide();
    }
  };

  return (
    <div className="gallery-modal">
      <img
        className="gallery-modal__icon"
        onClick={previousSlide}
        src={leftArrow}
        alt="left arrow"
      />
      <div
        className="gallery-modal__wrapper"
        style={{
          "--index": current,
        }}
        {...swipeHandlers}
        onKeyDown={handleKeyPress}
        tabIndex={0}
      >
        {modalProps.content.gallery.data.map((item, index) => (
          <div className="gallery-modal__img-container">
            <img
              className="gallery-modal__img"
              src={getImg(item)}
              key={index}
              alt="gallery item"
            />
          </div>
        ))}
      </div>
      <img
        className="gallery-modal__icon"
        src={rightArrow}
        onClick={nextSlide}
        alt="right arrow"
      />
    </div>
  );
};
