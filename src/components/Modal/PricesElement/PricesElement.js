export const PricesElement = ({ prices }) => {
  return (
    <div className="modal-prices">
      {prices.map((i) => (
        <div className="modal-prices__item-container">
          <input
            type="radio"
            id={`input_${i.id}`}
            className="modal-prices__input"
            name="modal-label"
          />
          <label
            className="modal-price__item"
            name="modal-label"
            for={`input_${i.id}`}
          >
            <h6 className="modal-prices__title">{i.title}</h6>
            <span className="modal-prices__number"> {i.price}</span>
            <span className="modal-prices__symbol">{i.priceSymbols}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
