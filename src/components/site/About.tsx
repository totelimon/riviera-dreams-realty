import { Instagram } from "lucide-react";

const stats = [
  { value: "25+", label: "Años en la Riviera Maya" },
  { value: "650", label: "Propiedades vendidas" },
  { value: "USD 1.2B", label: "En transacciones" },
  { value: "98%", label: "Clientes recomendados" },
];

const team = [
  {
    name: "Marta Marcilla Alonso",
    role: "Líder empresarial",
    image:
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/503674789_18508109932027624_212475279525263594_n.jpg?v=1777234430",
    instagram: "marta.marcilla",
  },
  {
    name: "Alejandro Jacome Rodriguez",
    role: "Broker representante",
    image:
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/WhatsApp_Image_2026-04-24_at_10.49.20_AM.jpg?v=1777234573",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="text-jungle text-xs tracking-luxe uppercase mb-5">Quiénes somos</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance">
            Más de 25 años liderando el mercado inmobiliario de alta gama en el Caribe mexicano.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground text-base leading-relaxed">
          <p>
            <span className="text-foreground">Selva·Mar</span> es una firma
            inmobiliaria con más de 25 años de trayectoria asesorando a
            inversionistas, family offices y compradores internacionales en la
            adquisición de residencias y desarrollos de alto valor en la
            Riviera Maya.
          </p>
          <p>
            Nuestro equipo combina conocimiento profundo del mercado local,
            rigor jurídico y una red consolidada de desarrolladores,
            arquitectos y notarios. Cada operación se ejecuta bajo los más
            altos estándares de transparencia, confidencialidad y desempeño.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border mt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl md:text-4xl text-jungle">{s.value}</div>
                <div className="mt-2 text-[11px] tracking-luxe uppercase text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-24 md:mt-32">
        <div className="max-w-2xl mb-12">
          <p className="text-jungle text-xs tracking-luxe uppercase mb-5">Nuestro equipo</p>
          <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-tight text-balance">
            Liderazgo con visión y experiencia local.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {team.map((member) => (
            <article
              key={member.name}
              className="group bg-card border border-border overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={`Retrato de ${member.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-jungle text-[11px] tracking-luxe uppercase mb-2">
                  {member.role}
                </p>
                <h4 className="font-serif text-2xl md:text-3xl text-foreground">
                  {member.name}
                </h4>
                {member.instagram && (
                  <a
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-jungle transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>@{member.instagram}</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
