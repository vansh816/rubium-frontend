import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import "../styles/contact.css";

function GetDemo() {
  const services = [
    "AI Engineering",
    "AI Agents",
    "Enterprise Software",
    "SaaS Development",
    "Mobile Apps",
    "Web Development",
    "Cloud Solutions",
    "DevOps",
    "Automation",
    "UI/UX Design",
    "Data Engineering",
  ];

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    projectOverview: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Keep only digits and last 10 digits
      const sanitizedPhone = formData.phone
        .replace(/\D/g, "")
        .slice(-10);

      const dataToSubmit = {
        ...formData,
        phone: sanitizedPhone,
        service: formData.service || "N/A",
        company: formData.company || "N/A",
      };

      const response = await axios.post(
        "https://rubium-backened.onrender.com/submit",
        dataToSubmit
      );

      console.log("Success:", response.data);

      alert("Thank you! Your call is booked.");

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        service: "",
        projectOverview: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      alert("Failed to book a call. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">

      {/* HEADER */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="contact-eyebrow">
          LET'S BUILD WHAT'S NEXT
        </span>

        <h2>
          Book a <span>Call.</span>
        </h2>

        <p>
          Tell us about your idea, product, or business challenge.
          Let's explore how Rubium AI can turn your vision into
          something real.
        </p>
      </motion.div>


      {/* CONTACT GRID */}
      <div className="contact-grid">

        {/* LEFT COLUMN */}
        <div className="contact-left">

          {/* COMPANY CARD */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="contact-brand">
              <img
                src="/images/rubium-logo.png"
                alt="Rubium AI"
              />

              <div>
                <h3>RUBIUM AI</h3>
                <p>Engineering What's Next.</p>
              </div>
            </div>


            <div className="contact-details">

              <div className="contact-detail">
                <Mail size={20} />

                <div>
                  <span>EMAIL</span>
                  <strong>hello.rubiumai@gmail.com</strong>
                </div>
              </div>


              <div className="contact-detail">
                <MapPin size={20} />

                <div>
                  <span>LOCATION</span>
                  <strong>Gurugram, Haryana, India</strong>
                </div>
              </div>


              <div className="contact-detail">
                <Clock size={20} />

                <div>
                  <span>RESPONSE</span>
                  <strong>&lt; 4 business hours</strong>
                </div>
              </div>

            </div>
          </motion.div>


          {/* TIMELINE CARD */}
          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >

            <span className="card-label">
              TYPICAL ENGAGEMENT TIMELINE
            </span>

            <div className="timeline">

              <div className="timeline-item">
                <span>1</span>
                <p>Day 1: Discovery Call</p>
              </div>

              <div className="timeline-item">
                <span>2</span>
                <p>Day 3: Technical Proposal</p>
              </div>

              <div className="timeline-item">
                <span>3</span>
                <p>Day 7: Contract &amp; Kickoff</p>
              </div>

              <div className="timeline-item">
                <span>4</span>
                <p>Week 2: Sprint 1 Begins</p>
              </div>

            </div>

          </motion.div>

        </div>


        {/* RIGHT FORM */}
        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <form onSubmit={handleSubmit}>

            {/* NAME + EMAIL */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="fullName">
                  FULL NAME <span>*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Jane Smith"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="email">
                  WORK EMAIL <span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@enterprise.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            {/* PHONE + COMPANY */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="phone">
                  PHONE NUMBER <span>*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="company">
                  COMPANY / ORGANIZATION
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

            </div>


            {/* SERVICE */}
            <div className="form-group">
              <label htmlFor="service">
                SERVICE OF INTEREST
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a service...
                </option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>


            {/* MESSAGE */}
            <div className="form-group">
              <label htmlFor="projectOverview">
                PROJECT OVERVIEW <span>*</span>
              </label>

              <textarea
                id="projectOverview"
                name="projectOverview"
                rows="6"
                placeholder="Tell us about your project, goals, and timeline..."
                value={formData.projectOverview}
                onChange={handleChange}
                required
              />
            </div>


            {/* SUBMIT */}
            <button
              type="submit"
              className="contact-submit"
            >
              <span>SEND MESSAGE &amp; BOOK CALL</span>
              <ArrowUpRight size={20} />
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default GetDemo;