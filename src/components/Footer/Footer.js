import { DataContext } from "../../utils/getContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import tgIcon from "../../images/telegram (12) 1.svg";
import wpIcon from "../../images/whatsapp (7) 1.svg";
import Logo from "../common/Logo/Logo";
const Footer = () => {
  const icons = [tgIcon, wpIcon];
  const { footer } = useContext(DataContext);

  return (
    <footer className="footer">
      <div className="wrapper">
        <Logo headerStyle={"light"} />
        <div className="footer__nav-container">
          {footer.navbar.map((i) => (
            <Link to={i.link} className="footer__nav-item" key={i.id}>
              {i.title}
            </Link>
          ))}
        </div>
        <div className="footer__links-container">
          {footer.navbarSocial.map((i) => (
            <Link to={i.link} className="footer__nav-item" key={i.id}>
              {i.title}
            </Link>
          ))}
        </div>
        <div className="footer__contacts-container">
          <a className="footer__contacts-email" href={`mailto:${footer.email}`}>
            {footer.email}
          </a>
          {footer.navbarTextUs.map((i, index) => (
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
        <span className="footer__copyright">{footer.copyright}</span>
        <div className="footer__terms">{footer.termsAndConditions}</div>
      </div>
    </footer>
  );
};

export default Footer;
