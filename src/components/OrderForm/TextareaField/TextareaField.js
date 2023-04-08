import { useRef, useState } from "react";

function autosize(e) {
  const element = e.target;
  setTimeout(() => {
    debugger;
    element.style.cssText = "height:0; padding:0";
    element.style.cssText = "height:" + element.scrollHeight + "px";
  }, 0);
}

export const TextareaField = ({ fieldData }) => {
  const [counter, setCounter] = useState(0);
  //   const [isMatch, setIsMatch] = useState(false);

  const characterCount = (e) => setCounter(e.target.value.length);
  const textareaCheck = (e) => {
    //     debugger
    //     const match = e.target.value.match(/^[\p{L}\s\p{M}'-]{0,150}$/);
    //     const paragraph = "hello world";
    //     const regex = /[0-9]/;
    //     const found =  /^[\p{L}\s\p{M}'-]{0,150}$/.test(paragraph);
    //     console.log('found', found);
    //     return match;
  };
  const handleInput = (e) => {
    autosize(e);
    characterCount(e);
    textareaCheck(e);
  };

  return (
    <div className={`textarea`}>
      <textarea
        onKeyDown={handleInput}
        {...fieldData.register(fieldData.cssName)}
        name={fieldData.cssName}
        id={`form__${fieldData.cssName}`}
        minLength={fieldData.minLength}
        maxLength={fieldData.maxLength}
        className={`textarea__input `}
        placeholder="."
        required
        rows="1"
      ></textarea>
      <div className="textarea__count">
        <span>{counter}</span>
        <span> / {fieldData.maxLength}</span>
      </div>
      <label
        for={`form__${fieldData.cssName}`}
        className={`field__label ${fieldData.cssName}`}
      >
        {fieldData.label}
      </label>
    </div>
  );
};
