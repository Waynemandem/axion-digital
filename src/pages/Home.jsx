import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Services from "../components/sections/Services";
import Calculator from "../components/sections/Calculator";
import Guarantee from "../components/sections/Guarantee";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact";
import Privacy from "../components/sections/Privacy";
import CookieBanner from "../components/ui/CookieBanner";
import Projects from "../components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services /> 
        <Calculator />
        <Guarantee />
        <Projects />
        <Contact />
        <Privacy />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}