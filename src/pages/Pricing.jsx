import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Pricing() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <section className="inner-hero">
          <div className="container">
            <span className="section-label">Pricing</span>

            <h1>
              Solutions designed
              <span> around your needs.</span>
            </h1>

            <p>
              Every organization has different goals. Talk to our team to
              discover the right technology and engagement model for your
              project.
            </p>

            <a href="/contact" className="inner-page-button">
              Talk to our team →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Pricing;