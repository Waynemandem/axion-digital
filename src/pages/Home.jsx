import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Services from "../components/sections/Services";
import Guarantee from "../components/sections/Guarantee";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact";
import CookieBanner from "../components/ui/CookieBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Guarantee />
        <Work />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}