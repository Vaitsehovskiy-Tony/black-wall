import { useRef } from "react";
import imageSample from "../../images/image-sample.webp";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";

export const ImageBlock = ({ element }) => {
  const description = element.description ? element.description : "";
  const image =
    element && element.image
      ? `https://api.vaitstony.art${element.image.data.attributes.url}`
      : imageSample;
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState("wide");
  // useLayoutEffect(() => {
  //   setWidth(ref.current.offsetWidth);
  //   setHeight(ref.current.offsetHeight);
  //   if (width / height) console.log(width, height);
  // }, []);

  let img = new Image();
  img.src = image;
  img.onload = () => {
    if (img.height / img.width > 1) {
      setAspectRatio('tall');
    }
  };

  return (
    <figure className="img-block">
      <img ref={ref} src={image} alt={description} className={`img-block__img ${aspectRatio}`} />
      <figcaption className="img-block__description">{description}</figcaption>
    </figure>
  );
};
