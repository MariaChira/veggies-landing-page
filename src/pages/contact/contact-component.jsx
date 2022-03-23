import "./contact-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationPin } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's meet!</h1>
      <div className="social-media">
        <a
          href="https://www.instagram.com/mariageagulea/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="contact-icons"
            icon="fa-brands fa-instagram"
          />
        </a>

        <span className="contact-text">
          {" "}
          Instagram, if you want to know my friends{" "}
        </span>
        <br />
        <a
          href="https://github.com/MariaChira"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="contact-icons"
            icon="fa-brands fa-github"
          />
        </a>
        <span className="contact-text">
          GitHub is where you can see my code{" "}
        </span>
        <br />
        <a
          href="https://www.linkedin.com/in/maria-chira/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="contact-icons"
            icon="fa-brands fa-linkedin"
          />
        </a>
        <span className="contact-text">
          {" "}
          LinkedIn, if you want to message me or simply connect{" "}
        </span>
      </div>
      <div className="contact-details">
         <FontAwesomeIcon  className="contact-icons" icon={faLocationPin}/> <span className="contact-text">I live in Bucharest, Romania</span><br />
         <FontAwesomeIcon  className="contact-icons" icon="fa-brands fa-whatsapp"></FontAwesomeIcon> <span className="contact-text">0040 0786 065 963</span>
      </div>
    </div>
  );
};
export default Contact;
