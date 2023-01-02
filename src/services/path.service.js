export const getPath = (name, type) => {
  switch (name) {
    case "mainPage":
      return `${name}.data.attributes`;
    case "mainPage":
      return `data[0].attributes`;
    case "collection":
      return "";
    case "exactElement":
      return `${name}.data.attributes`;
    case "page":
      return `data[0].attributes`;
    case "collection":
      return "";
    default:
      return undefined;
  }
};
