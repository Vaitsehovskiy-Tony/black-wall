import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";


export const FormContainer = ({formParametrs}) => {
    const {
      handleSubmit,
      content,
      form,
      sendEmail,
      register,
      dynamicContent,
      arrow
    } = formParametrs;
  
  return (
    <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="form__container"
        >
          <input
            className="form_text-style form__name"
            type="text"
            placeholder={content.formData.nameText}
            {...register}
            name="name"
          />
          <input
            className="form_text-style form__contact"
            type="text"
            placeholder={content.formData.contactText}
            {...register}
            name="email"
          />
          <input
            className="form_text-style form__country"
            type="text"
            placeholder={content.formData.countryText}
            {...register}
            name="message"
          />
          <span className="form__choose-type">
            {content.formData.arrayTitle}
          </span>
          <div className="form__radio-container">
            <label className="form__radio-container_1">
              <input
                {...register("Тип объекта", { required: true })}
                className="form__radio"
                type="radio"
                value="Квартира"
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
          <div
            className="form__submit-container"
            onClick={() => {handleSubmit(sendEmail)}}
          >
            <input
              className="form__submit"
              type="submit"
              value={dynamicContent.buttonText}
            />
            <img src={arrow} alt="right arrow" className="form__submit-arrow" />
          </div>
        </form>
  )
}
