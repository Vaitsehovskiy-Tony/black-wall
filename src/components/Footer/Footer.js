import { Link } from "react-router-dom";
import { Logo } from "../common/Logo/Logo";
import tgIcon from "../../images/telegram (12) 1.webp";
import wpIcon from "../../images/whatsapp (7) 1.webp";

export const Footer = ({ content }) => {
  const icons = [tgIcon, wpIcon];

  return (
    <footer className="footer">
      <div className="wrapper">
        <Logo headerStyle={"light"} />
        <div className="footer__nav-container">
          {content.navbar.map((i) => (
            <Link to={i.link} className="footer__nav-item" key={i.id}>
              {i.title}
            </Link>
          ))}
        </div>
        <div className="footer__links-container">
          {content.navbarSocial.map((i) => (
            <Link to={i.link} className="footer__nav-item" key={i.id}>
              {i.title}
            </Link>
          ))}
        </div>
        <div className="footer__contacts-container">
          <a
            className="footer__contacts-email"
            href={`mailto:${content.email}`}
          >
            {content.email}
          </a>
          {content.navbarTextUs.map((i, index) => (
            <a href={i.link} className="footer__contacts-link" key={i.id}>
              <img
                src={icons[index]}
                alt={i.title + "icon"}
                className="footer__contacts-pic"
              />
              <span>{i.title}</span>
            </a>
          ))}
        </div>
      </div>

      <hr className="footer__hr" />
      <div className="wrapper">
        <span className="footer__copyright">{content.copyright}</span>
        <div className="footer__terms">{content.termsAndConditions}</div>
      </div>
    </footer>
  );
};
