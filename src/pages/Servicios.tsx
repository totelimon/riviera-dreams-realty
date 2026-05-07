import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import LeadForm from "@/components/site/LeadForm";
import { Compass, KeyRound, Leaf, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Búsqueda exclusiva",
    text: "Acceso curado a propiedades dentro y fuera del mercado, alineadas a tu visión de inversión y estilo de vida.",
    points: ["Catálogo off-market", "Visitas privadas", "Análisis comparativo de mercado"],
  },
  {
    icon: ShieldCheck,
    title: "Asesoría legal",
    text: "Acompañamiento integral en fideicomisos, debida diligencia y cierre con notario.",
    points: ["Fideicomiso bancario", "Revisión de títulos", "Estructura fiscal"],
  },
  {
    icon: KeyRound,
    title: "Gestión de propiedad",
    text: "Administración, mantenimiento y rentas vacacionales premium para maximizar tu retorno.",
    points: ["Property management", "Renta vacacional", "Reportes mensuales"],
  },
  {
    icon: Leaf,
    title: "Diseño & arquitectura",
    text: "Red de arquitectos especializados en chukum y diseñadores para crear tu refugio ideal.",
    points: ["Diseño de interiores", "Remodelación", "Construcción llave en mano"],
  },
];

const Servicios = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-chukum/30">
        <div className="container max-w-3xl text-center">
          <p className="text-jungle text-xs tracking-luxe uppercase mb-5">Nuestros servicios</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.05] text-balance">
            Una asesoría integral, de la búsqueda a la entrega de llaves.
          </h1>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            Acompañamos cada etapa del proceso inmobiliario con un estándar de
            servicio sin compromisos.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`grid md:grid-cols-12 gap-8 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-5">
                <div className="aspect-[4/5] bg-gradient-jungle flex items-center justify-center">
                  <s.icon className="h-20 w-20 text-background/90" strokeWidth={1} />
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="text-gold text-[11px] tracking-luxe uppercase mb-3">
                  0{i + 1} · Servicio
                </p>
                <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-5">
                  {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.text}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-2 h-px w-6 bg-jungle shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <LeadForm />
      <Footer />
    </main>
  );
};

export default Servicios;
