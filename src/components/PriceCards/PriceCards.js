import { ModalContext } from "../../utils/getModalContext";
import { useContext } from "react";
import checked from "../../images/checked.png";

export const PriceCards = ({ cards }) => {

  const { handleModal, handleModalContent } =
    useContext(ModalContext);
    const makeScroll = () => {
      const gallery = document.querySelector(".mobile-price");
      gallery.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <section className="price__cards wrapper">
      {cards.map((i) => (
        <div className="price__card" key={i.id}>
          <div className="price__top-wrapper">
          <h6 className="price__title">{i.title}</h6>
            <span className="price__scroll-button" onClick={makeScroll}>{i.goToPriceDetails}</span>
          </div>
          <div className="price__price-container">
            <span className="price__number">{i.price}</span>
            <span className="price__symbols">{i.priceSymbols}</span>
          </div>
          <button className="price__button" onClick={()=> { handleModalContent('pricesForm'); handleModal()}}>
            {i.button}
          </button>
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
