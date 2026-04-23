const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#" className="font-serif text-3xl tracking-wide">
            Selva<span className="text-gold">·</span>Mar
          </a>
          <p className="mt-4 text-primary-foreground/70 text-sm max-w-sm leading-relaxed">
            Bienes raíces de alta gama en Playa del Carmen y la Riviera Maya.
            Discreción, naturaleza y arquitectura.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-4">Oficina</h4>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Quinta Avenida 320<br />
            Playa del Carmen, Q. Roo<br />
            México 77710
          </p>
        </div>
        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-4">Contacto</h4>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            +52 984 123 4567<br />
            hola@selvamar.mx
          </p>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-luxe uppercase text-primary-foreground/60">
        <span>© {new Date().getFullYear()} Selva·Mar. Todos los derechos reservados.</span>
        <span>Playa del Carmen · Tulum · Mayakoba</span>
      </div>
    </footer>
  );
};

export default Footer;
