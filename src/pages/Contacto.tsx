import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import LeadForm from "@/components/site/LeadForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contacto = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-jungle text-background">
        <div className="container max-w-3xl">
          <p className="text-gold text-xs tracking-luxe uppercase mb-5">Contacto</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            Hablemos de tu próximo refugio en el Caribe.
          </h1>
          <p className="mt-6 text-background/80 text-base md:text-lg leading-relaxed">
            Atendemos a nuestros clientes con discreción y dedicación. Escríbenos
            y un asesor se pondrá en contacto en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-chukum/30">
        <div className="container grid md:grid-cols-4 gap-8">
          {[
            { icon: Phone, title: "Teléfono", text: "+52 984 123 4567" },
            { icon: Mail, title: "Correo", text: "hola@selvamar.mx" },
            { icon: MapPin, title: "Oficina", text: "Quinta Avenida 320, Playa del Carmen" },
            { icon: Clock, title: "Horario", text: "Lun · Sáb · 9:00 a 19:00" },
          ].map((c) => (
            <div key={c.title} className="border-t-2 border-jungle pt-5">
              <c.icon className="h-5 w-5 text-jungle mb-3" strokeWidth={1.5} />
              <p className="text-[11px] tracking-luxe uppercase text-jungle mb-2">{c.title}</p>
              <p className="text-sm text-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <LeadForm />
      <Footer />
    </main>
  );
};

export default Contacto;