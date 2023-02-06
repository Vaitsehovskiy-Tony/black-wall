import imageSample from "../../images/image-sample.webp";

export const ImageBlock = ({ element }) => {
  const description = element.description ? element.description : '';
  const image =
  element && element.image
    ? `https://api.vaitstony.art${element.image.data.attributes.url}`
    : imageSample;

  return (
    <figure className="img-block">
      <img
        src={image}
        alt={description}
        className="img-block__img"
      />
      <figcaption className="img-block__description">
        {description}
      </figcaption>
    </figure>
  );
};
