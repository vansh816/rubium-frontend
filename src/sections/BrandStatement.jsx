import { ArrowUpRight } from "lucide-react";

function BrandStatement() {
  return (
    <section className="brand-statement">
      <div className="container">

        <div className="brand-statement-top">
          <span className="section-eyebrow">
            WHAT IS RUBIUM AI?
          </span>

          <span className="section-number">
            01
          </span>
        </div>


        <div className="brand-statement-content">

          <h2>
            We don't just build
            <span> software.</span>
          </h2>

          <p>
            Rubium AI isn’t here to just “add AI”  we rethink what your business can become with it.
We build intelligent products, automations, and digital systems that solve real-world problems.
From AI agents and workflows to web platforms, custom software, and AI integrations.
We turn bold ideas from “what if?” into “let’s build it.”
<b>Think different. Build smarter. Break the ordinary. Scale what works.</b>

          </p>

        </div>


        <div className="brand-statement-bottom">

          <div className="brand-statement-line"></div>

          <a
            href="/about"
            className="statement-link"
          >
            Discover Rubium AI
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default BrandStatement;