import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { PricesElement } from "../../Modal/PricesElement/PricesElement";
import { InputTextField } from "../InputTextField/InputTextField";
import { TextareaField } from "../TextareaField/TextareaField";
import { SimpleModal } from "../../Modal/SimpleModal/SimpleModal";
import { useState } from "react";

export const FormContainer = ({ formParametrs, prices }) => {

  const [simpleModal, setSimpleModal] = useState(false);
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
    pattern: /^[\p{L}\s\p{M}'-]{0,50}$/,
    cssName: "name",
    minLength: 1,
    maxLength: 20,
    register,
  };

  const emailField = {
    label: content.formData.contactText,
    pattern:
      /(\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?)||(^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,
    cssName: "email",
    minLength: 7,
    maxLength: 30,
    register,
  };

  const countryField = {
    label: content.formData.countryText,
    pattern: /^[\p{L}\s\p{M}'-]{0,50}$/,
    cssName: "country",
    minLength: 2,
    maxLength: 30,
    register,
  };

  const commentField = {
    label: content.formData.commentText,
    pattern: /^[\p{L}\s\p{M}'-]{0,50}$/,
    cssName: "comment",
    minLength: 2,
    maxLength: 100,
    register,
  };


  const handleSimleModal = () => {
    setSimpleModal(!simpleModal);
  };

  const modalProps = {
    modalState: simpleModal,
    type: "terms",
    content: content.userAgreementContent,
    handleSimleModal,
  };

  

  return (
    <form
      ref={form}
      onSubmit={(e) => handleSubmit(sendEmail(e))}
      className={`form__container ${!!prices ? "price__options" : ""}`}
    >
      {!!prices ? <PricesElement prices={prices} register={register} /> : ""}
      <InputTextField fieldData={nameField} />
      <InputTextField fieldData={emailField} />
      <InputTextField fieldData={countryField} />
      <TextareaField fieldData={commentField} />
      <input
        className="field__input_surname"
        type="text"
        name="surname"
        minLength="1"
        maxLength="20"
        placeholder="surname"
        pattern="^[\p{L}\s\p{M}'-]{0,50}$"
      />
      <span className="form__choose-type">{content.formData.arrayTitle}</span>
      <div className="form__radio-container">
        <label className="form__radio-container_1">
          <input
            {...register("Тип объекта", { required: true })}
            className="form__radio"
            type="radio"
            value={content.formData.array[0]}
            checked
          />
          <span className="form__radio-label">{content.formData.array[0]}</span>
        </label>
        <label className="form__radio-container_2">
          <input
            {...register("Тип объекта", { required: true })}
            className="form__radio"
            type="radio"
            value={content.formData.array[1]}
          />
          <span className="form__radio-label">
            {content.formData.array[1]}{" "}
          </span>
        </label>
      </div>
      <span className="form__agreement">
        {content.userAgreementText}
        <span className="form__agreement-button"  onClick={() => {
            handleSimleModal();
          }}>{content.userAgreementButtonText}</span>
      </span>
      <div className="form__submit-wrapper">
        <div
          className="form__submit-container"
          // onClick={
          //   handleSubmit((event) => sendEmail(event))
          // }
        >
          <input
            className="form__submit"
            type="submit"
            value={dynamicContent.buttonText}
          />
          <div className="form__submit-arrow" />
        </div>
      </div>
      <SimpleModal modalProps={modalProps} />
    </form>
  );
};
