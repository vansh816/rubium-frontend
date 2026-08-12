import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "../styles/about.css";

const team = [
  {
    name: "Rohit Jain",
    role: "Chairman & Founder",
    description:
      "The person behind the vision and direction of Rubium AI. Rohit focuses on building the company's foundation, strategic growth, partnerships, and long-term vision.",
    linkedin: "https://www.linkedin.com/in/rohit-jain-8396b5b0",
  },
  {
    name: "Kamini Jain",
    role: "Co-Founder & CMO",
    description:
      "Leading Rubium AI's brand, marketing, communication, and market presence. Kamini focuses on turning technology into a brand people can understand, trust, and connect with.",
    linkedin: "https://www.linkedin.com/in/kamini-jain-092b73161",
  },
  {
    name: "Abhay Jha",
    role: "CTO & Co-Founder",
    description:
      "Leading Rubium AI's technology and engineering direction. Abhay works across AI, software architecture, product development, and technical strategy, turning ideas into scalable products.",
    linkedin: "https://www.linkedin.com/in/abhay-jha-144b41346",
  },
  {
    name: "Tanisha Mittal",
    role: "Full Stack Engineer",
    description:
      "Works across frontend and backend development, contributing to the development of Rubium AI's web platforms and product ecosystem.",
    linkedin: "https://www.linkedin.com/in/tanisha-mittal-7311b231b",
  },
  {
    name: "Abhishek Sikarwar",
    role: "Full Stack Engineer",
    description:
      "Contributes across the full development stack, helping build, integrate, test, and improve Rubium AI's products and applications.",
    linkedin: "https://www.linkedin.com/in/abhishek-sikarwar-a13a122a5",
  },
  {
    name: "Vansh Sharma",
    role: "Backend Engineer",
    description:
      "Focused on backend engineering, APIs, databases, integrations, and the systems that power Rubium AI's products behind the scenes.",
    linkedin: "https://www.linkedin.com/in/vansh-sharma-571466382",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* =========================
            ABOUT RUBIUM AI
        ========================= */}

        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-eyebrow">
            ABOUT RUBIUM AI
          </span>

          <h2>
            We don't just build with AI.
            <span> We engineer what's next.</span>
          </h2>

          <div className="about-content">

            <p className="about-lead">
              Rubium AI is an AI engineering company focused on
              turning complex problems into intelligent, practical,
              and scalable solutions.
            </p>

            <p>
              We work at the intersection of Artificial Intelligence,
              automation, software engineering, and product development
              - building systems that don't just look impressive,
              but actually solve problems.
            </p>

            <p>
              From intelligent workflows and AI-powered applications
              to automation systems and custom AI solutions, our
              approach is simple:
            </p>

            <div className="about-principles">
              <span>Understand the problem.</span>
              <span>Engineer the intelligence.</span>
              <span>Build what matters.</span>
            </div>

            <p>
              We believe the future won't be built by simply adding AI
              to existing products. It will be built by rethinking how
              products, businesses, and people work with intelligent
              systems.
            </p>

            <p>
              At Rubium AI, we're experimenting, building, testing,
              and learning every day - with one long-term goal:
            </p>

            <p className="about-goal">
              To build intelligent technology that creates
              measurable impact.
            </p>

          </div>

          <div className="about-tagline">
            Rubium AI - Engineering Intelligence for What's Next.
          </div>
        </motion.div>


        {/* =========================
            MEET OUR TEAM
        ========================= */}

        <motion.div
          className="team-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >

          <div className="team-header">

            <div>
              <span className="about-eyebrow">
                THE PEOPLE BEHIND THE WORK
              </span>

              <h2>
                Meet our
                <span> team.</span>
              </h2>
            </div>

            <p>
              A team of builders, engineers, and problem-solvers
              working together to create what comes next.
            </p>

          </div>


          <div className="team-grid">

            {team.map((member, index) => (

              <motion.div
                className="team-card"
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
              >

                <div className="team-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                <div className="team-avatar">
                  {member.name.charAt(0)}
                </div>


                <h3>{member.name}</h3>


                <span className="team-role">
                  {member.role}
                </span>


                <p>
                  {member.description}
                </p>


                {/* LINKEDIN */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-linkedin"
                >
                  <span className="linkedin-icon">
                    in
                  </span>

                  <span>LinkedIn</span>

                  <ArrowUpRight size={16} />
                </a>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;