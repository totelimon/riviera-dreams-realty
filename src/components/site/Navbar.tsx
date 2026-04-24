import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/propiedades", label: "Propiedades" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "#contacto", label: "Contacto", scrollTo: "contacto" as const },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goToContact = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const onSurface = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-elegant ${
        onSurface
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 py-3 md:py-4"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <nav className="container relative flex items-center justify-between md:justify-between">
        {/* Mobile burger */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 -ml-2 ${onSurface ? "text-foreground" : "text-background"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo: centered on mobile, left on desktop */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className={`font-serif text-xl md:text-2xl tracking-wide absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 ${
            onSurface ? "text-foreground" : "text-background"
          }`}
        >
          Selva<span className="text-gold">·</span>Mar
        </Link>

        {/* Desktop nav */}
        <ul
          className={`hidden md:flex items-center gap-10 text-xs tracking-luxe uppercase ${
            scrolled ? "text-foreground/80" : "text-background/90"
          }`}
        >
          {links.map((l) => (
            <li key={l.label}>
              {"scrollTo" in l && l.scrollTo ? (
                <button
                  onClick={() => goToContact(l.scrollTo)}
                  className="hover:text-gold transition-colors uppercase tracking-luxe"
                >
                  {l.label}
                </button>
              ) : (
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Spacer on mobile to balance burger */}
        <span className="md:hidden w-6" aria-hidden />

        <button
          onClick={() => goToContact("contacto")}
          className={`hidden md:inline-block text-xs tracking-luxe uppercase border px-5 py-3 transition-elegant ${
            scrolled
              ? "border-foreground/40 text-foreground hover:bg-foreground hover:text-background"
              : "border-background/60 text-background hover:bg-background hover:text-foreground"
          }`}
        >
          Agendar visita
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[56px] bg-background border-t border-border/60 transition-elegant overflow-hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="container flex flex-col py-6 gap-1 text-sm tracking-luxe uppercase text-foreground">
          {links.map((l) => (
            <li key={l.label}>
              {"scrollTo" in l && l.scrollTo ? (
                <button
                  onClick={() => goToContact(l.scrollTo)}
                  className="block w-full text-left py-4 border-b border-border/60 hover:text-gold transition-colors"
                >
                  {l.label}
                </button>
              ) : (
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 border-b border-border/60 hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
          <li className="pt-6">
            <button
              onClick={() => goToContact("contacto")}
              className="block w-full text-center text-xs tracking-luxe uppercase border border-foreground/40 text-foreground hover:bg-foreground hover:text-background px-5 py-4 transition-elegant"
            >
              Agendar visita
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
