import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Services from "@/components/site/Services";
import PageHeader from "@/components/site/PageHeader";
import LeadForm from "@/components/site/LeadForm";

const Servicios = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        eyebrow="Nuestros servicios"
        title="Una asesoría integral, de la búsqueda a la entrega de llaves."
        description="Acompañamos cada etapa del proceso inmobiliario con un estándar de servicio sin compromisos."
      />
      <Services />
      <LeadForm />
      <Footer />
    </main>
  );
};

export default Servicios;