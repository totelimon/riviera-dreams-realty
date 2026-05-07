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

const stats = [
  { value: "25+", label: "Años de experiencia" },
  { value: "650", label: "Propiedades vendidas" },
  { value: "USD 1.2B", label: "En transacciones" },
  { value: "98%", label: "Clientes recomendados" },
];

const expertise = [
  {
    title: "Inversión patrimonial",
    text: "Diseñamos estrategias para preservar y multiplicar el capital de nuestros clientes a través de bienes raíces de alto valor.",
  },
  {
    title: "Family offices",
    text: "Trabajamos con oficinas familiares europeas y americanas que buscan diversificar en el Caribe mexicano.",
  },
  {
    title: "Renta vacacional premium",
    text: "Conectamos propietarios con operadores boutique para maximizar el rendimiento sin perder exclusividad.",
  },
  {
    title: "Relocalización",
    text: "Acompañamos a profesionales y familias que se mudan a la Riviera Maya, integrando bienes raíces con estilo de vida.",
  },
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
                src="https://cdn.shopify.com/s/files/1/0760/1799/1845/files/LUMEA_8.png?v=1778163646"
                alt="Marta Marcilla Alonso"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-jungle text-[11px] tracking-luxe uppercase mb-3">Líder empresarial</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">Marta Marcilla Alonso</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                Con más de 20 años de experiencia en el sector inmobiliario de la
                Riviera Maya, Marta es una líder referente como mujer en la
                industria. Ha acompañado a inversionistas internacionales en
                operaciones de alto valor, distinguiéndose por su visión
                estratégica, integridad y compromiso con cada cliente.
              </p>
              <p>
                Originaria de España y radicada en Playa del Carmen desde hace dos
                décadas, Marta ha construido una red única de desarrolladores,
                arquitectos, notarios y family offices que respalda cada operación
                con confianza absoluta.
              </p>
              <p>
                Su filosofía: cada cliente es un proyecto de vida. Por eso, las
                operaciones que lidera nacen de la escucha activa y se consolidan
                con un acompañamiento cercano de principio a fin.
              </p>
            </div>
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

      {/* Stats */}
      <section className="py-16 md:py-20 bg-jungle text-background">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-serif text-4xl md:text-5xl text-gold">{s.value}</div>
              <div className="mt-2 text-[11px] tracking-luxe uppercase text-background/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-jungle text-xs tracking-luxe uppercase mb-3">Nuestra expertise</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance">
              Más que una asesoría inmobiliaria.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Combinamos visión estratégica con un conocimiento profundo del
              mercado local para entregar resultados extraordinarios.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="bg-card border border-border p-8 hover:shadow-elegant transition-elegant"
              >
                <h3 className="font-serif text-2xl text-foreground mb-3">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
              </div>
            ))}
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
