import { Link } from "react-router-dom";
import { PROJECTS_DETAIL } from "@/data/projects";

type PropertiesProps = {
  hideHeading?: boolean;
};

const Properties = ({ hideHeading = false }: PropertiesProps) => {
  return (
    <section
      id="propiedades"
      className="pt-10 pb-24 md:pt-16 md:pb-32 bg-gradient-chukum"
    >
      <div className="container">
        {!hideHeading && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-jungle text-xs tracking-luxe uppercase mb-2">
                Selección curada
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground max-w-2xl text-balance">
                Nuestros desarrollos
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Cuatro destinos exclusivos en el Caribe mexicano.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-6 md:gap-8">
          {PROJECTS_DETAIL.map((proj) => (
            <article
              key={proj.slug}
              className="group relative overflow-hidden shadow-card hover:shadow-elegant transition-elegant"
            >
              <div className="relative aspect-[16/10] md:aspect-[21/9]">
                <img
                  src={proj.hero}
                  alt={proj.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-elegant md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />
                <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                  <p className="text-white/80 text-[11px] md:text-xs tracking-luxe uppercase mb-4">
                    {proj.region}
                  </p>
                  <h3 className="font-serif text-4xl md:text-6xl text-white leading-[1.05] text-balance">
                    {proj.name}
                  </h3>
                  <p className="mt-5 text-white/95 text-sm md:text-base tracking-wide font-light">
                    <span className="text-gold font-medium">
                      ¡Quedan {proj.available}
                    </span>{" "}
                    de {proj.total} unidades disponibles!
                  </p>
                  <Link
                    to={`/proyecto/${proj.slug}`}
                    className="mt-8 bg-white/95 text-foreground text-[11px] md:text-xs tracking-luxe uppercase px-8 md:px-10 py-3.5 md:py-4 hover:bg-gold hover:text-primary-foreground transition-elegant"
                  >
                    Ver propiedades
                  </Link>
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