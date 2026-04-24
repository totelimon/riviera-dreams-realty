import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import leaves from "@/assets/leaves-bg.jpg";

type Errors = Partial<Record<"nombre" | "apellido" | "email" | "telefono", string>>;

const LeadForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const nombre = String(data.get("nombre") || "").trim();
    const apellido = String(data.get("apellido") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();

    if (!nombre) next.nombre = "Ingresa tu nombre";
    if (!apellido) next.apellido = "Ingresa tu apellido";

    if (!email) {
      next.email = "Ingresa tu correo";
    } else if (!email.includes("@") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "El correo debe contener un @ válido";
    }

    if (telefono && !/^[0-9+\s-]{7,}$/.test(telefono)) {
      next.telefono = "El teléfono solo acepta números";
    }

    return next;
  };

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    const el = e.currentTarget;
    el.value = el.value.replace(/[^0-9+\s-]/g, "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      toast.error("Revisa los campos marcados.");
      return;
    }
    setSubmitting(true);
    setSuccess(false);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      form.reset();
      toast.success("Solicitud recibida", {
        description: "Un asesor de Selva·Mar se pondrá en contacto contigo en breve.",
      });
      setTimeout(() => setSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={leaves}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-jungle/85" />
      </div>

      <div className="relative container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-background">
          <p className="text-background/80 text-xs tracking-luxe uppercase mb-5">
            Asesoría privada
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance mb-6">
            Encontremos juntos
            <br />
            <em className="not-italic text-gold">tu lugar en el Caribe.</em>
          </h2>
          <p className="text-background/80 text-base leading-relaxed max-w-md mb-8 font-light">
            Comparte tus datos y un asesor experto te contactará con una
            selección personalizada de propiedades de alta gama en Playa del
            Carmen, Tulum y la Riviera Maya.
          </p>
          <ul className="space-y-3 text-background/85 text-sm">
            {[
              "Atención 100% personalizada y confidencial",
              "Acceso a propiedades fuera del mercado",
              "Acompañamiento legal y financiero",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 h-px w-6 bg-gold shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-background shadow-elegant p-8 md:p-10"
        >
          <h3 className="font-serif text-2xl text-foreground mb-1">Solicita información</h3>
          <p className="text-muted-foreground text-sm mb-8">
            Respuesta en menos de 24 horas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Nombre" name="nombre" required error={errors.nombre} />
            <Field label="Apellido" name="apellido" required error={errors.apellido} />
            <Field label="Edad" name="edad" type="number" min={18} />
            <Field
              label="Teléfono"
              name="telefono"
              type="tel"
              placeholder="+52 ..."
              inputMode="numeric"
              pattern="[0-9+\s-]*"
              onInput={handlePhoneInput}
              error={errors.telefono}
            />
            <div className="md:col-span-2">
              <Field
                label="Correo electrónico"
                name="email"
                type="email"
                required
                error={errors.email}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[11px] tracking-luxe uppercase text-muted-foreground mb-2">
                Presupuesto estimado (USD)
              </label>
              <select
                name="presupuesto"
                className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-jungle transition-colors"
                defaultValue=""
              >
                <option value="" disabled>Selecciona un rango</option>
                <option>500K – 1M</option>
                <option>1M – 2M</option>
                <option>2M – 5M</option>
                <option>5M+</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-[11px] tracking-luxe uppercase text-muted-foreground mb-2">
                Mensaje (opcional)
              </label>
              <textarea
                name="mensaje"
                rows={3}
                className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-jungle transition-colors resize-none"
                placeholder="Cuéntanos qué tipo de propiedad buscas..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-10 w-full bg-jungle text-primary-foreground text-xs tracking-luxe uppercase px-8 py-4 hover:bg-gold transition-elegant disabled:opacity-60 flex items-center justify-center gap-3"
          >
            {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
            {submitting ? "Enviando..." : success ? "¡Solicitud enviada!" : "Enviar solicitud"}
          </button>
          {success && (
            <p className="mt-4 text-center text-jungle text-xs tracking-luxe uppercase">
              ✓ Recibimos tu solicitud
            </p>
          )}
          <p className="mt-4 text-[11px] text-muted-foreground text-center">
            Al enviar aceptas nuestra política de privacidad.
          </p>
        </form>
      </div>
    </section>
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
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  pattern?: string;
  onInput?: React.FormEventHandler<HTMLInputElement>;
};

const Field = ({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  min,
  error,
  inputMode,
  pattern,
  onInput,
}: FieldProps) => (
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
      inputMode={inputMode}
      pattern={pattern}
      onInput={onInput}
      aria-invalid={!!error}
      className={`w-full bg-transparent border-b py-3 text-foreground text-sm focus:outline-none transition-colors ${
        error ? "border-destructive focus:border-destructive" : "border-border focus:border-jungle"
      }`}
    />
    {error && <p className="mt-1 text-[11px] text-destructive">{error}</p>}
  </div>
);

export default LeadForm;
