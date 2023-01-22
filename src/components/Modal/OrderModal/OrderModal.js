import { OrderForm } from "../../OrderForm/OrderForm";

export const OrderModal = ({ orderForm, handleModal, prices }) => {
  return (
    <>
      <OrderForm
        content={orderForm}
        display={"none"}
        handleModal={handleModal}
        prices={prices}
      />
    </>
  );
};
