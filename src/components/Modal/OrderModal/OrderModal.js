import { OrderForm } from "../../OrderForm/OrderForm";

export const OrderModal = ({ content, handleModal }) => {
  return (
    <>
      <OrderForm orderFormData={content} display={"none"} handleModal={handleModal} />
    </>
  );
};
