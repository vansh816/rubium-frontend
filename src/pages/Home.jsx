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

import "../styles/home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HOME */}
        <Hero />

        {/* WHAT WE BUILD / SERVICES */}
        <Features />

        {/* BRAND STATEMENT */}
        <BrandStatement />

        {/* INDUSTRIES */}
        <Industries />

        {/* PROCESS */}
        <Process />

        {/* TECHNOLOGY */}
        <Technology />

        {/* CASE STUDIES */}
        <CaseStudies />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* ABOUT */}
        <About />

        {/* CONTACT / GET DEMO */}
        <GetDemo />
      </main>

      <Footer />
    </>
  );
}

export default Home;