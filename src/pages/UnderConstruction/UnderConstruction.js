import notFoundImg from "../../images/page-not-found.webp";

export const UnderConstruction = () => {
  return (
    <section className="under-construction">
      <img className="under-construction__img" alt="under construction" src={notFoundImg} />
      <h1 className="under-construction__title">Technical work in progress</h1>
    </section>
  );
};
