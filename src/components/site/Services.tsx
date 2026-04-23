import { Compass, KeyRound, Leaf, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Búsqueda exclusiva",
    text: "Acceso curado a propiedades dentro y fuera del mercado, alineadas a tu visión.",
  },
  {
    icon: ShieldCheck,
    title: "Asesoría legal",
    text: "Acompañamiento integral en fideicomisos, trámites y debida diligencia.",
  },
  {
    icon: KeyRound,
    title: "Gestión de propiedad",
    text: "Administración, mantenimiento y rentas vacacionales premium.",
  },
  {
    icon: Leaf,
    title: "Diseño & arquitectura",
    text: "Red de arquitectos chukum y diseñadores para crear tu refugio ideal.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-chukum/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-jungle text-xs tracking-luxe uppercase mb-5">Nuestros servicios</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Más allá de una transacción inmobiliaria.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background p-8 transition-elegant hover:shadow-card border border-border/60"
            >
              <s.icon className="h-7 w-7 text-jungle mb-6" strokeWidth={1.25} />
              <h3 className="font-serif text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
