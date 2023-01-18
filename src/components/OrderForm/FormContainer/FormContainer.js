import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { InputTextField } from "../InputTextField/InputTextField";

export const FormContainer = ({ formParametrs }) => {
  const {
    handleSubmit,
    content,
    form,
    sendEmail,
    register,
    dynamicContent,
    arrow,
  } = formParametrs;

  const nameField = {
    label: content.formData.nameText,
    pattern: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/,
    cssName: "name",
    minLength: 1,
    maxLength: 20,
    register,
  };
  const emailField = {
    label: content.formData.contactText,
    pattern:
      /(\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?)||((?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))/,
    cssName: "email",
    minLength: 7,
    maxLength: 30,
    register,
  };

  const countryField = {
    label: content.formData.countryText,
    pattern: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/,
    cssName: "country",
    minLength: 2,
    maxLength: 30,
    register,
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className="form__container"
    >
      <InputTextField fieldData={nameField} />
      <InputTextField fieldData={emailField} />
      <InputTextField fieldData={countryField} />
      <span className="form__choose-type">{content.formData.arrayTitle}</span>
      <div className="form__radio-container">
        <label className="form__radio-container_1">
          <input
            {...register("Тип объекта", { required: true })}
            className="form__radio"
            type="radio"
            value="Квартира"
            checked
          />
          {content.formData.array[0]}
        </label>
        <label className="form__radio-container_2">
          <input
            {...register("Тип объекта", { required: true })}
            className="form__radio"
            type="radio"
            value="Иное"
          />
          {content.formData.array[1]}
        </label>
      </div>
      <div className="form__submit-wrapper">
        <div
          className="form__submit-container"
          onClick={() => {
            handleSubmit(sendEmail);
          }}
        >
          <input
            className="form__submit"
            type="submit"
            value={dynamicContent.buttonText}
          />
          <img src={arrow} alt="right arrow" className="form__submit-arrow" />
        </div>
      </div>
    </form>
  );
};
