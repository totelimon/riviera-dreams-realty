type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => (
  <section className="bg-gradient-chukum pt-40 pb-20 md:pt-48 md:pb-28">
    <div className="container max-w-4xl">
      <p className="text-jungle text-xs tracking-luxe uppercase mb-5">{eyebrow}</p>
      <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.05] text-balance">
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;