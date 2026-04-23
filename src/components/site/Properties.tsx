import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

const properties = [
  {
    img: p1,
    name: "Casa Turquesa",
    location: "Playacar Fase II",
    price: "USD 2,450,000",
    specs: "4 Rec · 4.5 Baños · 520 m²",
  },
  {
    img: p2,
    name: "Villa Sak'be",
    location: "Aldea Zamá, Tulum",
    price: "USD 1,890,000",
    specs: "3 Rec · 3 Baños · 380 m²",
  },
  {
    img: p3,
    name: "Residencia Kaan",
    location: "Mayakoba",
    price: "USD 3,150,000",
    specs: "5 Rec · 5 Baños · 640 m²",
  },
];

const Properties = () => {
  return (
    <section id="propiedades" className="py-24 md:py-32 bg-gradient-chukum">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-jungle text-xs tracking-luxe uppercase mb-4">Selección curada</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground max-w-2xl text-balance">
              Propiedades destacadas
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Cada residencia es elegida por su arquitectura, ubicación
            privilegiada y diálogo con la naturaleza del Caribe mexicano.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {properties.map((p) => (
            <article
              key={p.name}
              className="group bg-card shadow-card overflow-hidden transition-elegant hover:shadow-elegant"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-elegant group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] tracking-luxe uppercase px-3 py-1.5 text-foreground">
                  En venta
                </span>
              </div>
              <div className="p-7">
                <p className="text-jungle-soft text-[11px] tracking-luxe uppercase mb-2">
                  {p.location}
                </p>
                <h3 className="font-serif text-2xl text-foreground mb-3">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-5">{p.specs}</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="font-serif text-lg text-foreground">{p.price}</span>
                  <a href="#contacto" className="text-xs tracking-luxe uppercase text-jungle hover:text-gold transition-colors">
                    Detalles →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
