import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Factory,
  Truck,
  Building2,
  Landmark as GovernmentIcon,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    title: "FinTech & Banking",
    icon: Landmark,
    image: "/images/industries/fintech.jpg",
    description:
      "Build secure financial platforms, intelligent analytics, automation systems, and AI-powered solutions for the modern financial ecosystem.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    image: "/images/industries/healthcare.jpg",
    description:
      "Create intelligent healthcare experiences and digital systems that improve workflows, accessibility, and operational efficiency.",
  },
  {
    title: "E-Commerce & Retail",
    icon: ShoppingBag,
    image: "/images/industries/ecommerce.jpg",
    description:
      "Transform online commerce with intelligent recommendations, automation, personalized experiences, and scalable platforms.",
  },
  {
    title: "Education & EdTech",
    icon: GraduationCap,
    image: "/images/industries/education.jpg",
    description:
      "Develop engaging learning platforms, AI-powered education tools, and digital experiences built for modern learners.",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    image: "/images/industries/manufacturing.jpg",
    description:
      "Use automation, data, AI, and connected systems to improve production workflows and operational intelligence.",
  },
  {
    title: "Logistics & Supply Chain",
    icon: Truck,
    image: "/images/industries/logistics.jpg",
    description:
      "Build intelligent logistics systems that improve visibility, planning, automation, and supply chain efficiency.",
  },
  {
    title: "Real Estate",
    icon: Building2,
    image: "/images/industries/real-estate.jpg",
    description:
      "Modernize property platforms and workflows through automation, intelligent search, analytics, and digital experiences.",
  },
  {
    title: "Government & Public Sector",
    icon: GovernmentIcon,
    image: "/images/industries/government.jpg",
    description:
      "Create secure and accessible digital platforms that help public organizations modernize services and operations.",
  },
  {
    title: "Startups & SMEs",
    icon: Rocket,
    image: "/images/industries/startups.jpg",
    description:
      "Turn ambitious ideas into scalable digital products with rapid development, AI integration, and modern technology.",
  },
];

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const active = industries[activeIndustry];
  const ActiveIcon = active.icon;

  return (
    <section className="industries-section" id="industries">
      <div className="industries-container">

        {/* Header */}
        <motion.div
          className="industries-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="industries-eyebrow">
              INDUSTRIES
            </span>

            <h2>
              Technology that adapts
              <span> to your industry.</span>
            </h2>
          </div>

          <p>
            We combine engineering, AI, automation, and design
            to build solutions around the unique challenges of
            every industry.
          </p>
        </motion.div>

        {/* Industry Explorer */}
        <div className="industries-explorer">

          {/* List */}
          <motion.div
            className="industries-list"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isActive = activeIndustry === index;

              return (
                <button
                  key={industry.title}
                  className={`industry-item ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => setActiveIndustry(index)}
                >
                  <span className="industry-item-left">

                    <span className="industry-icon">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>

                    <span className="industry-title">
                      {industry.title}
                    </span>

                  </span>

                  <span className="industry-item-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Content */}
          <div className="industry-display">

            <AnimatePresence>
              <motion.div
                key={active.image}
                className="industry-display-bg"
                style={{ backgroundImage: `url(${active.image})` }}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            </AnimatePresence>

            <div className="industry-display-overlay"></div>
            <div className="industry-display-glow"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                className="industry-display-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >

                <div className="industry-large-icon">
                  <ActiveIcon
                    size={34}
                    strokeWidth={1.5}
                  />
                </div>

                <span className="industry-label">
                  0{activeIndustry + 1}
                </span>

                <h3>{active.title}</h3>

                <p>{active.description}</p>

                <a href="#contact">
                  Build for this industry
                  <ArrowUpRight size={18} />
                </a>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Industries;