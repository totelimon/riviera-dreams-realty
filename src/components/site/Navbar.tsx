import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const links = [
  { to: "/propiedades", label: "Propiedades" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "#contacto", label: "Contacto", scrollTo: "contacto" as const },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-elegant ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className={`font-serif text-2xl tracking-wide ${scrolled ? "text-foreground" : "text-background"}`}>
          Selva<span className="text-gold">·</span>Mar
        </Link>
        <ul className={`hidden md:flex items-center gap-10 text-xs tracking-luxe uppercase ${scrolled ? "text-foreground/80" : "text-background/90"}`}>
          {links.map((l) => (
            <li key={l.label}>
              {"scrollTo" in l && l.scrollTo ? (
                <a
                  href={`#${l.scrollTo}`}
                  onClick={(e) => handleScrollTo(e, l.scrollTo)}
                  className="hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          onClick={(e) => handleScrollTo(e, "contacto")}
          className={`hidden md:inline-block text-xs tracking-luxe uppercase border px-5 py-3 transition-elegant ${
            scrolled
              ? "border-foreground/40 text-foreground hover:bg-foreground hover:text-background"
              : "border-background/60 text-background hover:bg-background hover:text-foreground"
          }`}
        >
          Agendar visita
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
