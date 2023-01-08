export const OurTeam = ({ mainPageData }) => {
  const sharedData = mainPageData.ourTeam;
  const membersData = mainPageData.teamMember;

  return (
    <section className="our-team wrapper">
      <h2 className="our-team__title">{sharedData.title}</h2>
      {membersData.map((person) => (
        <div className="our-team__member" key={person.title}>
          <h3 className="our-team__member-name">{person.title}</h3>
          <p className="our-team__member-about">{person.text}</p>
          <p className="our-team__member-quote">{person.quote}</p>
        </div>
      ))}
      <img
        src={
          `https://api.vaitstony.art` + sharedData.teamPhoto.data.attributes.url
        }
        alt="our team"
        className="our-team__photo"
      />
    </section>
  );
};
