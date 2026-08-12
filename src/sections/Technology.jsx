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

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <div className="technology-icon">
                  <ActiveIcon
                    size={30}
                    strokeWidth={1.6}
                  />
                </div>

                <span className="technology-index">
                  {String(
                    technologyCategories.findIndex(
                      (item) => item.id === active.id
                    ) + 1
                  ).padStart(2, "0")}
                </span>

                <h3>{active.label}</h3>

                <p>{active.description}</p>

                <a href="#contact">
                  Discuss your project
                  <ArrowUpRight size={17} />
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
                transition={{
                  duration: 0.35,
                }}
              >
                {active.technologies.map(
                  (technology, index) => (
                    <motion.div
                      className="technology-card"
                      key={technology}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                      }}
                    >
                      <span className="technology-card-number">
                        0{index + 1}
                      </span>

                      <span className="technology-card-name">
                        {technology}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="technology-card-arrow"
                      />
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