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
    image: "/images/services/ai-engineering.jpg",
    alt: "AI engineering team building machine learning models and smart business solutions",
    description:
      "Build intelligent AI systems and production-ready machine learning solutions designed around real business needs.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    image: "/images/services/ai-agents.jpg",
    alt: "AI agents automating customer support and business tasks on a smart dashboard",
    description:
      "Develop autonomous AI agents that can reason, interact with tools, automate workflows, and assist your teams.",
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    image: "/images/services/enterprise-software.jpg",
    alt: "Custom enterprise software with ERP and CRM dashboard for large business operations",
    description:
      "Scalable and secure enterprise platforms built to streamline operations and support business growth.",
  },
  {
    icon: Layers3,
    title: "SaaS Development",
    image: "/images/services/saas-development.jpg",
    alt: "SaaS development platform dashboard on laptop and mobile for subscription-based business",
    description:
      "From MVP to production, we create scalable SaaS products with modern architecture and seamless user experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    image: "/images/services/mobile-apps.jpg",
    alt: "Mobile app development for iOS and Android shown on smartphone screens",
    description:
      "Design and develop modern mobile applications that deliver fast, intuitive, and reliable experiences.",
  },
  {
    icon: Code2,
    title: "Web Development",
    image: "/images/services/web-development.jpg",
    alt: "Responsive web development project displayed on laptop, tablet, and mobile",
    description:
      "High-performance websites and web applications built with modern technologies and responsive design.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    image: "/images/services/cloud-solutions.jpg",
    alt: "Secure and scalable cloud solutions with cloud servers and data storage",
    description:
      "Cloud-native infrastructure and solutions designed for scalability, reliability, security, and performance.",
  },
  {
    icon: ServerCog,
    title: "DevOps",
    image: "/images/services/devops.jpg",
    alt: "DevOps CI/CD pipeline for automated software deployment and monitoring",
    description:
      "Streamline development and deployment with automated CI/CD pipelines, infrastructure, monitoring, and cloud operations.",
  },
  {
    icon: Workflow,
    title: "Automation",
    image: "/images/services/automation.jpg",
    alt: "Business process automation workflow connecting apps to save time and reduce manual work",
    description:
      "Automate repetitive processes and complex workflows to improve efficiency and reduce operational overhead.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    image: "/images/services/ui-ux-design.jpg",
    alt: "UI/UX design wireframes and user-friendly app interface mockups",
    description:
      "Human-centered interfaces and digital experiences that combine usability, aesthetics, and business goals.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    image: "/images/services/data-engineering.jpg",
    alt: "Data engineering pipeline for big data processing, analytics, and reporting",
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
           Rubium AI creates connected business systems with workflow automation that saves time and reduces manual work. 

            {/* From intelligent AI systems to scalable enterprise platforms,
            we design and engineer digital products that solve real-world
            business challenges. */}
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
                  y: -6,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="service-card-media">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="service-card-img"
                    loading="lazy"
                  />
                  <div className="service-card-media-overlay" />

                  <div className="service-icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-arrow">
                  <ArrowUpRight size={17} />
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