import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/faq.css";

const faqs = [
  {
    question: "How long does a typical AI project take?",
    answer:
      "Timelines depend on scope a focused AI agent can ship in 4–6 weeks, while a full enterprise platform typically runs 4–6 months. We provide a detailed roadmap after the discovery session.",
  },
  {
    question: "Do you work with companies that have no existing AI infrastructure?",
    answer:
      "Absolutely. We can help you start from the ground up from identifying the right AI opportunities to designing the architecture, developing the solution, and deploying it into production.",
  },
  {
    question: "Is our data secure during development?",
    answer:
      "Security is considered throughout the development lifecycle. We follow secure development practices and design systems with appropriate access controls, data protection, and deployment security in mind.",
  },
  {
    question: "What makes Rubium AI different from a typical software agency?",
    answer:
      "Rubium AI combines AI engineering, software development, automation, cloud, and digital product design under one team. We focus on building practical, scalable solutions around real business problems rather than simply delivering software.",
  },
  {
    question: "Can you integrate with our existing ERP and CRM systems?",
    answer:
      "Yes. We can integrate AI and software solutions with existing ERP, CRM, databases, APIs, and other business systems to create connected and automated workflows.",
  },
  {
    question: "Do you provide support after the project is launched?",
    answer:
      "Yes. We can provide ongoing maintenance, monitoring, optimization, feature improvements, and technical support after deployment.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* HEADER */}
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="faq-title-light">
            Frequently
          </span>

          <span className="faq-title-pink">
            Asked Questions
          </span>
        </motion.div>


        {/* FAQ LIST */}
        <motion.div
          className="faq-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                className={`faq-item ${isOpen ? "active" : ""}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <p className="faq-answer">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>


        {/* CTA */}
        <motion.div
          className="faq-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>Still have questions?</p>

          <a href="#contact">
            Book a Call ↗
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default FAQ;