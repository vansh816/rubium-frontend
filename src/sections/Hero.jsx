import { ArrowUpRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
      </div>


      <div className="container hero-container">

        {/* LEFT */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <Sparkles size={16} />
            AI Engineering & Digital Innovation
          </div>


          <h1>
            Engineering
            <span>What's Next.</span>
          </h1>


          <p className="hero-description">
            We build intelligent software, AI-powered applications,
            enterprise platforms, automation systems, and digital
            products designed for the future.
          </p>


          {/* HERO BUTTONS */}
          <div className="hero-actions">

            {/* START A PROJECT → BOOK A CALL */}
            <a
              href="#contact"
              className="hero-primary-button"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </a>


            {/* EXPLORE SERVICES → WHAT WE BUILD */}
            <a
              href="#services"
              className="hero-secondary-button"
            >
              Explore Services
            </a>

          </div>


          <div className="hero-tags">

            <span>AI</span>
            <span>Software</span>
            <span>Automation</span>
            <span>Cloud</span>

          </div>

        </div>


        {/* RIGHT */}
        <div className="hero-visual">

          <img
            src="/images/rubium-robot.jpeg"
            alt="Rubium AI Robot"
            className="hero-robot"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;