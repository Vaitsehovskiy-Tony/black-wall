import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ProgressBar } from "../common/ProgressBar/ProgressBar";
import { ProjectSample } from "../ProjectSample/ProjectSample";
import leftArrow from "../../images/arrow_l_mini.png";
import rightArrow from "../../images/arrow_r_mini.png";

export const OtherProjects = ({ content, staticText }) => {

  const [current, setCurrent] = useState(0);
  const isLoop = false;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
  });

  const nextSlide = () => {
    return current < content.length - 2 ? setCurrent(current + 1) : "";
  };

  const previousSlide = () => {
    return current === 0 ? "" : setCurrent(current - 1);
  };

  const getImg = (i) => {
    return `https://api.vaitstony.art${i.coverImage.data.attributes.url}`;
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 37) {
      previousSlide();
    } else if (event.keyCode === 39) {
      nextSlide();
    }
  };  

  console.log(content, staticText )

  return (
    <section className="carousel-projects">
      <h3 className="carousel-projects__title">{staticText}</h3>
      <div
        className="carousel-projects__slides"
        style={{
          "--index": current,
        }}
        {...swipeHandlers}
        onKeyDown={handleKeyPress}
        tabIndex={0}
      >
        {content.map((item, index) => (
          <div className={`carousel-projects__slide `} key={index}>
            <img className="carousel-projects__img" src={getImg(item)} alt="slide img" />
            <div className="carousel-projects__description-container">
              <h6 className="carousel-projects__description-title">{item.title}</h6>
              <span className="carousel-projects__description">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-projects__bottom-wrapper">
        <div className="carousel-projects__controls">
          <img src={leftArrow} onClick={previousSlide} className="carousel-projects__arrow" alt="arrow"/>
          <img src={rightArrow} onClick={nextSlide} className="carousel-projects__arrow" alt="arrow"/>
        </div>
        <ProgressBar length={content.length - 1} index={current}/>
      </div>
    </section>
  );
};
