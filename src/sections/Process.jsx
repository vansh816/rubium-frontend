import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We understand your business, users, goals, challenges, and technical requirements before writing a single line of code.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We turn requirements into a clear technical roadmap, architecture, priorities, and measurable outcomes.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design",
    description:
      "We create intuitive user experiences and interfaces that align your brand, users, and business objectives.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Engineering",
    description:
      "Our engineers build, integrate, test, and refine your product using modern technologies and scalable architecture.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description:
      "We deploy your product, monitor its performance, and make sure everything is ready for real-world users.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Scale",
    description:
      "As your business grows, we optimize infrastructure, introduce new capabilities, and continuously improve the product.",
  },
];

const Technology = () => {
  return (
    <section className="process-section" id="process">
      <div className="process-container">

        {/* Header */}
<motion.div
  className="process-header"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  {/* LEFT: Heading + Mascot */}
  <div className="process-header-left">

    <div className="process-heading-row">

      <div>
        <span className="process-eyebrow">
          HOW WE WORK
        </span>

        <h2>
          From idea
          <span> to impact.</span>
        </h2>
      </div>

      {/* Mascot */}
      <div className="process-mascot">
        <img
          src="/images/mascot-laptop.png"
          alt="Rubium AI mascot working"
        />
      </div>

    </div>

  </div>


  {/* RIGHT: Keep this exactly as it is */}
  <div className="process-header-right">

    <span className="process-number">
      03
    </span>

    <p>
      A structured approach that transforms complex
      ideas into intelligent, scalable, and
      production-ready digital products.
    </p>

  </div>

</motion.div>

        {/* Process Timeline */}
        <div className="process-timeline">

          <div className="process-line"></div>

        

          {/* Process Steps */}
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="process-step"
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="process-step-top">

                  <span className="process-step-number">
                    {step.number}
                  </span>

                  <div className="process-step-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                    />
                  </div>

                </div>

                <div className="process-step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="process-arrow">
                    <ArrowRight size={18} />
                  </div>
                )}
              </motion.div>
            );
          })}

        </div>

        {/* Bottom statement */}
        <motion.div
          className="process-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>
            ONE TEAM. ONE PROCESS. ONE CLEAR OUTCOME.
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Technology;