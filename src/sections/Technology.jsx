import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const technologyCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    image: "/images/technology/frontend.jpg",
    description:
      "Modern interfaces engineered for speed, usability, responsiveness, and exceptional user experiences.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    image: "/images/technology/backend.jpg",
    description:
      "Reliable backend systems and APIs designed for performance, security, maintainability, and scale.",
    technologies: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Python",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    image: "/images/technology/database.jpg",
    description:
      "Flexible and reliable data architectures built around the needs of modern digital products.",
    technologies: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Data Modeling",
      "Database APIs",
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    icon: BrainCircuit,
    image: "/images/technology/ai.jpg",
    description:
      "Intelligent systems combining AI, machine learning, automation, and data to solve complex problems.",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "AI Agents",
      "LLM Integration",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    image: "/images/technology/cloud.jpg",
    description:
      "Cloud-ready infrastructure and deployment workflows designed for reliability, scalability, and continuous delivery.",
    technologies: [
      "AWS",
      "Docker",
      "CI/CD",
      "Git",
      "GitHub",
      "Cloud Infrastructure",
    ],
  },
  {
    id: "tools",
    label: "Tools & APIs",
    icon: Wrench,
    image: "/images/technology/tools.jpg",
    description:
      "Development and integration tools that help us connect systems, automate workflows, and ship efficiently.",
    technologies: [
      "REST APIs",
      "Axios",
      "Postman",
      "GitHub",
      "Jira",
      "Third-party APIs",
    ],
  },
];

const Technology = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const active = technologyCategories.find(
    (category) => category.id === activeCategory
  );

  const ActiveIcon = active.icon;

  return (
    <section className="technology-section" id="technology">
      <div className="technology-container">

        {/* Header */}
        <motion.div
          className="technology-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="technology-eyebrow">
              TECHNOLOGY STACK
            </span>

            <h2>
              Built with the
              <span> right technology.</span>
            </h2>
          </div>

          <p>
            We choose technologies based on your product,
            performance requirements, scalability goals, and
            long-term business needs.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="technology-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {technologyCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                className={`technology-tab ${
                  isActive ? "active" : ""
                }`}
                onClick={() =>
                  setActiveCategory(category.id)
                }
              >
                <Icon size={17} strokeWidth={1.8} />

                <span>{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Main Technology Display */}
        <div className="technology-display">

          {/* Left */}
          <div className="technology-intro">

            <AnimatePresence>
              <motion.div
                key={active.image}
                className="technology-intro-bg"
                style={{ backgroundImage: `url(${active.image})` }}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            </AnimatePresence>

            <div className="technology-intro-overlay" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="technology-intro-content"
                initial={{
                  opacity: 0,
                  x: -16,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 16,
                }}
                transition={{
                  duration: 0.28,
                }}
              >
                <div className="technology-icon">
                  <ActiveIcon
                    size={26}
                    strokeWidth={1.7}
                  />
                </div>

                <h3>{active.label}</h3>

                <p>{active.description}</p>

                <a href="#contact">
                  Discuss your project
                  <ArrowUpRight size={16} />
                </a>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right */}
          <div className="technology-grid">

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="technology-cards"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {active.technologies.map(
                  (technology, index) => (
                    <motion.div
                      className="technology-card"
                      key={technology}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.25,
                      }}
                      whileHover={{
                        y: -3,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div
                        className="technology-card-bg"
                        style={{ backgroundImage: `url(${active.image})` }}
                      />

                      <div className="technology-card-top">
                        <span className="technology-card-tag">
                          {active.label}
                        </span>
                      </div>

                      <div className="technology-card-bottom">
                        <span className="technology-card-name">
                          {technology}
                        </span>

                        <span className="technology-card-arrow-wrap">
                          <ArrowUpRight
                            size={15}
                            className="technology-card-arrow"
                          />
                        </span>
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="technology-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>
            MODERN STACK. SMART ARCHITECTURE. BUILT TO SCALE.
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Technology;