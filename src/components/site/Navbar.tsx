import { useEffect, useState } from "react";

const links = [
  { href: "#propiedades", label: "Propiedades" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-elegant ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#" className={`font-serif text-2xl tracking-wide ${scrolled ? "text-foreground" : "text-background"}`}>
          Selva<span className="text-gold">·</span>Mar
        </a>
        <ul className={`hidden md:flex items-center gap-10 text-xs tracking-luxe uppercase ${scrolled ? "text-foreground/80" : "text-background/90"}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
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
