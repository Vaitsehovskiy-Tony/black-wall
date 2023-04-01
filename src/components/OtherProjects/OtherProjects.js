import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ProgressBar } from "../common/ProgressBar/ProgressBar";
import { ProjectSample } from "../ProjectSample/ProjectSample";
import leftArrow from "../../images/arrow_l_mini.webp";
import rightArrow from "../../images/arrow_r_mini.webp";

export const OtherProjects = ({ content, staticText }) => {
  const [current, setCurrent] = useState(0);
  const isLoop = false;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
  });
  const {pathname} = useLocation();

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

  const makeScroll = (id) => {
    if(`/project_` + id !== pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="carousel-projects">
      <h3 className="carousel-projects__title">{staticText}</h3>
      <div
        className="carousel-projects__slides"
        style={{
          "--index": current,
        }}
        {...swipeHandlers}
        onKeyDown={(e) => handleKeyPress(e)}
        tabIndex={0}
      >
        {content.map((item, index) => (
              <Link className="carousel-projects__slide" key={index} to={`/project_` + item.projectId}       onClick={()=>makeScroll(item.projectId)}
              >
            <div className="carousel-projects__img-wrapper">
              <img
                className="carousel-projects__img"
                src={getImg(item)}
                alt="slide img"
              />
            </div>
            <div className="carousel-projects__description-container">
              <h6 className="carousel-projects__description-title">
                {item.title}
              </h6>
              <span className="carousel-projects__description">
                {item.subtitle}
              </span>
            </div>
            </Link>
        ))}
      </div>
      <div className="carousel-projects__bottom-wrapper">
        <div className="carousel-projects__controls">
          <img
            src={leftArrow}
            onClick={previousSlide}
            className="carousel-projects__arrow"
            alt="arrow"
          />
          <img
            src={rightArrow}
            onClick={nextSlide}
            className="carousel-projects__arrow"
            alt="arrow"
          />
        </div>
        <ProgressBar length={content.length - 1} index={current} />
      </div>
    </section>
  );
};
