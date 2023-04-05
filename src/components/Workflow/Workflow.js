export const Workflow = ({ content }) => {
  const getNumber = (n) => (n < 10 ? "0" + n : n);
  return (
    <section className="workflow wrapper">
      <h3 className="workflow__tile">{content.title || ""}</h3>
      <div className="workflow__container">
        {content.workflowItems.map((item, index) => (
          <div className="workflow__item-container" key={index}>
            <span className="workflow__item-number">
              {getNumber(index + 1)}
            </span>
            <span className="workflow__item-text">{item.itemText}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
