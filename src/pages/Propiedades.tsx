import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Properties from "@/components/site/Properties";
import PageHeader from "@/components/site/PageHeader";
import LeadForm from "@/components/site/LeadForm";

const Propiedades = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        eyebrow="Catálogo completo"
        title="Propiedades de alta gama en la Riviera Maya."
        description="Una selección curada de residencias, villas y penthouses en Playa del Carmen, Tulum, Mayakoba y Akumal."
      />
      <Properties hideHeading />
      <LeadForm />
      <Footer />
    </main>
  );
};

export default Propiedades;