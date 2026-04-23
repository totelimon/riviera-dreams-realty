const stats = [
  { value: "12+", label: "Años en la Riviera Maya" },
  { value: "180", label: "Propiedades vendidas" },
  { value: "USD 420M", label: "En transacciones" },
  { value: "98%", label: "Clientes recomendados" },
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="text-jungle text-xs tracking-luxe uppercase mb-5">Quiénes somos</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance">
            Una agencia boutique con raíces profundas en el Caribe.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground text-base leading-relaxed">
          <p>
            En <span className="text-foreground">Selva·Mar</span> creemos que una
            propiedad de lujo no se mide solo en metros cuadrados, sino en la
            forma en que conecta a quienes la habitan con la naturaleza, la
            cultura maya y la luz inconfundible del Caribe.
          </p>
          <p>
            Acompañamos a inversionistas y familias en la búsqueda, compra y
            gestión de residencias de alta gama en Playa del Carmen, Tulum y
            Mayakoba. Discreción, conocimiento local y un estándar de servicio
            sin compromisos.
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
