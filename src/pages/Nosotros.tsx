import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import LeadForm from "@/components/site/LeadForm";
import { Instagram } from "lucide-react";

const milestones = [
  { year: "2000", text: "Fundación de la firma en Playa del Carmen." },
  { year: "2008", text: "Primera operación internacional con family office europeo." },
  { year: "2015", text: "Expansión a Tulum y Mayakoba." },
  { year: "2024", text: "650 propiedades vendidas y red consolidada en la Riviera." },
];

const values = [
  { title: "Confidencialidad", text: "Cada operación se maneja con absoluta discreción." },
  { title: "Curaduría", text: "Solo presentamos propiedades alineadas a tu visión." },
  { title: "Acompañamiento", text: "Estamos contigo de la búsqueda a la entrega de llaves." },
];

const Nosotros = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero editorial */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 bg-jungle text-background overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.4),transparent_60%)]" />
        <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-gold text-xs tracking-luxe uppercase mb-6">Quiénes somos</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
              25 años construyendo confianza en el Caribe.
            </h1>
          </div>
          <p className="lg:col-span-5 text-background/80 text-base md:text-lg leading-relaxed">
            Una firma especializada en propiedades de alto valor, con un equipo
            multidisciplinario al servicio de inversionistas nacionales e
            internacionales.
          </p>
        </div>
      </section>

      {/* Líder destacada */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4">
            <div className="aspect-square w-48 md:w-full max-w-xs overflow-hidden rounded-full mx-auto md:mx-0">
              <img
                src="https://cdn.shopify.com/s/files/1/0760/1799/1845/files/503674789_18508109932027624_212475279525263594_n.jpg?v=1777234430"
                alt="Marta Marcilla Alonso"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-jungle text-[11px] tracking-luxe uppercase mb-3">Líder empresarial</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">Marta Marcilla Alonso</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              Con más de 20 años de experiencia en el sector inmobiliario de la
              Riviera Maya, Marta es una líder referente como mujer en la
              industria. Ha acompañado a inversionistas internacionales en
              operaciones de alto valor, distinguiéndose por su visión
              estratégica, integridad y compromiso con cada cliente.
            </p>
            <a
              href="https://instagram.com/marta.marcilla"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-jungle transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span>@marta.marcilla</span>
            </a>
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="py-20 md:py-28 bg-chukum/40">
        <div className="container">
          <p className="text-jungle text-xs tracking-luxe uppercase mb-3">Trayectoria</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-12">
            Una historia de crecimiento.
          </h2>
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="border-t-2 border-jungle pt-5">
                <div className="font-serif text-3xl text-jungle">{m.year}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title}>
              <div className="h-px w-10 bg-gold mb-5" />
              <h3 className="font-serif text-2xl text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <LeadForm />
      <Footer />
    </main>
  );
};

export default Nosotros;
