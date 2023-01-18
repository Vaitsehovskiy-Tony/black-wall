import { OrderModal } from "./OrderModal/OrderModal";
import { NavBarModal } from "./NavBarModal/NavBarModal";
import { HeaderBurger } from "../Header/HeaderBurger/HeaderBurger";
import { ModalContext } from "../../utils/getModalContext";
import { useContext } from "react";

export const Modal = ({ navbar, orderForm, prices, headerStyle }) => {

  const { modalState, handleModal, modalContent, handleModalContent } =
    useContext(ModalContext);

  if (modalState) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const getModal = (type) => {
    switch (type) {
      case "orderForm":
        return <OrderModal orderForm={orderForm} handleModal={handleModal} />;
      case "pricesForm":
        return (
          <OrderModal
            orderForm={orderForm}
            handleModal={handleModal}
            prices={prices}
          />
        );
      default:
        return (
          <NavBarModal
            content={navbar}
            handleModal={handleModal}
            handleModalContent={handleModalContent}
          />
        );
    }
  }

  return (
    <section className={`modal ${!!modalState ? "active" : "hidden"}`}>
      <HeaderBurger
        headerStyle={headerStyle}
        modalState={modalState}
        handleModal={handleModal}
      />
      <div className={`modal__container ${modalState}`}>
        {getModal(modalContent)}
      </div>
    </section>
  );
};
