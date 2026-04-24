import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { properties, type Property } from "@/data/properties";
import useEmblaCarousel from "embla-carousel-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

type PropertiesProps = {
  showAll?: boolean;
  hideHeading?: boolean;
};

const Properties = ({ showAll = false, hideHeading = false }: PropertiesProps) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Property | null>(null);

  const openProperty = (p: Property) => {
    setSelected(p);
  };

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
            <PropertyCard key={p.id} property={p} onOpen={openProperty} />
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
          {selected && (() => {
            const imgs = selected.images.length > 0 ? selected.images : [selected.img];
            const mainImg = imgs[modalIndex] ?? imgs[0];
            const hasMultiple = imgs.length > 1;
            const prevModal = () => setModalIndex((modalIndex - 1 + imgs.length) % imgs.length);
            const nextModal = () => setModalIndex((modalIndex + 1) % imgs.length);
            return (
              <div className="flex flex-col">
                <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={mainImg}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] tracking-luxe uppercase px-3 py-1.5 text-foreground z-10">
                    En venta
                  </span>
                  {hasMultiple && (
                    <>
                      <button
                        type="button"
                        onClick={prevModal}
                        aria-label="Imagen anterior"
                        className="absolute left-0 top-0 h-full w-1/5 flex items-center justify-start pl-4 z-10 group/arrow"
                      >
                        <span className="bg-background/80 backdrop-blur text-foreground p-2 rounded-full hover:bg-background transition-elegant">
                          <ChevronLeft className="h-5 w-5" />
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={nextModal}
                        aria-label="Imagen siguiente"
                        className="absolute right-0 top-0 h-full w-1/5 flex items-center justify-end pr-4 z-10 group/arrow"
                      >
                        <span className="bg-background/80 backdrop-blur text-foreground p-2 rounded-full hover:bg-background transition-elegant">
                          <ChevronRight className="h-5 w-5" />
                        </span>
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {imgs.map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full transition-elegant ${
                              i === modalIndex ? "bg-background" : "bg-background/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {hasMultiple && (
                  <div className="px-6 pt-4 pb-2 border-b border-border">
                    <div className="flex gap-2 overflow-x-auto scrollbar-thin">
                      {imgs.map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setModalIndex(i)}
                          className={`flex-shrink-0 w-20 h-20 overflow-hidden transition-elegant ${
                            i === modalIndex
                              ? "ring-2 ring-jungle opacity-100"
                              : "opacity-60 hover:opacity-100"
                          }`}
                          aria-label={`Ver imagen ${i + 1}`}
                        >
                          <img src={img} alt={`${selected.title} ${i + 1}`} className="h-full w-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

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

                  <button
                    onClick={scrollToContact}
                    className="mt-8 self-start bg-jungle text-primary-foreground text-xs tracking-luxe uppercase px-8 py-4 hover:bg-gold transition-elegant"
                  >
                    Solicitar información
                  </button>
                </div>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Properties;
