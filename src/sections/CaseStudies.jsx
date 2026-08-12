import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  ShoppingCart,
  BarChart3,
  Workflow,
} from "lucide-react";

const caseStudies = [
  {
    id: "01",
    category: "AI & AUTOMATION",
    title: "Intelligent Business Automation",
    description:
      "An AI-powered workflow platform designed to automate repetitive business processes, connect systems, and help teams make faster decisions.",
    technologies: ["AI", "Automation", "APIs", "Cloud"],
    icon: BrainCircuit,
  },
  {
    id: "02",
    category: "SAAS & ENTERPRISE",
    title: "Scalable Enterprise Platform",
    description:
      "A modern SaaS platform built around secure data management, intelligent workflows, role-based access, and scalable architecture.",
    technologies: ["React", "Java", "MongoDB", "Cloud"],
    icon: Workflow,
  },
  {
    id: "03",
    category: "E-COMMERCE",
    title: "Next-Generation Commerce",
    description:
      "A data-driven commerce experience combining modern UI, intelligent product discovery, analytics, and streamlined customer journeys.",
    technologies: ["React", "AI", "Analytics", "APIs"],
    icon: ShoppingCart,
  },
  {
    id: "04",
    category: "DATA & ANALYTICS",
    title: "Intelligent Data Platform",
    description:
      "A centralized analytics solution that transforms complex business data into meaningful insights and actionable intelligence.",
    technologies: ["Python", "Data", "AI/ML", "Dashboards"],
    icon: BarChart3,
  },
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const current = caseStudies[activeCase];
  const CurrentIcon = current.icon;

  return (
    <section className="case-studies-section" id="case-studies">
      <div className="case-studies-container">

        {/* Header */}
        <motion.div
          className="case-studies-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="case-studies-eyebrow">
              FEATURED WORK
            </span>

            <h2>
              Ideas engineered
              <span> into reality.</span>
            </h2>
          </div>

          <p>
            From intelligent automation to enterprise platforms,
            we turn ambitious ideas into digital products built
            for real-world impact.
          </p>
        </motion.div>

        {/* Main Case Study */}
        <div className="case-study-layout">

          {/* Case navigation */}
          <motion.div
            className="case-study-list"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {caseStudies.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className={`case-study-item ${
                    activeCase === index ? "active" : ""
                  }`}
                  onClick={() => setActiveCase(index)}
                >
                  <span className="case-study-item-number">
                    {item.id}
                  </span>

                  <span className="case-study-item-content">
                    <span className="case-study-item-category">
                      {item.category}
                    </span>

                    <span className="case-study-item-title">
                      {item.title}
                    </span>
                  </span>

                  <Icon
                    className="case-study-item-icon"
                    size={20}
                    strokeWidth={1.7}
                  />
                </button>
              );
            })}
          </motion.div>

          {/* Display */}
          <div className="case-study-display">

            <div className="case-study-visual">
              <div className="case-study-visual-grid"></div>

              <div className="case-study-orb case-study-orb-one"></div>
              <div className="case-study-orb case-study-orb-two"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  className="case-study-visual-content"
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.04,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="case-study-large-icon">
                    <CurrentIcon
                      size={42}
                      strokeWidth={1.4}
                    />
                  </div>

                  <span>RUBIUM AI</span>

                  <strong>
                    {current.id}
                  </strong>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Details */}
            <div className="case-study-details">

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="case-study-category">
                    {current.category}
                  </span>

                  <h3>{current.title}</h3>

                  <p>{current.description}</p>

                  <div className="case-study-tech">
                    {current.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a href="#contact">
                    Start a similar project
                    <ArrowUpRight size={18} />
                  </a>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        </div>

        {/* Bottom */}
        <motion.div
          className="case-studies-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>
            HAVE AN IDEA? LET'S ENGINEER IT.
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudies;