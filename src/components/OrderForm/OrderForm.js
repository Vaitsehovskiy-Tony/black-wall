import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Avatars } from "../common/Avatars/Avatars";
import arrow from "../../images/right-arrow.svg";
import emailjs from "@emailjs/browser";

export const OrderForm = ({ orderFormData, display }) => {
  const elementData = orderFormData;
  const form = useRef();
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
        <h2 className="form__title">{elementData.title}</h2>
        <span className="form__subtitle">{elementData.subtitle}</span>
        <Avatars display={display} members={elementData.formAvatars} />
        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="form__container"
        >
          <input
            className="form_text-style form__name"
            type="text"
            placeholder={elementData.formData.nameText}
            {...register}
            name="name"
          />
          <input
            className="form_text-style form__contact"
            type="text"
            placeholder={elementData.formData.contactText}
            {...register}
            name="email"
          />
          <input
            className="form_text-style form__country"
            type="text"
            placeholder={elementData.formData.countryText}
            {...register}
            name="message"
          />
          <span className="form__choose-type">
            {elementData.formData.arrayTitle}
          </span>
          <div className="form__radio-container">
            <label className="form__radio-container_1">
              <input
                {...register("Тип объекта", { required: true })}
                className="form__radio"
                type="radio"
                value="Квартира"
              />
              {elementData.formData.array[0]}
            </label>
            <label className="form__radio-container_2">
              <input
                {...register("Тип объекта", { required: true })}
                className="form__radio"
                type="radio"
                value="Иное"
              />
              {elementData.formData.array[1]}
            </label>
          </div>
          <div className="form__submit-container">
            <input
              className="form__submit"
              type="submit"
              value={elementData.formData.buttonText}
            />
            <img src={arrow} alt="right arrow" className="form__submit-arrow" />
          </div>
        </form>
      </div>
    </section>
  );
};
