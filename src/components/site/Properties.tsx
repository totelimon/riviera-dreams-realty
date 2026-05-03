import { useState, useEffect, useCallback } from "react";
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

type ProjectInfo = {
  key: string;
  name: string;
  region: string;
  available: number;
  total: number;
  image: string;
};

const PROJECTS: ProjectInfo[] = [
  {
    key: "Distrito Playa",
    name: "Distrito Playa",
    region: "Playa del Carmen",
    available: 6,
    total: 36,
    image:
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121712.png?v=1777832947",
  },
  {
    key: "Distrito Norte",
    name: "Distrito Norte",
    region: "Chetumal",
    available: 17,
    total: 57,
    image:
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121252.png?v=1777832948",
  },
  {
    key: "Musa del Puerto",
    name: "Musa del Puerto",
    region: "Puerto Morelos",
    available: 51,
    total: 121,
    image:
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121853.png?v=1777832948",
  },
  {
    key: "Distrito Arte",
    name: "Distrito Arte",
    region: "Tulum · Aldea Zamná",
    available: 73,
    total: 166,
    image:
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121950.png?v=1777832948",
  },
];

type PropertiesProps = {
  hideHeading?: boolean;
};

const Properties = ({ hideHeading = false }: PropertiesProps) => {
  const [openProject, setOpenProject] = useState<ProjectInfo | null>(null);
  const [selected, setSelected] = useState<Property | null>(null);

  const projectProps = openProject
    ? properties.filter((p) => p.project === openProject.key)
    : [];

  const scrollToContact = () => {
    setSelected(null);
    setOpenProject(null);
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
              <p className="text-jungle text-xs tracking-luxe uppercase mb-4">
                Selección curada
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground max-w-2xl text-balance">
                Nuestros desarrollos
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Cuatro destinos exclusivos en el Caribe mexicano. Explora cada
              edificio y descubre las unidades disponibles antes de que se agoten.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-6 md:gap-8">
          {PROJECTS.map((proj) => (
            <ProjectBanner
              key={proj.key}
              project={proj}
              onOpen={() => setOpenProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Project units dialog */}
      <Dialog
        open={!!openProject && !selected}
        onOpenChange={(open) => !open && setOpenProject(null)}
      >
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0 gap-0 bg-card [&>button]:hidden">
          {openProject && (
            <div className="flex flex-col relative">
              <DialogClose
                aria-label="Cerrar"
                className="absolute right-3 top-3 z-30 bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 transition-elegant focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <X className="h-7 w-7" strokeWidth={2.5} />
              </DialogClose>

              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={openProject.image}
                  alt={openProject.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                  <p className="text-white/80 text-[11px] tracking-luxe uppercase mb-3">
                    {openProject.region}
                  </p>
                  <h2 className="font-serif text-3xl md:text-5xl text-white">
                    {openProject.name}
                  </h2>
                  <p className="mt-3 text-white/90 text-sm tracking-wide">
                    {projectProps.length > 0
                      ? `${projectProps.length} unidades disponibles`
                      : "Próximamente disponible"}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-10">
                {projectProps.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="text-muted-foreground text-sm">
                      Estamos preparando este desarrollo. Contáctanos para recibir
                      información preferencial.
                    </p>
                    <button
                      onClick={scrollToContact}
                      className="mt-6 bg-jungle text-primary-foreground text-xs tracking-luxe uppercase px-8 py-4 hover:bg-gold transition-elegant"
                    >
                      Solicitar información
                    </button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectProps.map((p) => (
                      <PropertyCard
                        key={p.id}
                        property={p}
                        onOpen={setSelected}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Single property dialog */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto p-0 gap-0 bg-card [&>button]:hidden">
          {selected &&
            (() => {
              const imgs =
                selected.images.length > 0 ? selected.images : [selected.img];
              return (
                <div className="flex flex-col relative">
                  <DialogClose
                    aria-label="Cerrar"
                    className="absolute right-3 top-3 z-30 bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 transition-elegant focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <X className="h-7 w-7" strokeWidth={2.5} />
                  </DialogClose>

                  <ModalGallery images={imgs} title={selected.title} />

                  <div className="p-8 md:p-10 flex flex-col">
                    <DialogHeader className="text-left space-y-2">
                      <p className="text-jungle-soft text-[11px] tracking-luxe uppercase">
                        {selected.location}
                      </p>
                      <DialogTitle className="font-serif text-3xl md:text-4xl text-foreground font-normal tracking-tight">
                        {selected.title}
                      </DialogTitle>
                      <p className="font-serif text-2xl text-jungle pt-1">
                        {selected.price}
                      </p>
                    </DialogHeader>

                    <DialogDescription className="text-muted-foreground text-sm leading-relaxed mt-5">
                      {selected.description}
                    </DialogDescription>

                    <div className="grid grid-cols-3 gap-4 mt-6 py-5 border-y border-border">
                      <div>
                        <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">
                          Recámaras
                        </p>
                        <p className="font-serif text-xl text-foreground">
                          {selected.beds}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">
                          Baños
                        </p>
                        <p className="font-serif text-xl text-foreground">
                          {selected.baths}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">
                          Superficie
                        </p>
                        <p className="font-serif text-xl text-foreground">
                          {selected.sqft} m²
                        </p>
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

/* ----------------------------- Subcomponents ----------------------------- */

type ProjectBannerProps = {
  project: ProjectInfo;
  onOpen: () => void;
};

const ProjectBanner = ({ project, onOpen }: ProjectBannerProps) => {
  return (
    <article className="group relative overflow-hidden shadow-card hover:shadow-elegant transition-elegant">
      <div className="relative aspect-[16/10] md:aspect-[21/9]">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-elegant md:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/80 text-[11px] md:text-xs tracking-luxe uppercase mb-4">
            {project.region}
          </p>
          <h3 className="font-serif text-4xl md:text-6xl text-white leading-[1.05] text-balance">
            {project.name}
          </h3>
          <p className="mt-5 text-white/95 text-sm md:text-base tracking-wide font-light">
            <span className="text-gold font-medium">
              ¡Quedan {project.available}
            </span>{" "}
            de {project.total} unidades disponibles!
          </p>
          <button
            onClick={onOpen}
            className="mt-8 bg-white/95 text-foreground text-[11px] md:text-xs tracking-luxe uppercase px-8 md:px-10 py-3.5 md:py-4 hover:bg-gold hover:text-primary-foreground transition-elegant"
          >
            Ver propiedades
          </button>
        </div>
      </div>
    </article>
  );
};

type PropertyCardProps = {
  property: Property;
  onOpen: (p: Property) => void;
};

const PropertyCard = ({ property, onOpen }: PropertyCardProps) => {
  const imgs = property.images.length > 0 ? property.images : [property.img];
  const hasMultiple = imgs.length > 1;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIdx(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      emblaApi?.scrollPrev();
    },
    [emblaApi],
  );
  const scrollNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      emblaApi?.scrollNext();
    },
    [emblaApi],
  );

  return (
    <article className="group bg-card shadow-card overflow-hidden transition-elegant hover:shadow-elegant text-left">
      <div className="relative overflow-hidden aspect-[4/5]">
        <div ref={emblaRef} className="overflow-hidden h-full">
          <div className="flex h-full touch-pan-y">
            {imgs.map((src, i) => (
              <div
                key={i}
                className="relative flex-[0_0_100%] min-w-0 h-full overflow-hidden cursor-pointer"
                onClick={() => onOpen(property)}
              >
                <img
                  src={src}
                  alt={`${property.title} ${i + 1}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-elegant md:group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] tracking-luxe uppercase px-3 py-1.5 text-foreground z-10 pointer-events-none">
          En venta
        </span>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Imagen anterior"
              className="absolute left-0 top-0 h-full w-1/5 flex items-center justify-start pl-3 z-10"
            >
              <span className="bg-background/80 backdrop-blur text-foreground p-1.5 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-elegant">
                <ChevronLeft className="h-4 w-4" />
              </span>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Imagen siguiente"
              className="absolute right-0 top-0 h-full w-1/5 flex items-center justify-end pr-3 z-10"
            >
              <span className="bg-background/80 backdrop-blur text-foreground p-1.5 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-elegant">
                <ChevronRight className="h-4 w-4" />
              </span>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
              {imgs.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-elegant ${
                    i === selectedIdx ? "bg-background" : "bg-background/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-7 cursor-pointer" onClick={() => onOpen(property)}>
        <p className="text-jungle-soft text-[11px] tracking-luxe uppercase mb-2">
          {property.location}
        </p>
        <h3 className="font-serif text-2xl text-foreground mb-3">
          {property.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-5">{property.specs}</p>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="font-serif text-lg text-foreground">
            {property.price}
          </span>
          <span className="text-xs tracking-luxe uppercase text-jungle group-hover:text-gold transition-colors">
            Detalles →
          </span>
        </div>
      </div>
    </article>
  );
};

type ModalGalleryProps = {
  images: string[];
  title: string;
};

const ModalGallery = ({ images, title }: ModalGalleryProps) => {
  const hasMultiple = images.length > 1;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      setSelectedIdx(idx);
      thumbsApi?.scrollTo(idx);
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, thumbsApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onThumbClick = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  return (
    <div className="flex flex-col">
      <div className="relative bg-muted">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex touch-pan-y">
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] min-w-0 flex items-center justify-center bg-muted"
              >
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] tracking-luxe uppercase px-3 py-1.5 text-foreground z-10">
          En venta
        </span>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Imagen anterior"
              className="absolute left-0 top-0 h-full w-1/5 flex items-center justify-start pl-3 md:pl-4 z-10"
            >
              <span className="bg-background/80 backdrop-blur text-foreground p-2 rounded-full hover:bg-background transition-elegant">
                <ChevronLeft className="h-5 w-5" />
              </span>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Imagen siguiente"
              className="absolute right-0 top-0 h-full w-1/5 flex items-center justify-end pr-3 md:pr-4 z-10"
            >
              <span className="bg-background/80 backdrop-blur text-foreground p-2 rounded-full hover:bg-background transition-elegant">
                <ChevronRight className="h-5 w-5" />
              </span>
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="px-6 pt-4 pb-2 border-b border-border">
          <div ref={thumbsRef} className="overflow-hidden">
            <div className="flex gap-2 touch-pan-y">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onThumbClick(i)}
                  className={`flex-shrink-0 w-20 h-20 overflow-hidden transition-elegant ${
                    i === selectedIdx
                      ? "ring-2 ring-jungle opacity-100"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Ver imagen ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`${title} ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
