import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  images: string[];
  // Compatibilidad con el componente actual
  img: string;
  name: string;
  specs: string;
};

const buildSpecs = (beds: number, baths: number, sqft: number) => `${beds} Rec · ${baths} Baños · ${sqft} m²`;

export const properties: Property[] = [
  {
    id: "distrito-playa-104",
    title: "Distrito Playa, Dept 104",
    description:
      "Departamento de 2 recámaras con vista frontal en edificio de usos mixtos frente a 10a Avenida Norte, Playa del Carmen. Acabados en mármol travertino, cocina equipada con granito, walk-in closet y balcón. Rooftop con alberca, jacuzzi y gimnasio.",
    beds: 2,
    baths: 2,
    sqft: 90.73,
    images: [
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/FACHADA_1.jpg?v=1777060869",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Diseno_sin_titulo_8.png?v=1777065058",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-04-24_150621.png?v=1777064787",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-04-24_152336.png?v=1777065839",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-04-24_152351.png?v=1777065839",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/ROOF.png?v=1777060871",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-04-24_151234.png?v=1777065160",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-04-24_151305.png?v=1777065211",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-04-24_152012.png?v=1777065619",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-04-24_152118.png?v=1777065683",
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-04-24_152234.png?v=1777065763",
    ],
    img: "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/43_6c961a8a-359d-421d-81b5-d6fd1e1b0ccb.png?v=1775508320",
    name: "Distrito Playa",
    location: "10a Avenida Norte, Playa del Carmen, Quintana Roo",
    price: "USD $315,000",
    specs: buildSpecs(2, 2, 90.73),
  },
  {
    id: "villa-sakbe",
    title: "Villa Sak'be",
    description:
      "Villa de autor en Aldea Zamá, integrada con la selva de Tulum. Cenote privado, terrazas de madera tzalam y diseño biofílico.",
    beds: 3,
    baths: 3,
    sqft: 380,
    images: [p2, p3, p4],
    img: p2,
    name: "Villa Sak'be",
    location: "Aldea Zamá, Tulum",
    price: "USD 1,890,000",
    specs: buildSpecs(3, 3, 380),
  },
  {
    id: "residencia-kaan",
    title: "Residencia Kaan",
    description:
      "Residencia de lujo dentro del exclusivo desarrollo Mayakoba. Acceso a campos de golf PGA, marina interior y servicios de hotelería 5 estrellas.",
    beds: 5,
    baths: 5,
    sqft: 640,
    images: [p3, p4, p5],
    img: p3,
    name: "Residencia Kaan",
    location: "Mayakoba",
    price: "USD 3,150,000",
    specs: buildSpecs(5, 5, 640),
  },
  {
    id: "villa-yaax",
    title: "Villa Ya'ax",
    description:
      "Frente al Caribe en Akumal, dentro del enclave Bahía Príncipe. Acceso directo a playa de arena blanca y arrecife protegido.",
    beds: 4,
    baths: 4,
    sqft: 480,
    images: [p4, p5, p6],
    img: p4,
    name: "Villa Ya'ax",
    location: "Bahía Príncipe, Akumal",
    price: "USD 2,150,000",
    specs: buildSpecs(4, 4, 480),
  },
  {
    id: "penthouse-nalu",
    title: "Penthouse Nalu",
    description:
      "Penthouse en el corazón de la Quinta Avenida con vistas panorámicas al mar. Roof garden privado con jacuzzi y cocina exterior.",
    beds: 3,
    baths: 3.5,
    sqft: 310,
    images: [p5, p6, p1],
    img: p5,
    name: "Penthouse Nalu",
    location: "Playa del Carmen Centro",
    price: "USD 1,650,000",
    specs: buildSpecs(3, 3.5, 310),
  },
  {
    id: "hacienda-cenote",
    title: "Hacienda Cenote",
    description:
      "Finca privada de más de una hectárea en la selva de Tulum, con cenote propio, casa principal y dos casas de huéspedes.",
    beds: 6,
    baths: 6,
    sqft: 820,
    images: [p6, p1, p2],
    img: p6,
    name: "Hacienda Cenote",
    location: "Selva de Tulum",
    price: "USD 4,250,000",
    specs: buildSpecs(6, 6, 820),
  },
];
