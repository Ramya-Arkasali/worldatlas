import footerContact from "../../api/footerapi.json";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-section">
      
      {/* TOP CONTACT INFO (Optional – hide on mobile if needed) */}
      <div className="container footer-grid">
        {footerContact.map(({ id, icon, title, details }) => (
          <div className="footer-contact" key={id}>
            <div className="icon">
              <i className={icon}></i>
            </div>

            <div className="footer-contact-text">
              <p className="footer-title">{title}</p>

              {title.toLowerCase().includes("call") ? (
                <a href={`tel:${details}`}>{details}</a>
              ) : title.toLowerCase().includes("email") ? (
                <a href={`mailto:${details}`}>{details}</a>
              ) : (
                <p>{details}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM NAVBAR */}
      <div className="bottom-navbar">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/country">Country</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* COPYRIGHT */}
      <div className="copyright-area">
        <p>© 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};
