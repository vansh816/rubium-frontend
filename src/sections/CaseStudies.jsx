import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  ShoppingCart,
  BarChart3,
  Workflow,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const caseStudies = [
  {
    id: "01",
    category: "AI & AUTOMATION",
    title: "Intelligent Business Automation",
    description:
      "An AI-powered workflow platform designed to automate repetitive business processes, connect systems, and help teams make faster decisions.",
    technologies: ["AI", "Automation", "APIs", "Cloud"],
    metrics: "+68% Workflow Efficiency",
    image: "/images/portfolio/portfolio-automation.jpg",
    alt: "Intelligent Business Automation AI Platform UI",
    icon: BrainCircuit,
  },
  {
    id: "02",
    category: "SAAS & ENTERPRISE",
    title: "Scalable Enterprise Platform",
    description:
      "A modern SaaS platform built around secure data management, intelligent workflows, role-based access, and scalable architecture.",
    technologies: ["React", "Java", "MongoDB", "Cloud"],
    metrics: "99.9% Cloud Uptime",
    image: "/images/portfolio/portfolio-enterprise.jpg",
    alt: "Scalable Enterprise Cloud Infrastructure Dashboard",
    icon: Workflow,
  },
  {
    id: "03",
    category: "E-COMMERCE",
    title: "Next-Generation Commerce",
    description:
      "A data-driven commerce experience combining modern UI, intelligent product discovery, analytics, and streamlined customer journeys.",
    technologies: ["React", "AI", "Analytics", "APIs"],
    metrics: "3.4x Conversion Growth",
    image: "/images/portfolio/portfolio-ecommerce.jpg",
    alt: "Next-Generation AI E-Commerce Store Platform",
    icon: ShoppingCart,
  },
  {
    id: "04",
    category: "DATA & ANALYTICS",
    title: "Intelligent Data Platform",
    description:
      "A centralized analytics solution that transforms complex business data into meaningful insights and actionable intelligence.",
    technologies: ["Python", "Data", "AI/ML", "Dashboards"],
    metrics: "10M+ Insights Analyzed",
    image: "/images/portfolio/portfolio-data.jpg",
    alt: "Intelligent Data Platform Predictive Analytics",
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
          <div className="case-studies-header-left">
            <span className="case-studies-eyebrow">
              <Sparkles size={13} />
              <span>FEATURED WORK</span>
            </span>

            <h2>
              Software Project 
              <span> Portfolio.</span>
            </h2>
          </div>

          <p className="case-studies-header-desc">
            From intelligent automation to enterprise platforms,
            we turn ambitious ideas into digital products built
            for real-world impact.
          </p>
        </motion.div>

        {/* Main Case Study */}
        <div className="case-study-layout">

          {/* Left: Case navigation */}
          <motion.div
            className="case-study-list"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {caseStudies.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeCase === index;

              return (
                <button
                  key={item.id}
                  className={`case-study-item ${isActive ? "active" : ""}`}
                  onClick={() => setActiveCase(index)}
                  type="button"
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
                    strokeWidth={1.8}
                  />
                </button>
              );
            })}
          </motion.div>

          {/* Display */}
          <div className="case-study-display">

            {/* Middle: Attractive Project Image & Badges */}
            <div className="case-study-visual">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  className="case-study-visual-wrapper"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <img
                    src={current.image}
                    alt={current.alt}
                    className="case-study-image"
                  />
                  <div className="case-study-image-gradient" />

                  {/* Top floating pill badge */}
                  <div className="case-study-image-badge">
                    <span className="badge-glow-dot" />
                    <span>{current.category}</span>
                  </div>

                  {/* Bottom impact metric badge */}
                  {current.metrics && (
                    <div className="case-study-image-metric">
                      <TrendingUp size={15} />
                      <span>{current.metrics}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Details */}
            <div className="case-study-details">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  className="case-study-details-content"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="case-study-category-row">
                    <span className="case-study-category">
                      {current.category}
                    </span>
                    <div className="case-study-mini-icon">
                      <CurrentIcon size={16} />
                    </div>
                  </div>

                  <h3>{current.title}</h3>

                  <p>{current.description}</p>

                  <div className="case-study-tech-wrap">
                    <span className="case-study-tech-label">Technologies:</span>
                    <div className="case-study-tech">
                      {current.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <a href="#contact" className="case-study-cta-link">
                    <span>Start a similar project</span>
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#contact" className="case-studies-bottom-link">
            <span>HAVE AN IDEA? LET'S ENGINEER IT.</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudies;