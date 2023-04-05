import { Link } from "react-router-dom";
import notFoundImg from "../../images/page-not-found.webp";

export const PageNotFound = ({ notFound }) => {
  console.log(notFound);
  return (
    <section className="not-found">
      <img className="not-found__img" alt="not found" src={notFoundImg} />
      <h4 className="not-found__description">{notFound.errorName}</h4>
      <h1 className="not-found__title">{notFound.title}</h1>
      <span className="not-found__text">
        {notFound.descriptionPart1}
        <Link to={"/"} className="not-found__link">
          {notFound.descriptionPart2}
        </Link>
        {notFound.descriptionPart3}
      </span>
    </section>
  );
};
