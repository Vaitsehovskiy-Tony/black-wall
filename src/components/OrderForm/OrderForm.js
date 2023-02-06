import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Avatars } from "../common/Avatars/Avatars";
import { FormContainer } from "./FormContainer/FormContainer";
import { PricesElement } from "../Modal/PricesElement/PricesElement";
import arrow from "../../images/right-arr.webp";
import emailjs from "@emailjs/browser";

export const OrderForm = ({ content, display, handleModal, prices }) => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();

  const [submitState, setSubmitState] = useState(false);

  const sendEmail = (e) => {
    // e.preventDefault();
    debugger;
    // localStorage.setItem("formSend", true);
    setSubmitState(true);
    // console.log("formState", formState);
    console.log("error", error);
    console.log("watch", watch);
    console.log(form.current);

    emailjs
      .sendForm(
        "service_j3ba6er",
        "template_we8mn3e",
        form.current,
        "oTnq4ufxCtTUQjvqL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
        },
        (error) => {
          console.log("error");
          console.error(error.text);
        }
      );
  };

  const dynamicContent = submitState
    ? {
        title: content.submitTitle,
        subtitle: content.submitText,
        buttonText: content.submitLinkText,
      }
    : {
        title: content.title,
        subtitle: content.subtitle,
        buttonText: content.formData.buttonText,
      };

  const formParametrs = {
    handleSubmit,
    content: content,
    form,
    sendEmail,
    register,
    dynamicContent,
    arrow,
  };

  return (
    <section className="form">
      <div className="form__wrapper">
        <h2 className="form__title">{dynamicContent.title}</h2>
        <span className="form__subtitle">{dynamicContent.subtitle}</span>
        <Avatars display={display} members={content.formAvatars} />
        {!!prices ? <PricesElement prices={prices} /> : ""}
        {submitState || localStorage.getItem("formSend") ? (
          <div className="form__submit-wrapper">
            <div className="form__submit-container" onClick={handleModal}>
              <span className="form__submit">{dynamicContent.buttonText}</span>
              <img
                src={arrow}
                alt="right arrow"
                className="form__submit-arrow"
              />
            </div>
          </div>
        ) : (
          <FormContainer formParametrs={formParametrs} />
        )}
      </div>
    </section>
  );
};
