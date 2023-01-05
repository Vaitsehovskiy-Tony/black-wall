import { TextBlock } from "../TextBlock/TextBlock";
import { ImageBlock } from "../ImageBlock/ImageBlock";
import { SliderBlock } from "../SliderBlock/SliderBlock";
import { FeatureBlock } from "../FeatureBlock/FeatureBlock";

function getArticleElement(item, index) {
  let itemType = "text";
  if (!!item.image) {
    itemType = "image";
  } else if (!!item.images) {
    itemType = "slider";
  } else if (!!item.title) {
    itemType = "feachure";
  }
  switch (itemType) {
    case "text":
      return <TextBlock element={item} key={index} />;
    case "image":
      return <ImageBlock element={item} key={index} />;
    case "slider":
      return <SliderBlock element={item} key={index} />;
    case "feachure":
      return <FeatureBlock element={item} key={index} />;
    default:
      return null;
  }
}

export const Article = ({ project }) => {

  return (
    <section className="article project-wrapper">
      <h2 className="article__title">{project.articleTitle}</h2>
      {project.projectElement.map((e, i) => getArticleElement(e, i))}
    </section>
  );
};
