import checked from "../../images/checked.webp";

export const PriceDetails = ({ pricesObj, details }) => {
  return (
    <section className="rates wrapper">
      <h3 className="rates__title">{pricesObj.title}</h3>
      <div className="rates__rates-container">
        {pricesObj.map((i) => (
          <span className="rates__rate">{i.title}</span>
        ))}
      </div>
      {details.map((k) => (
        <div className="rates__option-container">
          <span className="rates__option-title">
            {k.option ? k.option : ""}
          </span>
          <span className="rates__option-position">
            {!!k.pack1 ? (
              <img src={checked} alt="true" className="rates__option-pic" />
            ) : (
              ""
            )}
          </span>
          <span className="rates__option-position">
            {!!k.pack2 ? (
              <img src={checked} alt="true" className="rates__option-pic" />
            ) : (
              ""
            )}
          </span>
          <span className="rates__option-position">
            {!!k.pack3 ? (
              <img src={checked} alt="true" className="rates__option-pic" />
            ) : (
              ""
            )}
          </span>
          <span className="rates__option-position">
            {!!k.pack4 ? (
              <img src={checked} alt="true" className="rates__option-pic" />
            ) : (
              ""
            )}
          </span>
        </div>
      ))}
    </section>
  );
};
