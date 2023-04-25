import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImg from "../assests/night.jpg";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUS";
import Review from "../component/Review";

function Reviews() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Review" btnClass="hide" />
      <Review />
      <Footer />
    </>
  );
}

export default Reviews;