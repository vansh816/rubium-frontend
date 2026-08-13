import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import BrandStatement from "../sections/BrandStatement";
import Features from "../sections/Features";
import Industries from "../sections/Industries";
import Process from "../sections/Process";
import Technology from "../sections/Technology";
import CaseStudies from "../sections/CaseStudies";
import Testimonials from "../sections/Testimonials";
import GetDemo from "../pages/GetDemo";
import FAQ from "../sections/FAQ";
import About from "../sections/About";
import WhatsAppButton from "../components/WhatsAppButton";

import "../styles/home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* HOME */}
        <section id="home">
          <Hero />
        </section>

        {/* WHAT WE BUILD / SERVICES */}
        <section id="services">
          <Features />
        </section>

        {/* BRAND STATEMENT */}
        <BrandStatement />

        {/* INDUSTRIES */}
        <section id="industries">
          <Industries />
        </section>

        {/* PROCESS */}
        <section id="process">
          <Process />
        </section>

        {/* TECHNOLOGY */}
        <section id="technology">
          <Technology />
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies">
          <CaseStudies />
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* FAQ */}
        <section id="FAQ">
          <FAQ />
        </section>

        {/* About */}
        <section id="About">
          <About />
        </section>

        {/* CONTACT / GET DEMO */}
        <section id="contact">
          <GetDemo />
        </section>

      <WhatsAppButton />
      
      </main>

      <Footer />
    </>
  );
}

export default Home;