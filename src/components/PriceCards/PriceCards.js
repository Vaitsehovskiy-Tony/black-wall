import checked from "../../images/checked.png";
export const PriceCards = ({ cards }) => {
  return (
    <section className="price__cards">
      {cards.map((i) => (
        <div className="price__card" key={i.id}>
          <h6 className="price__title">{i.title}</h6>
          <div className="price__price-container">
            <span className="price__number">{i.price}</span>
            <span className="price__symbols">{i.priceSymbols}</span>
          </div>
          <button className="price__button">{i.button}</button>
          <span className="price__text">{i.description}</span>
          <div className="price__options">
            {i.priceOption.map((k) => (
              <div className="price__option-container">
                <img src={checked} alt="" className="price__icon" />
                <span className="price__option">{k.option}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
