import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Technology() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <section className="inner-hero">
          <div className="container">
            <span className="section-label">Technology</span>

            <h1>
              Technology that
              <span> moves businesses forward.</span>
            </h1>

            <p>
              We combine modern software engineering, artificial intelligence,
              cloud technologies, and automation to build future-ready
              solutions.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Technology;