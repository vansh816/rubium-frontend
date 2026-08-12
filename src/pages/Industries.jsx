import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Factory,
  Truck,
  Building2,
  Laptop,
  Landmark as Government,
  Rocket,
} from "lucide-react";

import "../styles/industries.css";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Build intelligent healthcare platforms, automation systems, and AI-powered solutions that improve digital experiences and operational efficiency.",
  },
  {
    icon: Landmark,
    title: "Finance & FinTech",
    description:
      "Develop secure financial platforms, intelligent automation, analytics systems, and AI solutions for modern financial services.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description:
      "Create smarter commerce experiences with AI recommendations, automation, customer intelligence, and scalable digital platforms.",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description:
      "Build modern learning platforms, intelligent assistants, automation tools, and personalized digital education experiences.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Modernize manufacturing operations through automation, intelligent systems, data platforms, and connected enterprise solutions.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Improve logistics operations with intelligent workflows, predictive systems, automation, and real-time data solutions.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Transform real estate operations with digital platforms, automation, AI-powered workflows, and intelligent customer experiences.",
  },
  {
    icon: Laptop,
    title: "SaaS & Technology",
    description:
      "Design, develop, and scale SaaS products, enterprise applications, AI platforms, and technology solutions.",
  },
  {
    icon: Government,
    title: "Government & Public Sector",
    description:
      "Build secure and scalable digital solutions that help public organizations modernize services and improve operational efficiency.",
  },
  {
    icon: Rocket,
    title: "Startups & SMEs",
    description:
      "Help growing businesses turn ideas into scalable products through AI engineering, software development, automation, and cloud technology.",
  },
];

function Industries() {
  return (
    <main className="industries-page">

      {/* HERO */}
      <section className="industries-hero">
        <div className="industries-grid" />

        <motion.div
          className="industries-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge">
            <span>✦</span>
            Industries We Serve
          </span>

          <h1>
            Technology Built
            <br />
            <span>For Every Industry.</span>
          </h1>

          <p>
            We combine AI engineering, software development, automation,
            cloud, and modern digital technologies to solve complex
            challenges across industries.
          </p>
        </motion.div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries-section">
        <div className="industries-container">

          <motion.div
            className="industries-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>OUR EXPERTISE</span>

            <h2>
              Solutions that adapt
              <br />
              <strong>to your industry.</strong>
            </h2>

            <p>
              From startups to enterprises, Rubium AI builds technology
              solutions designed around real business needs.
            </p>
          </motion.div>

          <div className="industries-grid-cards">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.article
                  className="industry-card"
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="industry-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>

                  <div className="industry-arrow">
                    →
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="industries-cta">
        <div className="cta-glow" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>READY TO BUILD?</span>

          <h2>
            Have a challenge
            <br />
            <strong>worth solving?</strong>
          </h2>

          <p>
            Let's build an intelligent solution around your business.
          </p>

          <a href="/contact" className="industries-cta-button">
            Start a Project
            <span>↗</span>
          </a>
        </motion.div>
      </section>

    </main>
  );
}

export default Industries;