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

  const firstTimeInSession = sessionStorage.getItem("formSend");

  const [submitState, setSubmitState] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    debugger;
    sessionStorage.setItem("formSend", true);
    setSubmitState(true);
    // console.log("error", error);
    // console.log("watch", watch);
    // console.log(form.current);
    debugger;

    const templateParams = {
      name: "James",
      notes: "Check this out!",
      // obj: form.current[3].checked ? form.current[3].value : form.current[4].value
    };
    emailjs
      .sendForm(
        "service_j3ba6er",
        "template_we8mn3e",
        form.current,
        // templateParams,
        "oTnq4ufxCtTUQjvqL"
      )
      .then(
        (result) => {
          // console.log(result.text);
          // console.log("success");
        },
        (error) => {
          // console.log("error");
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
        {/* {!!prices ? <PricesElement prices={prices} formParametrs={formParametrs}/> : ""} */}
        {submitState ? (
          <div
            className="form__submit-wrapper  form__submit-wrapper_go-to"
            onClick={handleModal}
          >
            <div className="form__submit-container">
              <span className="form__submit">{dynamicContent.buttonText}</span>
              <div className="form__submit-arrow" />
            </div>
          </div>
        ) : (
          <FormContainer
            formParametrs={formParametrs}
            prices={!!prices ? prices : null}
          />
        )}
      </div>
    </section>
  );
};
