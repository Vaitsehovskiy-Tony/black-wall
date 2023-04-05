import logoLight from "../../../images/logo-white.webp";

export const Preloader = () => {
  return (
    <section className="preloader">
      <div className="preloader__content">
        <div className="preloader__overlay"></div>
        <img className="preloader__img" src={logoLight} alt="preloader" />
      </div>
    </section>
  );
};
