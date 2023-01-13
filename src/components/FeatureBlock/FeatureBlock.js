import { CollapsingField } from "../common/CollapsingField/CollapsingField";

export const FeatureBlock = ({ element }) => {
  const text = element.text;
  return (
    <div className="feature">
      <CollapsingField title={element.title} text={text} type="html" />
    </div>
  );
};
