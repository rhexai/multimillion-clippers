import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import Steps from "../components/Steps";
import Benefits from "../components/Benefits";
import Comparison from "../components/Comparison";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { getCaseStudies } from "@/app/actions/case-study";

export default async function Home() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureGrid caseStudies={caseStudies} />
      <Steps />
      <Benefits />
      <Comparison />
      <FAQ />
      <Footer />
    </div>
  );
}
