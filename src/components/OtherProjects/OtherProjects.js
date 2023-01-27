import { ProjectSample } from "../ProjectSample/ProjectSample";
import { SliderBlock } from "../SliderBlock/SliderBlock";

export const OtherProjects = ({ content, staticText }) => {
  return (
    <section className="other-projects project-wrapper">
      <h3 className="other-projects__title">{staticText}</h3>
      <SliderBlock content={content}/>
    </section>
  );
};
