import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  img: string;
  name: string;
  location: string;
  price: string;
  specs: string;
};

export const properties: Property[] = [
  {
    img: p1,
    name: "Casa Turquesa",
    location: "Playacar Fase II",
    price: "USD 2,450,000",
    specs: "4 Rec · 4.5 Baños · 520 m²",
  },
  {
    img: p2,
    name: "Villa Sak'be",
    location: "Aldea Zamá, Tulum",
    price: "USD 1,890,000",
    specs: "3 Rec · 3 Baños · 380 m²",
  },
  {
    img: p3,
    name: "Residencia Kaan",
    location: "Mayakoba",
    price: "USD 3,150,000",
    specs: "5 Rec · 5 Baños · 640 m²",
  },
  {
    img: p4,
    name: "Villa Ya'ax",
    location: "Bahía Príncipe, Akumal",
    price: "USD 2,150,000",
    specs: "4 Rec · 4 Baños · 480 m²",
  },
  {
    img: p5,
    name: "Penthouse Nalu",
    location: "Playa del Carmen Centro",
    price: "USD 1,650,000",
    specs: "3 Rec · 3.5 Baños · 310 m²",
  },
  {
    img: p6,
    name: "Hacienda Cenote",
    location: "Selva de Tulum",
    price: "USD 4,250,000",
    specs: "6 Rec · 6 Baños · 820 m²",
  },
];