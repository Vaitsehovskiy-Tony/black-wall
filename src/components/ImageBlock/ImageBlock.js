export const ImageBlock = ({ element }) => {
  const description = element.description ? element.description : '';
  return (
    <figure className="img-block">
      <img
        src={`https://api.vaitstony.art${element.image.data.attributes.url}`}
        alt={description}
        className="img-block__img"
      />
      <figcaption className="img-block__description">
        {description}
      </figcaption>
    </figure>
  );
};
