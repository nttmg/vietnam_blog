import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImg from "../assests/night.jpg";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUS";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
