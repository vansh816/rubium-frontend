import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Cpu,
  Rocket,
  CheckCircle2,
  Sparkles,
  Award,
  Code2,
} from "lucide-react";
import "../styles/about.css";

const founders = [
  {
    name: "Rohit Jain",
    initials: "RJ",
    role: "Chairman & Founder",
    image: "/images/team/rohit-jain.jpg",
    description:
      "The person behind the vision and direction of Rubium AI. Rohit focuses on building the company's foundation, strategic growth, partnerships, and long-term vision.",
    linkedin: "https://www.linkedin.com/in/rohit-jain-8396b5b0",
  },
  {
    name: "Kamini Jain",
    initials: "KJ",
    role: "Co-Founder & CMO",
    image: "/images/team/kamini-jain.jpg",
    description:
      "Leading Rubium AI's brand, marketing, communication, and market presence. Kamini focuses on turning technology into a brand people can understand, trust, and connect with.",
    linkedin: "https://www.linkedin.com/in/kamini-jain-092b73161",
  },
  {
    name: "Abhay Jha",
    initials: "AJ",
    role: "CTO & Co-Founder",
    image: "/images/team/abhay-jha.jpg",
    description:
      "Leading Rubium AI's technology and engineering direction. Abhay works across AI, software architecture, product development, and technical strategy, turning ideas into scalable products.",
    linkedin: "https://www.linkedin.com/in/abhay-jha-144b41346",
  },
];

const developers = [
  {
    name: "Tanisha Mittal",
    initials: "TM",
    role: "Full Stack Engineer",
    description:
      "Works across frontend and backend development, contributing to the development of Rubium AI's web platforms and product ecosystem.",
    linkedin: "https://www.linkedin.com/in/tanisha-mittal-7311b231b",
  },
  {
    name: "Abhishek Sikarwar",
    initials: "AS",
    role: "Full Stack Engineer",
    description:
      "Contributes across the full development stack, helping build, integrate, test, and improve Rubium AI's products and applications.",
    linkedin: "https://www.linkedin.com/in/abhishek-sikarwar-a13a122a5",
  },
  {
    name: "Vansh Sharma",
    initials: "VS",
    role: "Backend Engineer",
    description:
      "Focused on backend engineering, APIs, databases, integrations, and the systems that power Rubium AI's products behind the scenes.",
    linkedin: "https://www.linkedin.com/in/vansh-sharma-571466382",
  },
];

