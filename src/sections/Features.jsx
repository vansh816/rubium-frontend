import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Building2,
  Cloud,
  Code2,
  Database,
  Layers3,
  Smartphone,
  Workflow,
  Palette,
  ServerCog,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Build intelligent AI systems and production-ready machine learning solutions designed around real business needs.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Develop autonomous AI agents that can reason, interact with tools, automate workflows, and assist your teams.",
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    description:
      "Scalable and secure enterprise platforms built to streamline operations and support business growth.",
  },
  {
    icon: Layers3,
    title: "SaaS Development",
    description:
      "From MVP to production, we create scalable SaaS products with modern architecture and seamless user experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Design and develop modern mobile applications that deliver fast, intuitive, and reliable experiences.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern technologies and responsive design.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud-native infrastructure and solutions designed for scalability, reliability, security, and performance.",
  },
  {
    icon: ServerCog,
    title: "DevOps",
    description:
      "Streamline development and deployment with automated CI/CD pipelines, infrastructure, monitoring, and cloud operations.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Automate repetitive processes and complex workflows to improve efficiency and reduce operational overhead.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered interfaces and digital experiences that combine usability, aesthetics, and business goals.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build reliable data pipelines and architectures that turn complex data into useful business intelligence.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Features = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="services-eyebrow">
            WHAT WE BUILD
          </span>

          <h2>
            Engineering solutions
            <span> for what's next.</span>
          </h2>

          <p>
            From intelligent AI systems to scalable enterprise platforms,
            we design and engineer digital products that solve real-world
            business challenges.
          </p>
        </motion.div>

        {/* ONE MASCOT FOR THE ENTIRE SERVICES SECTION */}
        <div className="services-mascot">
          <img
            src="/images/mascot-lightbulb.png"
            alt="Rubium AI mascot"
          />
        </div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                className="service-card"
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-arrow">
                  <ArrowUpRight size={20} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="services-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Have a project in mind?
          </p>

          <a href="#contact" className="services-cta">
            Let's build it
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;