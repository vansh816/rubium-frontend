import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Rubium AI helped us turn a complex idea into a clear and scalable digital product. Their approach was structured, practical, and focused on business outcomes.",
    name: "Raghav Sharma",
    role: "Founder & CEO",
    company: "Technology Company",
  },
  {
    quote:
      "The team understood both the technical requirements and the bigger business picture. The result was a product experience that felt modern, reliable, and ready to scale.",
    name: "Rishav Singh",
    role: "Product Head",
    company: "Enterprise Business",
  },
  {
    quote:
      "From architecture to user experience, Rubium AI brought the right engineering mindset to the project. Communication and execution remained strong throughout.",
    name: "Govind Shrivastav",
    role: "Co-Founder",
    company: "Startup",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="testimonials-eyebrow">
              CLIENT PERSPECTIVE
            </span>

            <h2>
              Built together.
              <span> Trusted by design.</span>
            </h2>
          </div>

          <p>
            Great products come from strong collaboration.
            We work closely with our clients to turn ambitious
            ideas into meaningful digital experiences.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className={`testimonial-card ${
                index === 1 ? "featured" : ""
              }`}
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="testimonial-top">
                <Quote
                  size={25}
                  strokeWidth={1.5}
                />

                <span>
                  0{index + 1}
                </span>
              </div>

              <p className="testimonial-quote">
                "{testimonial.quote}"
              </p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.role}
                  </span>

                  <small>
                    {testimonial.company}
                  </small>
                </div>
              </div>

              <div className="testimonial-arrow">
                <ArrowUpRight size={18} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="testimonials-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>
            YOUR VISION. OUR ENGINEERING. ONE SHARED OUTCOME.
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;