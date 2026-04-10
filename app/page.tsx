import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import Steps from "../components/Steps";
import Benefits from "../components/Benefits";
import Comparison from "../components/Comparison";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Steps />
      <Benefits />
      <Comparison />
      <FAQ />
      <Footer />
    </div>
  );
}
