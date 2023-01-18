import { CollapsingField } from "../common/CollapsingField/CollapsingField";

export const OurTeam = ({ content, members }) => {
  const isNarrow = window.matchMedia("screen and (max-width: 750px)");

  return (
    <section className="our-team wrapper">
      <h2 className="our-team__title">{content.title}</h2>
      {members.map((person) => (
        <div className="our-team__member" key={person.title}>
          <h3 className="our-team__member-name">{person.title}</h3>
          <p className="our-team__member-about">{person.text}</p>
          {isNarrow.matches ? (
            <CollapsingField
              title={person.collapseBarTitle}
              text={person.quote}
              iconStyle='white'
              type='string'
            />
          ) : (
            <p className="our-team__quote-text">{person.quote}</p>
          )}
        </div>
      ))}
      <img
        src={
          `https://api.vaitstony.art` + content.teamPhoto.data.attributes.url
        }
        alt="our team"
        className="our-team__photo"
      />
    </section>
  );
};
