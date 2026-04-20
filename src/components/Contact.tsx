import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hsfwebdevelopers@gmail.com" data-cursor="disable">
                hsfwebdevelopers@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919496829330" data-cursor="disable">
                +91 94968 29330
              </a>
            </p>
            <h4>WhatsApp</h4>
            <p>
              <a
                href="https://wa.me/919496829330"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                Message on WhatsApp
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/hsf237"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-hasan-b138283b7"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://elite-engine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              EliteStore <MdArrowOutward />
            </a>
            <a
              href="https://www.tiskems.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              TISK EMS <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>MUHAMMAD HASAN</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "#aaa", fontSize: "0.85rem" }}>
              Full Stack Creative Developer · 14 y/o
            </p>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
