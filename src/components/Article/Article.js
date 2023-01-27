import { TextBlock } from "../TextBlock/TextBlock";
import { ImageBlock } from "../ImageBlock/ImageBlock";
import { ComparisonSlider } from "../ComparisonSlider/ComparisonSlider";
import { FeatureBlock } from "../FeatureBlock/FeatureBlock";

function getArticleElement(item, index, staticText) {
  let itemType = "text";
  if (!!item.image) {
    itemType = "image";
  } else if (!!item.imageAfter) {
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
      return <ComparisonSlider element={item} key={index} staticText={staticText}/>;
    case "feachure":
      return <FeatureBlock element={item} key={index} />;
    default:
      return null;
  }
}
export const Article = ({ content, title, staticText=null }) => {
  console.log(content)

  return (
    <section className="article project-wrapper">
      <h2 className="article__title">{title}</h2>
      {content.map((e, i) => getArticleElement(e, i, staticText))}
    </section>
  );
};
