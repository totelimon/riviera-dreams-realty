export type UnitModel = {
  id: string;
  name: string;
  type: "Departamento" | "Local" | "Penthouse" | "Estudio";
  shortInfo: string;
  description: string;
  beds: number;
  baths: number;
  sqft: number;
  priceFrom: string;
  available: number;
  totalUnits: number;
  floors: string;
  images: string[];
  render?: string;
  plan?: string;
};

export type ProjectDetail = {
  slug: string;
  key: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  hero: string;
  gallery: string[];
  highlights: string[];
  available: number;
  total: number;
  models: UnitModel[];
};

const placeholderRender =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
const placeholderPlan =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80";

export const PROJECTS_DETAIL: ProjectDetail[] = [
  {
    slug: "distrito-playa",
    key: "Distrito Playa",
    name: "Distrito Playa",
    region: "Playa del Carmen",
    tagline: "Vida urbana frente al Caribe",
    description:
      "Una torre boutique en el corazón de Playa del Carmen, a pasos de la Quinta Avenida y la playa. Arquitectura contemporánea, amenidades premium y unidades diseñadas para inversión y disfrute.",
    hero: "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121712.png?v=1777832947",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121712.png?v=1777832947",
    ],
    highlights: [
      "Roof top con alberca infinita",
      "Coworking y lobby de lujo",
      "A 3 min caminando del mar",
      "Gimnasio y spa privado",
    ],
    available: 6,
    total: 36,
    models: [
      {
        id: "dp-studio",
        name: "Modelo Sasi",
        type: "Estudio",
        shortInfo: "Estudio compacto con vista urbana",
        description:
          "Espacio abierto con cocina integrada y balcón. Ideal para renta vacacional de alto rendimiento.",
        beds: 1,
        baths: 1,
        sqft: 42,
        priceFrom: "USD 145,000",
        available: 2,
        totalUnits: 12,
        floors: "Pisos 2 al 5",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "dp-1br",
        name: "Modelo Tulix",
        type: "Departamento",
        shortInfo: "1 recámara con balcón privado",
        description:
          "Sala-comedor abierto, recámara principal con vestidor y balcón con vista al distrito.",
        beds: 1,
        baths: 1,
        sqft: 62,
        priceFrom: "USD 198,000",
        available: 3,
        totalUnits: 16,
        floors: "Pisos 3 al 8",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "dp-2br",
        name: "Modelo Náay",
        type: "Departamento",
        shortInfo: "2 recámaras con terraza",
        description:
          "Layout familiar con doble recámara, terraza ampliada y vistas al roof top.",
        beds: 2,
        baths: 2,
        sqft: 95,
        priceFrom: "USD 295,000",
        available: 1,
        totalUnits: 8,
        floors: "Pisos 4 al 9",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
    ],
  },
  {
    slug: "distrito-norte",
    key: "Distrito Norte",
    name: "Distrito Norte",
    region: "Chetumal",
    tagline: "Inversión inteligente en la nueva frontera",
    description:
      "Desarrollo estratégico en Chetumal, con plusvalía acelerada por el Tren Maya y la zona franca. Modelos para inversión patrimonial y comercial.",
    hero: "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121252.png?v=1777832948",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121252.png?v=1777832948",
    ],
    highlights: [
      "Conectividad con el Tren Maya",
      "Plaza comercial integrada",
      "Áreas verdes y senderos",
      "Seguridad 24/7",
    ],
    available: 17,
    total: 57,
    models: [
      {
        id: "dn-loft",
        name: "Loft Yaxché",
        type: "Estudio",
        shortInfo: "Loft inversión con doble altura",
        description: "Diseño abierto, doble altura y acabados premium.",
        beds: 1,
        baths: 1,
        sqft: 48,
        priceFrom: "USD 95,000",
        available: 5,
        totalUnits: 18,
        floors: "Pisos 1 al 4",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "dn-1br",
        name: "Modelo Ceiba",
        type: "Departamento",
        shortInfo: "1 recámara con balcón",
        description: "Departamento familiar con cocina integrada y balcón.",
        beds: 1,
        baths: 1,
        sqft: 58,
        priceFrom: "USD 125,000",
        available: 6,
        totalUnits: 22,
        floors: "Pisos 2 al 6",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "dn-local",
        name: "Local Comercial",
        type: "Local",
        shortInfo: "Locales en planta baja",
        description:
          "Espacios comerciales con doble frente y alta afluencia peatonal.",
        beds: 0,
        baths: 1,
        sqft: 75,
        priceFrom: "USD 180,000",
        available: 6,
        totalUnits: 17,
        floors: "Planta baja",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
    ],
  },
  {
    slug: "musa-del-puerto",
    key: "Musa del Puerto",
    name: "Musa del Puerto",
    region: "Puerto Morelos",
    tagline: "Bienestar costero en Puerto Morelos",
    description:
      "Complejo residencial con vocación wellness, rodeado de selva y a minutos del mar. Diseñado para vivir y rentar con el más alto estándar.",
    hero: "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121853.png?v=1777832948",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121853.png?v=1777832948",
    ],
    highlights: [
      "Spa, yoga deck y temazcal",
      "Beach club exclusivo",
      "Restaurantes y bistro",
      "Bicisendas internas",
    ],
    available: 51,
    total: 121,
    models: [
      {
        id: "mp-studio",
        name: "Estudio Sak",
        type: "Estudio",
        shortInfo: "Estudio wellness boutique",
        description: "Espacios bañados de luz natural con diseño biofílico.",
        beds: 1,
        baths: 1,
        sqft: 45,
        priceFrom: "USD 165,000",
        available: 14,
        totalUnits: 30,
        floors: "Pisos 1 al 4",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "mp-1br",
        name: "Suite Kaab",
        type: "Departamento",
        shortInfo: "1 recámara con jardín privado",
        description:
          "Unidades en planta baja con jardín privado o piso superior con terraza.",
        beds: 1,
        baths: 1,
        sqft: 65,
        priceFrom: "USD 215,000",
        available: 18,
        totalUnits: 40,
        floors: "Pisos 1 al 5",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "mp-2br",
        name: "Garden Suite",
        type: "Departamento",
        shortInfo: "2 recámaras con terraza ampliada",
        description:
          "Layout para familias con vistas a jardines centrales y alberca.",
        beds: 2,
        baths: 2,
        sqft: 98,
        priceFrom: "USD 320,000",
        available: 12,
        totalUnits: 35,
        floors: "Pisos 2 al 5",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "mp-ph",
        name: "Penthouse Lumen",
        type: "Penthouse",
        shortInfo: "Penthouse con roof privado",
        description:
          "Penthouse con doble altura, roof privado, jacuzzi y vista al horizonte.",
        beds: 3,
        baths: 3,
        sqft: 165,
        priceFrom: "USD 685,000",
        available: 7,
        totalUnits: 16,
        floors: "Último nivel",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
    ],
  },
  {
    slug: "distrito-arte",
    key: "Distrito Arte",
    name: "Distrito Arte",
    region: "Tulum · Aldea Zamná",
    tagline: "Arte, naturaleza y diseño en Tulum",
    description:
      "Comunidad creativa en Aldea Zamná con galerías, talleres y residencias inspiradas en la cultura maya. Convivencia entre arte y selva.",
    hero: "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121950.png?v=1777832948",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121950.png?v=1777832948",
    ],
    highlights: [
      "Galerías y talleres de arte",
      "Cenote privado",
      "Senderos en selva nativa",
      "Diseño bioclimático",
    ],
    available: 73,
    total: 166,
    models: [
      {
        id: "da-studio",
        name: "Estudio Itzá",
        type: "Estudio",
        shortInfo: "Estudio creativo con balcón",
        description: "Espacio abierto con muros de chukum y madera tropical.",
        beds: 1,
        baths: 1,
        sqft: 46,
        priceFrom: "USD 175,000",
        available: 18,
        totalUnits: 42,
        floors: "Pisos 1 al 3",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "da-1br",
        name: "Suite Cobá",
        type: "Departamento",
        shortInfo: "1 recámara con vista a selva",
        description:
          "Unidades con terraza inmersiva en la selva y acabados artesanales.",
        beds: 1,
        baths: 1,
        sqft: 70,
        priceFrom: "USD 245,000",
        available: 22,
        totalUnits: 50,
        floors: "Pisos 1 al 4",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "da-2br",
        name: "Garden Loft",
        type: "Departamento",
        shortInfo: "2 recámaras con jardín",
        description: "Loft familiar con jardín y vista al cenote.",
        beds: 2,
        baths: 2,
        sqft: 110,
        priceFrom: "USD 395,000",
        available: 18,
        totalUnits: 44,
        floors: "Pisos 2 al 4",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "da-ph",
        name: "Penthouse Sky",
        type: "Penthouse",
        shortInfo: "Penthouse con roof y jacuzzi",
        description:
          "Penthouse con vistas a la copa de la selva, jacuzzi y roof garden.",
        beds: 3,
        baths: 3,
        sqft: 170,
        priceFrom: "USD 720,000",
        available: 8,
        totalUnits: 18,
        floors: "Último nivel",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
      {
        id: "da-local",
        name: "Local de Galería",
        type: "Local",
        shortInfo: "Local comercial estilo galería",
        description:
          "Espacios para galerías, cafés y boutiques en planta baja con doble altura.",
        beds: 0,
        baths: 1,
        sqft: 80,
        priceFrom: "USD 220,000",
        available: 7,
        totalUnits: 12,
        floors: "Planta baja",
        images: [placeholderRender],
        render: placeholderRender,
        plan: placeholderPlan,
      },
    ],
  },
];

export const getProjectBySlug = (slug?: string) =>
  PROJECTS_DETAIL.find((p) => p.slug === slug);