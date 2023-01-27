export const ContactUs = ({ content, extaClass=null }) => {
  return (
    <section className={`contacts wrapper ${extaClass}`}>
      <h2 className="contacts__title">{content.title}</h2>
      <div className="contacts__container">
        <div className="contacts__block">
          {content.contactUsPhones.map((i) => (
            <div className="contacts__item" key={i.id}>
              <span className="contacts__item-title">{i.title}</span>
              <a className="contacts__link" href={`tel:${i.details}`}>
                {i.details}
              </a>
            </div>
          ))}
        </div>
        <div className="contacts__block">
          {content.contactUsMoreInfo.map((i) => (
            <div className="contacts__item" key={i.id}>
              <span className="contacts__item-title">{i.title}</span>
              <a
                className="contacts__link"
                href={i.isLink ? i.details : "mailto:" + i.details}
              >
                {i.details}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
