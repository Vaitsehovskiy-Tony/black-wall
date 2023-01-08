export const Avatars = ({ members, display }) => {
  return (
    <>
      {members && members.map((member) => (
        <div className={`form__avatar-container ${display}`}>
          <img
            src={`https://api.vaitstony.art${member.avatar.data.attributes.url}`}
            alt={member.title + "image"}
            className="form__avatar"
          />
          <div className="form__text-block">
            <span className="form__avatar-title">{member.title}</span>
            <span className="form__avatar-subtitle">{member.subtitle}</span>
          </div>
        </div>
      ))}
    </>
  );
};
