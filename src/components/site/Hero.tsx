import heroImage from "@/assets/hero-villa.jpg";

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Villa de lujo frente al mar Caribe en Playa del Carmen"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-jungle/20" />
      </div>

      <div className="relative z-10 container h-full flex flex-col justify-end pb-24 md:pb-32">
        <p className="reveal text-background/85 text-xs tracking-luxe uppercase mb-6">
          Playa del Carmen · Riviera Maya
        </p>
        <h1 className="reveal reveal-delay-1 font-serif text-background text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl text-balance">
          Vivir el Caribe,
          <br />
          <em className="not-italic text-gold/95">en su forma más pura.</em>
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-background/85 text-base md:text-lg font-light leading-relaxed">
          Propiedades de alta gama entre selva, cenotes y mar turquesa.
          Curaduría exclusiva para quienes buscan algo más que una casa.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="bg-background text-foreground text-xs tracking-luxe uppercase px-8 py-4 hover:bg-gold hover:text-primary-foreground transition-elegant"
          >
            Solicitar información
          </a>
          <a
            href="#propiedades"
            className="border border-background/70 text-background text-xs tracking-luxe uppercase px-8 py-4 hover:bg-background hover:text-foreground transition-elegant"
          >
            Ver propiedades
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-background/70 text-[10px] tracking-luxe uppercase reveal reveal-delay-4">
        <div className="flex flex-col items-center gap-3">
          <span>Descubre</span>
          <span className="block h-12 w-px bg-background/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
