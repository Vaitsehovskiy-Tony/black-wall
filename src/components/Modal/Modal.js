import { OrderModal } from "./OrderModal/OrderModal";
import { NavBarModal } from "./NavBarModal/NavBarModal";

export const Modal = ({ type, navbar, orderForm, modalState, handleModal }) => {
  if (modalState.state) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <section className={`modal ${!!modalState.state ? "active" : "hidden"}`}>
      <div className={`modal__container ${modalState.content}`}>
        {modalState.content === "orderForm" ? (
          <OrderModal content={orderForm} handleModal={handleModal} />
        ) : (
          <NavBarModal content={navbar} handleModal={handleModal} />
        )}
      </div>
    </section>
  );
};