function FounderCard({ member, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="team-card founder-card"
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
      {/* Founder Portrait Image Frame */}
      <div className="founder-image-box">
        {!imgError ? (
          <img
            src={member.image}
            alt={member.name}
            className="founder-photo"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="founder-photo-placeholder">
            <div className="founder-placeholder-glow" />
            <div className="founder-initials-ring">
              <span>{member.initials}</span>
            </div>
          </div>
        )}

        <span className="founder-number-badge">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="founder-role-badge">
          {member.role}
        </span>
      </div>

      <div className="founder-card-body">
        <h3>{member.name}</h3>

        <span className="team-role">
          {member.role}
        </span>

        <p>{member.description}</p>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="team-linkedin"
        >
          <span className="linkedin-icon">in</span>
          <span>LinkedIn</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}

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
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          {/* Top 2-Column Hero */}
          <div className="about-hero-grid">
            <div className="about-hero-text">
              <span className="about-eyebrow">
                ABOUT RUBIUM AI
              </span>

              <h2>
                We don't just build with AI.
                <span> We engineer what's next.</span>
              </h2>

              <p className="about-lead">
                Rubium AI is an AI engineering company focused on
                turning complex problems into intelligent, practical,
                and scalable solutions.
              </p>

              <p className="about-sub">
                We work at the intersection of Artificial Intelligence,
                automation, software engineering, and product development
                — building systems that don't just look impressive,
                but actually solve problems.
              </p>

              <div className="about-badges">
                <span className="about-badge">
                  <CheckCircle2 size={15} />
                  Intelligent Workflows
                </span>
                <span className="about-badge">
                  <CheckCircle2 size={15} />
                  Automation Systems
                </span>
                <span className="about-badge">
                  <CheckCircle2 size={15} />
                  Measurable Impact
                </span>
              </div>
            </div>

            <div className="about-hero-visual">
              <div className="about-visual-card">
                <div className="about-visual-glow" />

                <div className="about-visual-badge-top">
                  <Sparkles size={13} />
                  <span>Next-Gen AI Engineering</span>
                </div>

                <img
                  src="/images/mascot-laptop.png"
                  alt="Rubium AI Mascot"
                  className="about-visual-mascot"
                />

                <div className="about-visual-footer">
                  <strong>Practical Intelligence</strong>
                  <span>Engineered for real-world enterprise scale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology / 3 Approach Cards */}
          <div className="about-approach-section">
            <div className="about-approach-header">
              <span className="about-sub-eyebrow">OUR APPROACH</span>
              <h3>A disciplined approach to intelligent engineering.</h3>
            </div>

            <div className="about-approach-grid">
              <motion.div
                className="about-approach-card"
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
              >
                <div className="about-approach-top">
                  <div className="about-approach-icon">
                    <Compass size={22} strokeWidth={1.8} />
                  </div>
                  <span className="about-approach-num">01</span>
                </div>

                <h4>Understand the problem.</h4>

                <p>
                  We deconstruct operational bottlenecks and workflows first to uncover exactly where intelligence will generate real, sustainable value.
                </p>
              </motion.div>

              <motion.div
                className="about-approach-card"
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
              >
                <div className="about-approach-top">
                  <div className="about-approach-icon">
                    <Cpu size={22} strokeWidth={1.8} />
                  </div>
                  <span className="about-approach-num">02</span>
                </div>

                <h4>Engineer the intelligence.</h4>

                <p>
                  Architecting custom AI models, autonomous agentic loops, and resilient software infrastructure tailored to your business challenges.
                </p>
              </motion.div>

              <motion.div
                className="about-approach-card"
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
              >
                <div className="about-approach-top">
                  <div className="about-approach-icon">
                    <Rocket size={22} strokeWidth={1.8} />
                  </div>
                  <span className="about-approach-num">03</span>
                </div>

                <h4>Build what matters.</h4>

                <p>
                  Delivering production-grade digital products that go beyond hype to improve workflows, eliminate manual overhead, and accelerate growth.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Vision Banner */}
          <div className="about-vision-card">
            <div className="about-vision-decor" />

            <div className="about-vision-content">
              <span className="about-vision-pill">
                <Sparkles size={13} />
                OUR LONG-TERM VISION
              </span>

              <h3>
                "To build intelligent technology that creates measurable impact."
              </h3>

              <p>
                We believe the future won't be built by simply adding AI to existing products. It will be built by rethinking how products, businesses, and people work with intelligent systems.
              </p>

              <div className="about-tagline-bar">
                <span>Rubium AI</span>
                <span className="dot">•</span>
                <span>Engineering Intelligence for What's Next.</span>
              </div>
            </div>
          </div>
        </motion.div>


        {/* =========================
            MEET OUR TEAM
        ========================= */}

        <motion.div
          className="team-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
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

          {/* PARTITION 1: FOUNDERS & CO-FOUNDERS */}
          <div className="team-partition founders-partition">
            <div className="team-partition-header">
              <div className="team-partition-badge">
                <Award size={15} />
                <span>01 • LEADERSHIP</span>
              </div>
              <div className="team-partition-titles">
                <h3>Founders & Co-Founders</h3>
                <p>The visionaries shaping Rubium AI's strategy, brand, and technology architecture.</p>
              </div>
            </div>

            <div className="team-grid founders-grid">
              {founders.map((member, index) => (
                <FounderCard
                  key={member.name}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* PARTITION 2: DEVELOPERS / EMPLOYEES */}
          <div className="team-partition developers-partition">
            <div className="team-partition-header">
              <div className="team-partition-badge">
                <Code2 size={15} />
                <span>02 • ENGINEERING TEAM</span>
              </div>
              <div className="team-partition-titles">
                <h3>Developers & Engineers</h3>
                <p>The core builders engineering, integrating, and scaling our software platforms.</p>
              </div>
            </div>

            <div className="team-grid developers-grid">
              {developers.map((member, index) => (
                <motion.div
                  className="team-card developer-card"
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
                  <div className="developer-card-top">
                    <div className="team-avatar">
                      {member.initials}
                    </div>

                    <div className="team-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <h3>{member.name}</h3>

                  <span className="team-role">
                    {member.role}
                  </span>

                  <p>{member.description}</p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                  >
                    <span className="linkedin-icon">in</span>
                    <span>LinkedIn</span>
                    <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;