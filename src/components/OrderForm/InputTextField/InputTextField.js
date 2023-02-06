export const InputTextField = ({ fieldData }) => {
  return (
    <div className={`field ${fieldData.cssName}`}>
      <input
        className="field__input"
        type="text"
        {...fieldData.register(fieldData.cssName)}
        name={fieldData.cssName}
        id={`form__${fieldData.cssName}`}
        
        minLength={fieldData.minLength}
        maxLength={fieldData.maxLength}
        placeholder="."
        required
        pattern={fieldData.pattern.source}
      />
      <label
        for={`form__${fieldData.cssName}`}
        className={`field__label ${fieldData.cssName}`}
      >
        {fieldData.label}
      </label>
    </div>
  );
};
