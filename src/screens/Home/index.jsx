import About from "../../components/About";
import Adress from "../../components/Adress";
import Areas from "../../components/Areas";
import Contact from "../../components/Contact";
import Container from "../../components/Container";
import Experiences from "../../components/Experiences";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Experiences />
      {/* <Areas/> */}
      <About />
      <Adress />
      <Contact />
      <Footer />
    </Container>
  );
}
