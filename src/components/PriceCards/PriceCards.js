import { ModalContext } from "../../utils/getModalContext";
import { useContext, useState } from "react";
import checked from "../../images/checked.webp";

export const PriceCards = ({ cards, title }) => {
  const [simpleModal, setSimpleModal] = useState(false);

  const handleSimleModal = () => {
    setSimpleModal(!simpleModal);
  };

  const { handleModal, handleModalContent } = useContext(ModalContext);
  
  const makeScroll = () => {
    const gallery = document.querySelector(".mobile-price");
    gallery.scrollIntoView({ behavior: "smooth" });
  };

  const modalProps = (item) => {
    return { modalState: simpleModal, type: "details", content: item };
  };

  return (
    <section className="price__cards wrapper">
      <h2 className="price__cards-title">{title}</h2>
      <div className="price__cards-container">
        {cards.map((i) => (
          <div className="price__card" key={i.id}>
            <div className="price__top-wrapper">
              <h6 className="price__title">{i.title}</h6>
              <span className="price__scroll-button" onClick={makeScroll}>
                {i.goToPriceDetails}
              </span>
            </div>
            <div className="price__price-container">
              <span className="price__number">{i.price}</span>
              <span className="price__symbols">{i.priceSymbols}</span>
            </div>
            <button
              className="price__button"
              onClick={() => {
                handleModalContent("pricesForm");
                handleModal();
              }}
            >
              {i.button}
            </button>
            <span className="price__text">{i.description}</span>
            <div className="price__options">
              {i.priceOption.map((k) => (
                <div className="price__option-container">
                  {/* <SimpleModal modalProps={() => modalProps(k)} /> */}
                  <img src={checked} alt="" className="price__icon" />
                  <span
                    className="price__option"
                    onClick={() => handleSimleModal()}
                  >
                    {k.option}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
