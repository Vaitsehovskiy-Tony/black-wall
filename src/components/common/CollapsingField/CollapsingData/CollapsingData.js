export const CollapsingData = ({ text, type }) => {

  switch (type) {

    case "html":
      return (
        <div
          className="feature__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );

    case "object":
      return text.map((i) => (
        <p className="collapsing__text collapsing__text_dots list">{i}</p>
      ));

    default:
      return <p className="collapsing__text">{text}</p>;
  }
};
