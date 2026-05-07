import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { supabase } from "@/integrations/supabase/client";

const PROJECTS = ["Distrito Playa", "Distrito Norte", "Musa del Puerto", "Distrito Arte"];

type Errors = Partial<Record<"nombre" | "apellido" | "email" | "telefono", string>>;

const Agendar = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const next: Errors = {};
    const nombre = String(data.get("nombre") || "").trim();
    const apellido = String(data.get("apellido") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();

    if (!nombre) next.nombre = "Ingresa tu nombre";
    if (!apellido) next.apellido = "Ingresa tu apellido";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Correo inválido";
    if (telefono && !/^[0-9+\s-]{7,}$/.test(telefono)) next.telefono = "Teléfono inválido";

    setErrors(next);
    if (Object.keys(next).length) {
      toast.error("Revisa los campos marcados.");
      return;
    }

    setSubmitting(true);
    const payload = {
      nombre,
      apellido,
      email,
      telefono,
      edad: String(data.get("edad") || "").trim(),
      presupuesto: String(data.get("presupuesto") || "").trim(),
      mensaje: [
        `Proyecto: ${data.get("proyecto") || "-"}`,
        `Piso: ${data.get("piso") || "-"}`,
        `Unidad: ${data.get("unidad") || "-"}`,
        `Fecha de visita: ${data.get("fecha") || "-"}`,
        `Modalidad: ${data.get("modalidad") || "-"}`,
        `Plazo de compra: ${data.get("plazo") || "-"}`,
        `Financiamiento: ${data.get("financiamiento") || "-"}`,
        `¿Cómo nos conoció?: ${data.get("origen") || "-"}`,
        `Mensaje: ${data.get("mensaje") || "-"}`,
      ].join("\n"),
    };

    try {
      const { data: res, error } = await supabase.functions.invoke("hubspot-leads", {
        body: payload,
      });
      if (error) throw error;
      if (res?.error) throw new Error(res.error);
      setSuccess(true);
      form.reset();
      toast.success("Visita solicitada", {
        description: "Un asesor confirmará tu cita en breve.",
      });
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error(err);
      toast.error("Error al enviar", {
        description: err instanceof Error ? err.message : "Inténtalo nuevamente.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-jungle text-background">
        <div className="container max-w-3xl">
          <p className="text-gold text-xs tracking-luxe uppercase mb-5">Agendar visita</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            Reserva una visita privada.
          </h1>
          <p className="mt-6 text-background/80 text-base md:text-lg leading-relaxed">
            Cuéntanos qué unidad te interesa y un asesor coordinará un recorrido
            personalizado en el desarrollo de tu elección.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-background shadow-elegant border border-border p-8 md:p-12 space-y-10">
            <div>
              <p className="text-jungle text-[11px] tracking-luxe uppercase mb-5">01 · Tus datos</p>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Nombre" name="nombre" required error={errors.nombre} />
                <Field label="Apellido" name="apellido" required error={errors.apellido} />
                <Field label="Correo" name="email" type="email" required error={errors.email} />
                <Field label="Teléfono" name="telefono" type="tel" placeholder="+52 ..." error={errors.telefono} />
                <Field label="Edad" name="edad" type="number" min={18} />
                <Select label="Presupuesto (USD)" name="presupuesto" options={["500K - 1M", "1M - 2M", "2M - 5M", "5M+"]} />
              </div>
            </div>

            <div>
              <p className="text-jungle text-[11px] tracking-luxe uppercase mb-5">02 · Unidad de interés</p>
              <div className="grid md:grid-cols-3 gap-5">
                <Select label="Ubicación / Proyecto" name="proyecto" options={PROJECTS} />
                <Field label="Piso" name="piso" placeholder="Ej. 1, 2, PH" />
                <Field label="Unidad" name="unidad" placeholder="Ej. 104" />
              </div>
            </div>

            <div>
              <p className="text-jungle text-[11px] tracking-luxe uppercase mb-5">03 · Detalles de la visita</p>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Fecha preferida" name="fecha" type="date" />
                <Select label="Modalidad" name="modalidad" options={["Presencial", "Virtual (videollamada)"]} />
                <Select label="Plazo de compra" name="plazo" options={["Inmediato", "1-3 meses", "3-6 meses", "Más de 6 meses"]} />
                <Select label="¿Requieres financiamiento?" name="financiamiento" options={["Sí", "No", "Aún no lo decido"]} />
                <div className="md:col-span-2">
                  <Select label="¿Cómo nos conociste?" name="origen" options={["Instagram", "Google", "Recomendación", "Otro"]} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] tracking-luxe uppercase text-muted-foreground mb-2">
                    Comentarios (opcional)
                  </label>
                  <textarea
                    name="mensaje"
                    rows={3}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-jungle transition-colors resize-none"
                    placeholder="Cuéntanos lo que necesites..."
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-jungle text-primary-foreground text-xs tracking-luxe uppercase px-8 py-4 hover:bg-gold transition-elegant disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitting ? "Enviando..." : success ? "¡Visita solicitada!" : "Agendar visita"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  error?: string;
};

const Field = ({ label, name, type = "text", required, placeholder, min, error }: FieldProps) => (
  <div>
    <label className="block text-[11px] tracking-luxe uppercase text-muted-foreground mb-2">
      {label} {required && <span className="text-gold">*</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      min={min}
      className={`w-full bg-transparent border-b py-3 text-foreground text-sm focus:outline-none transition-colors ${
        error ? "border-destructive" : "border-border focus:border-jungle"
      }`}
    />
    {error && <p className="mt-1 text-[11px] text-destructive">{error}</p>}
  </div>
);

const Select = ({ label, name, options }: { label: string; name: string; options: string[] }) => (
  <div>
    <label className="block text-[11px] tracking-luxe uppercase text-muted-foreground mb-2">{label}</label>
    <select
      name={name}
      defaultValue=""
      className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-jungle transition-colors"
    >
      <option value="" disabled>Selecciona una opción</option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

export default Agendar;