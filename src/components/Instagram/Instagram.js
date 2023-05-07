import { getPhotos } from "../../services/instagram.service";
import { useInstagram } from "../../hooks/useInstagram";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import leftArrow from "../../images/arrow_l_mini.webp";
import rightArrow from "../../images/arrow_r_mini.webp";

export const Instagram = ({ content }) => {
  const { isLoading, res } = useInstagram();
  const [current, setCurrent] = useState(0);
  const isLoop = false;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
  });

  if (isLoading) {
    return <h3>Loading</h3>;
  }

  if (!res.data) {
    return ''
  }

  const photos =  getPhotos(res.data);

  const nextSlide = () => {
    return current < photos.length - 1 ? setCurrent(current + 1) : "";
  };

  const previousSlide = () => {
    return current === -1 ? "" : setCurrent(current - 1);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 37) {
      previousSlide();
    } else if (event.keyCode === 39) {
      nextSlide();
    }
  };

  return (
    <section className="instagram wrapper">
      <h2 className="instagram__title">{content.title}</h2>
      <div className="instagram__line" />
      <div
        className="instagram__slider animate"
        style={{
          "--index": current,
        }}
        onKeyDown={handleKeyPress}
        // tabIndex={0}
        {...swipeHandlers}
      >
        {photos.map((item, index) =>
          !!item ? (
            <img
              className="instagram__image"
              src={item}
              key={index}
              alt="instagram"
            />
          ) : (
            ""
          )
        )}
      </div>
      <div className="instagram__buttons">
        <img
          className="instagram__button"
          onClick={previousSlide}
          src={leftArrow}
          alt="instagram button"
        />
        <div className="instagram__button-line" />
        <img
          className="instagram__button"
          onClick={nextSlide}
          src={rightArrow}
          alt="instagram button"
        />
      </div>
      <a className="instagram__link-container">
        <span
          className="instagram__link"
          href={"https://www.instagram.com/blackwall.interior/"}
        >
          {"Instagram black wall"}
        </span>
        <div className="form__submit-arrow" />
      </a>
    </section>
  );
};
