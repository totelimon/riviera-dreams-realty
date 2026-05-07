import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Properties from "@/components/site/Properties";
import LeadForm from "@/components/site/LeadForm";

const Propiedades = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-jungle text-background">
        <div className="container">
          <p className="text-gold text-xs tracking-luxe uppercase mb-5">Catálogo</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance max-w-3xl">
            Desarrollos exclusivos en la Riviera Maya.
          </h1>
          <p className="mt-6 text-background/80 max-w-2xl leading-relaxed">
            Cuatro destinos curados. Selecciona un desarrollo y descubre las
            unidades disponibles antes de que se agoten.
          </p>
        </div>
      </section>

      <Properties hideHeading />
      <LeadForm />
      <Footer />
    </main>
  );
};

export default Propiedades;
