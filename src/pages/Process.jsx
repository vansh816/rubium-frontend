import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Process() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <section className="inner-hero">
          <div className="container">
            <span className="section-label">Our Process</span>

            <h1>
              From idea
              <span> to intelligent product.</span>
            </h1>

            <p>
              A structured approach that turns business challenges into
              scalable, intelligent, and reliable digital solutions.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Process;