import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import About from "@/components/site/About";
import PageHeader from "@/components/site/PageHeader";
import LeadForm from "@/components/site/LeadForm";

const Nosotros = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        eyebrow="Quiénes somos"
        title="25 años construyendo confianza en el Caribe mexicano."
        description="Una firma inmobiliaria especializada en propiedades de alto valor, con un equipo multidisciplinario al servicio de inversionistas nacionales e internacionales."
      />
      <About />
      <LeadForm />
      <Footer />
    </main>
  );
};

export default Nosotros;