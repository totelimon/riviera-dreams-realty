import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Properties from "@/components/site/Properties";
import LeadForm from "@/components/site/LeadForm";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Footer from "@/components/site/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Properties />
      <LeadForm />
      <About />
      <Services />
      <Footer />
    </main>
  );
};

export default Index;
