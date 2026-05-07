import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const PHONE = "5219841234567"; // Cambia este número (con código de país, sin '+')
const MESSAGE = "Hola Selva·Mar, me interesa recibir información sobre sus propiedades.";

const WhatsAppPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="relative bg-background shadow-elegant border border-border p-4 pr-9 max-w-[260px] animate-fade-in">
          <button
            aria-label="Cerrar"
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="font-serif text-base text-foreground leading-snug">
            ¿Hablamos por WhatsApp?
          </p>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            Un asesor te responderá al instante.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[10px] tracking-luxe uppercase text-jungle hover:text-gold transition-colors"
          >
            Iniciar chat →
          </a>
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="bg-[#25D366] text-white rounded-full p-4 shadow-elegant hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default WhatsAppPopup;