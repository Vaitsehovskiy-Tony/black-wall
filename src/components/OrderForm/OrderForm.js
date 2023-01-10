import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Avatars } from "../common/Avatars/Avatars";
import { FormContainer } from "./FormContainer/FormContainer";
import arrow from "../../images/right-arrow.svg";
import emailjs from "@emailjs/browser";

export const OrderForm = ({ orderFormData, display, handleModal }) => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [submitState, setSubmitState] = useState(false);
  console.log(submitState);

  const sendEmail = (e) => {
    // localStorage.setItem("formSend", true);
    setSubmitState(true);
    console.log('submitState');
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

  const dynamicContent = submitState
    ? {
        title: orderFormData.submitTitle,
        subtitle: orderFormData.submitText,
        buttonText: orderFormData.submitLinkText,
      }
    : {
        title: orderFormData.title,
        subtitle: orderFormData.subtitle,
        buttonText: orderFormData.formData.buttonText,
      };

  const formParametrs = {
    handleSubmit,
    content: orderFormData,
    form,
    sendEmail,
    register,
    dynamicContent,
    arrow
  };

  return (
    <section className="form wrapper">
      <div className="form__wrapper">
        <h2 className="form__title">{dynamicContent.title}</h2>
        <span className="form__subtitle">{dynamicContent.subtitle}</span>
        <Avatars display={display} members={orderFormData.formAvatars} />
        {submitState || localStorage.getItem("locale") ? (
          <div className="form__submit-container" onClick={handleModal}>
            <span className="form__submit">{dynamicContent.buttonText}</span>
            <img src={arrow} alt="right arrow" className="form__submit-arrow" />
          </div>
        ) : (
          <FormContainer formParametrs={formParametrs} />
        )}
      </div>
    </section>
  );
};
