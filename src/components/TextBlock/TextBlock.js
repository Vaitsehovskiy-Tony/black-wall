export const TextBlock = ({ element }) => {
  const text = element.text;
  return (
    <section className="text" dangerouslySetInnerHTML={{ __html: text }} />
  );
};
