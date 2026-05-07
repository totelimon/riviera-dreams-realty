import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  Bath,
  Bed,
  Building2,
  ChevronLeft,
  Layers,
  Maximize,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import LeadForm from "@/components/site/LeadForm";
import { getProjectBySlug, type UnitModel, type Unit } from "@/data/projects";

const Proyecto = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [activeId, setActiveId] = useState<string | null>(
    project?.models[0]?.id ?? null,
  );

  const active = useMemo<UnitModel | undefined>(
    () => project?.models.find((m) => m.id === activeId),
    [project, activeId],
  );

  if (!project) return <Navigate to="/propiedades" replace />;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img
          src={project.hero}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
        <div className="relative h-full container flex flex-col justify-end pb-16 md:pb-24">
          <Link
            to="/propiedades"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-gold hover:text-primary-foreground text-white border border-white/30 text-xs md:text-sm tracking-luxe uppercase mb-8 px-6 md:px-8 py-3 md:py-4 backdrop-blur-sm transition-elegant w-fit"
          >
            <ChevronLeft className="h-5 w-5" />
            Volver a los desarrollos
          </Link>
          <p className="text-gold text-xs tracking-luxe uppercase mb-4">
            {project.region}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.02] text-balance max-w-4xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-white/90 text-base md:text-lg font-light">
            {project.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-white">
            <Stat label="Disponibles" value={`${project.available}`} />
            <Stat label="Totales" value={`${project.total}`} />
            <Stat label="Modelos" value={`${project.models.length}`} />
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="py-20 md:py-28 bg-gradient-chukum">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-jungle text-xs tracking-luxe uppercase mb-3">
              Modelos disponibles
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance">
              Encuentra el espacio que se adapta a ti
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Selecciona un modelo para ver render, plano e información clave.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Model selector */}
            <aside className="lg:col-span-4 flex flex-col gap-3">
              {project.models.map((m) => {
                const isActive = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveId(m.id)}
                    className={`text-left p-5 border transition-elegant ${
                      isActive
                        ? "bg-jungle text-background border-jungle shadow-elegant"
                        : "bg-card border-border hover:border-jungle/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span
                        className={`text-[10px] tracking-luxe uppercase ${
                          isActive ? "text-gold" : "text-jungle"
                        }`}
                      >
                        {m.type} · {m.letter}
                      </span>
                      <span
                        className={`text-[10px] tracking-luxe uppercase ${
                          isActive ? "text-background/80" : "text-muted-foreground"
                        }`}
                      >
                        {m.available} disp.
                      </span>
                    </div>
                    <h3
                      className={`font-serif text-xl ${
                        isActive ? "text-background" : "text-foreground"
                      }`}
                    >
                      {m.name}
                    </h3>
                    <p
                      className={`mt-1 text-sm ${
                        isActive ? "text-background/80" : "text-muted-foreground"
                      }`}
                    >
                      {m.shortInfo}
                    </p>
                  </button>
                );
              })}
            </aside>

            {/* Active model panel */}
            <div className="lg:col-span-8">
              {active && <ModelPanel model={active} key={active.id} />}
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION + HIGHLIGHTS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-jungle text-xs tracking-luxe uppercase mb-4">
              El desarrollo
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight text-balance">
              {project.tagline}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-card border border-border p-8 md:p-10">
              <p className="text-jungle text-[11px] tracking-luxe uppercase mb-5 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Highlights
              </p>
              <ul className="space-y-4">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-foreground border-b border-border/60 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-gold mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </main>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="font-serif text-3xl md:text-4xl">{value}</div>
    <div className="text-[11px] tracking-luxe uppercase text-white/70 mt-1">
      {label}
    </div>
  </div>
);

const ModelPanel = ({ model }: { model: UnitModel }) => {
  const [tab, setTab] = useState<"render" | "plano">("render");
  const [selectedUnitId, setSelectedUnitId] = useState<string>(model.units[0]?.id ?? "");
  const selectedUnit: Unit | undefined = model.units.find((u) => u.id === selectedUnitId) ?? model.units[0];
  const src = tab === "render" ? model.render : model.plan;

  return (
    <div className="bg-card border border-border shadow-card overflow-hidden animate-fade-up">
      <div className="relative aspect-[16/10] bg-muted overflow-hidden">
        <img
          src={src}
          alt={`${model.name} ${tab}`}
          className="absolute inset-0 w-full h-full object-cover transition-elegant"
          key={src}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {(["render", "plano"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`text-[10px] tracking-luxe uppercase px-4 py-2 transition-elegant ${
                tab === k
                  ? "bg-jungle text-background"
                  : "bg-background/90 text-foreground hover:bg-background"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
        <span className="absolute top-4 right-4 bg-gold text-primary-foreground text-[10px] tracking-luxe uppercase px-3 py-1.5">
          {model.available} disponibles
        </span>
      </div>

      <div className="p-7 md:p-10">
        <p className="text-jungle text-[11px] tracking-luxe uppercase mb-2">
          {model.type} · Modelo {model.letter}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground">
            {model.name}
          </h3>
          <div className="text-right">
            <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">
              Desde
            </p>
            <p className="font-serif text-2xl text-jungle">{selectedUnit?.price ?? model.priceFrom}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7 py-6 border-y border-border">
          <Spec icon={<Bed className="h-4 w-4" />} label="Recámaras" value={selectedUnit?.beds != null ? `${selectedUnit.beds}` : "—"} />
          <Spec icon={<Bath className="h-4 w-4" />} label="Baños" value={selectedUnit?.baths != null ? `${selectedUnit.baths}` : "—"} />
          <Spec icon={<Maximize className="h-4 w-4" />} label="Superficie" value={selectedUnit?.sqm != null ? `${selectedUnit.sqm} m²` : "—"} />
          <Spec icon={<Layers className="h-4 w-4" />} label="Piso" value={selectedUnit?.piso ?? "—"} />
        </div>

        {model.units.length > 1 && (
          <div className="mt-7">
            <p className="text-jungle text-[11px] tracking-luxe uppercase mb-3">
              Selecciona piso y luego unidad del piso correspondiente ({model.units.length} disponibles)
            </p>
            <div className="flex flex-wrap gap-2">
              {model.units.map((u) => {
                const active = u.id === selectedUnit?.id;
                return (
                  <button
                    key={u.id}
                    onClick={() => setSelectedUnitId(u.id)}
                    className={`text-xs tracking-wide px-4 py-2 border transition-elegant ${
                      active
                        ? "bg-jungle text-background border-jungle"
                        : "bg-background border-border hover:border-jungle/50 text-foreground"
                    }`}
                  >
                    #{u.number} · {u.piso}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4 text-jungle" />
            Quedan <span className="text-foreground font-medium">{model.available}</span> unidades de este modelo
          </div>
          <Link
            to="/agendar"
            className="bg-jungle text-primary-foreground text-xs tracking-luxe uppercase px-8 py-4 hover:bg-gold transition-elegant"
          >
            Agendar visita
          </Link>
        </div>
      </div>
    </div>
  );
};

const Spec = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div>
    <div className="flex items-center gap-2 text-jungle">{icon}<span className="text-[10px] tracking-luxe uppercase text-muted-foreground">{label}</span></div>
    <p className="font-serif text-lg text-foreground mt-1">{value}</p>
  </div>
);

export default Proyecto;