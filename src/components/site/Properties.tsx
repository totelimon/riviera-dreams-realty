import { useState } from "react";
import { Link } from "react-router-dom";
import { properties, type Property } from "@/data/properties";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PropertiesProps = {
  showAll?: boolean;
  hideHeading?: boolean;
};

const Properties = ({ showAll = false, hideHeading = false }: PropertiesProps) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Property | null>(null);

  const visible = showAll
    ? properties
    : expanded
    ? properties.slice(0, 6)
    : properties.slice(0, 3);

  const scrollToContact = () => {
    setSelected(null);
    setTimeout(() => {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
              key={p.id}
              onClick={() => setSelected(p)}
              className="group bg-card shadow-card overflow-hidden transition-elegant hover:shadow-elegant cursor-pointer text-left"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={p.images[0] ?? p.img}
                  alt={p.title}
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
                <h3 className="font-serif text-2xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{p.specs}</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="font-serif text-lg text-foreground">{p.price}</span>
                  <span className="text-xs tracking-luxe uppercase text-jungle group-hover:text-gold transition-colors">
                    Detalles →
                  </span>
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

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-card">
          {selected && (
            <>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[500px] overflow-hidden">
                  <img
                    src={selected.images[0]}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] tracking-luxe uppercase px-3 py-1.5 text-foreground">
                    En venta
                  </span>
                </div>
                <div className="p-8 md:p-10 flex flex-col">
                  <DialogHeader className="text-left space-y-2">
                    <p className="text-jungle-soft text-[11px] tracking-luxe uppercase">
                      {selected.location}
                    </p>
                    <DialogTitle className="font-serif text-3xl md:text-4xl text-foreground font-normal tracking-tight">
                      {selected.title}
                    </DialogTitle>
                    <p className="font-serif text-2xl text-jungle pt-1">{selected.price}</p>
                  </DialogHeader>

                  <DialogDescription className="text-muted-foreground text-sm leading-relaxed mt-5">
                    {selected.description}
                  </DialogDescription>

                  <div className="grid grid-cols-3 gap-4 mt-6 py-5 border-y border-border">
                    <div>
                      <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">Recámaras</p>
                      <p className="font-serif text-xl text-foreground">{selected.beds}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">Baños</p>
                      <p className="font-serif text-xl text-foreground">{selected.baths}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">Superficie</p>
                      <p className="font-serif text-xl text-foreground">{selected.sqft} m²</p>
                    </div>
                  </div>

                  {selected.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-2 mt-6">
                      {selected.images.slice(1, 4).map((img, i) => (
                        <div key={i} className="aspect-square overflow-hidden">
                          <img src={img} alt={`${selected.title} ${i + 2}`} className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={scrollToContact}
                    className="mt-auto pt-8 self-start bg-jungle text-primary-foreground text-xs tracking-luxe uppercase px-8 py-4 hover:bg-gold transition-elegant"
                  >
                    Solicitar información
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Properties;
