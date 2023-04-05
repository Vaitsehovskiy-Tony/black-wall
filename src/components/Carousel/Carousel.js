import { Link } from "react-router-dom";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ProgressBar } from "../common/ProgressBar/ProgressBar";

export const Carousel = ({ content, projectsList }) => {
  const projects = projectsList.slice(0, 9);

  const [current, setCurrent] = useState(-1);
  const isLoop = false;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
  });

  const nextSlide = () => {
    return current < projects.length - 2 ? setCurrent(current + 1) : "";
  };

  const previousSlide = () => {
    return current === -1 ? "" : setCurrent(current - 1);
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

  return (
    <div className="carousel wrapper">
      <div
        className="carousel__slides animate"
        style={{
          "--index": current,
        }}
        {...swipeHandlers}
        onKeyDown={handleKeyPress}
        // tabIndex={0}
      >
        {projects.map((item, index) => (
          <Link to={`/project_` + item.projectId}>
            <figure className={`carousel__slide `} key={index}>
              <div className="carousel____img-wrapper">
                <img
                  className="carousel__img"
                  src={getImg(item)}
                  alt="slide img"
                />
              </div>
              <figcaption className="carousel__description-container">
                <div className="carousel__description-line" />
                <span className="carousel__description">{item.title}</span>
                <div className="carousel__description-line_after" />
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
      <div className="carousel__index-container">
        <div
          className="carousel__arrow carousel__arrow_left"
          onClick={previousSlide}
        />
        <span className="carousel__index-item">
          {current < 10 ? `0${current + 2}` : current}
        </span>
        <hr className="carousel__index-line" />
        <span className="carousel__index-item">
          {current < 10 ? `0${projects.length}` : projects.length}
        </span>
        <div
          className="carousel__arrow carousel__arrow_right"
          onClick={nextSlide}
        />
      </div>
      <ProgressBar length={projects.length} index={current + 1} />
    </div>
  );
};
