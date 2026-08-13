import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* FOOTER TOP */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              <img
                src="/images/rubium-logo1.jpeg"
                alt="Rubium AI"
              />

              <span>RUBIUM AI</span>
            </a>

            <p>
              Engineering intelligent software and digital
              solutions for what's next.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="footer-socials">

              <span className="footer-social-title">
                FOLLOW RUBIUM AI
              </span>

              <div className="footer-social-links">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/rubiumai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>

                  <span>Instagram</span>
                </a>


                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/company/rubium-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9V18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="6"
                      cy="5.5"
                      r="1.5"
                      fill="currentColor"
                    />

                    <path
                      d="M11 18V9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M11 13C11 10.8 12.5 9 14.5 9C16.7 9 18 10.7 18 13V18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span>LinkedIn</span>
                </a>

                {/* WHATSAPP */}
  <a
    href="https://wa.me/YOUR_NUMBER"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-social-link"
  >
    {/* WhatsApp Icon */}
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 11.5C20 16.2 16.3 20 11.7 20C10.2 20 8.8 19.6 7.5 19L4 20L5.1 16.7C4.4 15.5 4 14.1 4 12.6C4 7.9 7.7 4 12.3 4C16.7 4 20 7.3 20 11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 9.5C8.7 9 9 8.8 9.4 8.8C9.7 8.8 10 9 10.2 9.4L10.8 10.5C11 10.8 11 11.1 10.8 11.4L10.3 12C10.8 13 11.7 13.9 12.7 14.4L13.3 13.9C13.6 13.7 13.9 13.7 14.2 13.9L15.3 14.5C15.7 14.7 15.8 15.1 15.6 15.4C15.3 16 14.8 16.3 14.2 16.3C11.1 16 8.5 13.4 8.2 10.3C8.2 10 8.3 9.7 8.5 9.5Z"
        fill="currentColor"
      />
    </svg>

    <span>WhatsApp</span>
  </a>

              </div>
            </div>

          </div>


          {/* COMPANY */}
          <div className="footer-column">

            <h4>Company</h4>

            <a href="#home">Home</a>

            <a href="#services">Services</a>

            <a href="#industries">Industries</a>

            <a href="#process">How We Work</a>

            <a href="#technology">Technology</a>

            <a href="#contact">Contact</a>

            <a href="#about">About</a>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <h4>Services</h4>

            <a href="#services">AI Engineering</a>

            <a href="#services">AI Agents</a>

            <a href="#services">Enterprise Software</a>

            <a href="#services">SaaS Development</a>

            <a href="#services">Cloud Solutions</a>

            <a href="#services">Automation</a>

          </div>


          {/* CONTACT */}
          <div className="footer-contact">

            <h4>Let's build together.</h4>

            <p>
              Have an idea, project, or challenge?
              Let's turn your vision into something real.
            </p>

            <a href="mailto:hello.rubiumai@gmail.com">
              hello.rubiumai@gmail.com
            </a>

            <a
              href="#contact"
              className="footer-book-call"
            >
              Book a Call ↗
            </a>

          </div>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <span>
            © 2026 Rubium AI. All rights reserved.
          </span>

          <span>
            Engineering What's Next.
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;