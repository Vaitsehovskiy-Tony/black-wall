export const CollapsingField = ({ title, text, icon }) => {
  return (
    <>
      <details className="collapsing__container">
        <summary className="collapsing__bar">
          <p className="collapsing__title">{title}</p>
          <img className="collapsing__img" alt="arrow down" src={icon} />
        </summary>
        <p className="collapsing__text">{text}</p>
      </details>
      <hr className="collapsing__bottom-line" />
    </>
  );
};
