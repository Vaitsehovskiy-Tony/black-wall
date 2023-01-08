export const ImageBlock = ({ element }) => {
  return (
    <figure className="img-block">
      <img
        src={`https://api.vaitstony.art${element.image.data.attributes.url}`}
        alt={element.description}
        className="img-block__img"
      />
      <figcaption className="img-block__description">
        {element.description}
      </figcaption>
    </figure>
  );
};
