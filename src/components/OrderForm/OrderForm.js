import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import arrow from "../../images/right-arrow.svg";

const OrderForm = ({ mainPageData }) => {
  const form = useRef();
  const orderForm = mainPageData.orderForm;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const sendEmail = (e) => {
    // emailjs
    //   .sendForm(
    //     "service_j3ba6er",
    //     "template_we8mn3e",
    //     form.current,
    //     "oTnq4ufxCtTUQjvqL"
    //   )
    //     (error) => {
    //       console.error(error.text);
    //     }
    //   );
  };

  return (
    <section className="form">
      <div className="form__wrapper">
        <h2 className="form__title">{orderForm.title}</h2>
        <span className="form__subtitle">{orderForm.subtitle}</span>
        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="form__container"
        >
          <input
            className="form_text-style form__name"
            type="text"
            placeholder={orderForm.formData.nameText}
            {...register}
            name="name"
          />
          <input
            className="form_text-style form__contact"
            type="text"
            placeholder={orderForm.formData.contactText}
            {...register}
            name="email"
          />
          <input
            className="form_text-style form__country"
            type="text"
            placeholder={orderForm.formData.countryText}
            {...register}
            name="message"
          />
          <span className="form__choose-type">
            {orderForm.formData.arrayTitle}
          </span>
          <div className="form__radio-container">
            <label className="form__radio-container_1">
              <input
                {...register("Тип объекта", { required: true })}
                className="form__radio"
                type="radio"
                value="Квартира"
              />
              {orderForm.formData.array[0]}
            </label>
            <label className="form__radio-container_2">
              <input
                {...register("Тип объекта", { required: true })}
                className="form__radio"
                type="radio"
                value="Иное"
              />
              {orderForm.formData.array[1]}
            </label>
          </div>
          <div className="form__submit-container">
            <input
              className="form__submit"
              type="submit"
              value={orderForm.formData.buttonText}
            />
            <img src={arrow} alt="right arrow" className="form__submit-arrow" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
