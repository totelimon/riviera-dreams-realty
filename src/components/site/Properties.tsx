import { useState } from "react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";

type PropertiesProps = {
  showAll?: boolean;
  hideHeading?: boolean;
};

const Properties = ({ showAll = false, hideHeading = false }: PropertiesProps) => {
  const [expanded, setExpanded] = useState(false);

  const visible = showAll
    ? properties
    : expanded
    ? properties.slice(0, 6)
    : properties.slice(0, 3);

  return (
    <section id="propiedades" className="py-24 md:py-32 bg-gradient-chukum">
      <div className="container">
        {!hideHeading && (
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
        )}

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {visible.map((p) => (
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
                  <a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs tracking-luxe uppercase text-jungle hover:text-gold transition-colors"
                  >
                    Detalles →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll && (
          <div className="mt-14 flex justify-center">
            {!expanded ? (
              <button
                onClick={() => setExpanded(true)}
                className="border border-jungle text-jungle text-xs tracking-luxe uppercase px-10 py-4 hover:bg-jungle hover:text-primary-foreground transition-elegant"
              >
                Más
              </button>
            ) : (
              <Link
                to="/propiedades"
                className="bg-jungle text-primary-foreground text-xs tracking-luxe uppercase px-10 py-4 hover:bg-gold transition-elegant"
              >
                Ver más propiedades
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
