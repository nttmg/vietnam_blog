import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Destination from "../component/Destination";
import Trip from "../component/Trip";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1601285889979-c517297c5604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        title="Discover The Beauty of Vietnam"
        text="Where Culture and Nature Unite."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
