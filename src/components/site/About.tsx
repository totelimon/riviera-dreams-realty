const stats = [
  { value: "25+", label: "Años en la Riviera Maya" },
  { value: "650", label: "Propiedades vendidas" },
  { value: "USD 1.2B", label: "En transacciones" },
  { value: "98%", label: "Clientes recomendados" },
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
    </section>
  );
};

export default About;
