export type Unit = {
  id: string;
  number: string;
  price: string;
  sqm: number | null;
  piso: string;
  beds: number | null;
  baths: number | null;
};

export type UnitModel = {
  id: string;
  letter: string;
  name: string;
  type: "Departamento" | "Local" | "Penthouse" | "Estudio";
  shortInfo: string;
  beds: number | null;
  baths: number | null;
  sqm: number | null;
  priceFrom: string;
  available: number;
  units: Unit[];
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

const placeholderRender = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
const placeholderPlan = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80";

const RAW_PROJECTS = [
  {
    "slug": "distrito-playa",
    "key": "Distrito Playa",
    "name": "Distrito Playa",
    "region": "Playa del Carmen",
    "tagline": "Vida urbana frente al Caribe",
    "description": "Una torre boutique en el corazón de Playa del Carmen, a pasos de la Quinta Avenida y la playa.",
    "hero": "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121712.png?v=1777832947",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121712.png?v=1777832947"
    ],
    "highlights": [
      "Roof top con alberca infinita",
      "Coworking y lobby de lujo",
      "A 3 min caminando del mar",
      "Gimnasio y spa privado"
    ],
    "available": 6,
    "total": 36,
    "models": [
      {
        "id": "distrito-playa-a",
        "letter": "A",
        "name": "Modelo A",
        "type": "Departamento",
        "shortInfo": "2 rec · 2 baños · 90.73 m²",
        "beds": 2,
        "baths": 2,
        "sqm": 90.73,
        "priceFrom": "USD 315,000",
        "available": 3,
        "units": [
          {
            "id": "distrito-playa-a-104",
            "number": "104",
            "price": "USD 315,000",
            "sqm": 90.73,
            "piso": "Piso 1",
            "beds": 2,
            "baths": 2
          },
          {
            "id": "distrito-playa-a-204",
            "number": "204",
            "price": "USD 329,241",
            "sqm": 90.73,
            "piso": "Piso 2",
            "beds": 2,
            "baths": 2
          },
          {
            "id": "distrito-playa-a-604",
            "number": "604",
            "price": "USD 359,000",
            "sqm": 90.73,
            "piso": "Piso 6",
            "beds": 2,
            "baths": 2
          }
        ]
      },
      {
        "id": "distrito-playa-b",
        "letter": "B",
        "name": "Modelo B",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 46.64 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 46.64,
        "priceFrom": "USD 169,000",
        "available": 3,
        "units": [
          {
            "id": "distrito-playa-b-303",
            "number": "303",
            "price": "USD 169,000",
            "sqm": 46.64,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "distrito-playa-b-305",
            "number": "305",
            "price": "USD 180,000",
            "sqm": 46.64,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "distrito-playa-b-401",
            "number": "401",
            "price": "USD 199,000",
            "sqm": 46.64,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "distrito-playa-local",
        "letter": "Local",
        "name": "Local Comercial",
        "type": "Local",
        "shortInfo": "Local comercial en planta baja · 206.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 206.0,
        "priceFrom": "USD 990,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-playa-local-local",
            "number": "local",
            "price": "USD 990,000",
            "sqm": 206.0,
            "piso": "planta baja",
            "beds": null,
            "baths": null
          }
        ]
      }
    ]
  },
  {
    "slug": "distrito-norte",
    "key": "Distrito Norte",
    "name": "Distrito Norte",
    "region": "Cozumel",
    "tagline": "Inversión inteligente en Cozumel",
    "description": "Desarrollo estratégico en Cozumel con plusvalía acelerada y modelos para inversión patrimonial y comercial.",
    "hero": "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121252.png?v=1777832948",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121252.png?v=1777832948"
    ],
    "highlights": [
      "Plaza comercial integrada",
      "Áreas verdes y senderos",
      "Seguridad 24/7",
      "Amenidades premium"
    ],
    "available": 16,
    "total": 16,
    
    "models": [
      {
        "id": "distrito-norte-t4",
        "letter": "A",
        "name": "Modelo Mar",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · tamaños variados",
        "beds": 1,
        "baths": 1,
        "sqm": null,
        "priceFrom": "USD 208,000",
        "available": 4,
        "units": [
          {
            "id": "distrito-norte-t4-004",
            "number": "004",
            "price": "USD 255,000",
            "sqm": 79.0,
            "piso": "planta baja",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "distrito-norte-t4-104",
            "number": "104",
            "price": "USD 208,000",
            "sqm": 62.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "distrito-norte-t4-204",
            "number": "204",
            "price": "USD 212,000",
            "sqm": 62.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "distrito-norte-t4-114",
            "number": "114",
            "price": "USD 208,000",
            "sqm": 62.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "distrito-norte-t2",
        "letter": "B",
        "name": "Modelo Coral",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 65.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 65.0,
        "priceFrom": "USD 215,583",
        "available": 2,
        "units": [
          {
            "id": "distrito-norte-t2-102",
            "number": "102",
            "price": "USD 215,583",
            "sqm": 65.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "distrito-norte-t2-202",
            "number": "202",
            "price": "USD 220,583",
            "sqm": 65.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "distrito-norte-t6",
        "letter": "C",
        "name": "Modelo Brisa",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · tamaños variados",
        "beds": 1,
        "baths": 1,
        "sqm": null,
        "priceFrom": "USD 207,000",
        "available": 2,
        "units": [
          {
            "id": "distrito-norte-t6-106",
            "number": "106",
            "price": "USD 207,000",
            "sqm": 61.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "distrito-norte-t6-116",
            "number": "116",
            "price": "USD 255,567",
            "sqm": 68.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "distrito-norte-t1",
        "letter": "D",
        "name": "Modelo Sol",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 62.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 62.0,
        "priceFrom": "USD 208,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-t1-111",
            "number": "111",
            "price": "USD 208,000",
            "sqm": 62.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "distrito-norte-t7",
        "letter": "E",
        "name": "Modelo Palma",
        "type": "Departamento",
        "shortInfo": "2 rec · 3 baños · 137.0 m²",
        "beds": 2,
        "baths": 3,
        "sqm": 137.0,
        "priceFrom": "USD 401,000",
        "available": 3,
        "units": [
          {
            "id": "distrito-norte-t7-117",
            "number": "117",
            "price": "USD 459,000",
            "sqm": 137.0,
            "piso": "Piso 1",
            "beds": 2,
            "baths": 3
          },
          {
            "id": "distrito-norte-t7-217",
            "number": "217",
            "price": "USD 401,000",
            "sqm": 137.0,
            "piso": "Piso 2",
            "beds": 2,
            "baths": 3
          },
          {
            "id": "distrito-norte-t7-317",
            "number": "317",
            "price": "USD 411,000",
            "sqm": 137.0,
            "piso": "Piso 3",
            "beds": 2,
            "baths": 3
          }
        ]
      },
      {
        "id": "distrito-norte-t5",
        "letter": "F",
        "name": "Modelo Ceiba",
        "type": "Departamento",
        "shortInfo": "3 rec · 3 baños · 128.72 m²",
        "beds": 3,
        "baths": 3,
        "sqm": 128.72,
        "priceFrom": "USD 429,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-t5-405",
            "number": "405",
            "price": "USD 429,000",
            "sqm": 128.72,
            "piso": "Piso 4",
            "beds": 3,
            "baths": 3
          }
        ]
      },
      {
        "id": "distrito-norte-premium",
        "letter": "PH",
        "name": "Penthouse Cielo",
        "type": "Penthouse",
        "shortInfo": "Penthouse · orientaciones distintas",
        "beds": 4,
        "baths": 4,
        "sqm": null,
        "priceFrom": "USD 815,000",
        "available": 2,
        "units": [
          {
            "id": "distrito-norte-premium-401",
            "number": "401",
            "price": "USD 815,000",
            "sqm": 326.0,
            "piso": "Piso 4",
            "beds": 4,
            "baths": 4
          },
          {
            "id": "distrito-norte-premium-406",
            "number": "406",
            "price": "USD 927,000",
            "sqm": 371.0,
            "piso": "Piso 4",
            "beds": 4,
            "baths": 4
          }
        ]
      },
      {
        "id": "distrito-norte-local",
        "letter": "Local",
        "name": "Local Comercial",
        "type": "Local",
        "shortInfo": "Local comercial · 246.11 m²",
        "beds": null,
        "baths": null,
        "sqm": 246.11,
        "priceFrom": "USD 787,552",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-local-local",
            "number": "local",
            "price": "USD 787,552",
            "sqm": 246.11,
            "piso": "planta baja",
            "beds": null,
            "baths": null
          }
        ]
      }
    ]
  },
  {
    "slug": "musa-del-puerto",
    "key": "Musa del Puerto",
    "name": "Musa del Puerto",
    "region": "Puerto Morelos",
    "tagline": "Bienestar costero en Puerto Morelos",
    "description": "Complejo residencial con vocación wellness, rodeado de selva y a minutos del mar.",
    "hero": "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121853.png?v=1777832948",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121853.png?v=1777832948"
    ],
    "highlights": [
      "Spa, yoga deck y temazcal",
      "Beach club exclusivo",
      "Restaurantes y bistro",
      "Bicisendas internas"
    ],
    "available": 52,
    "total": 52,
    "models": [
      {
        "id": "musa-del-puerto-impar",
        "letter": "A",
        "name": "Modelo Arena",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · tamaños variados",
        "beds": 1,
        "baths": 1,
        "sqm": null,
        "priceFrom": "USD 166,911",
        "available": 18,
        "units": [
          {
            "id": "musa-del-puerto-impar-105",
            "number": "105",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-109",
            "number": "109",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-205",
            "number": "205",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-209",
            "number": "209",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-309",
            "number": "309",
            "price": "USD 187,806",
            "sqm": 49.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-107",
            "number": "107",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-111",
            "number": "111",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-203",
            "number": "203",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-207",
            "number": "207",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-211",
            "number": "211",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-311",
            "number": "311",
            "price": "USD 187,806",
            "sqm": 49.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-115",
            "number": "115",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-215",
            "number": "215",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-315",
            "number": "315",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-415",
            "number": "415",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-201",
            "number": "201",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-213",
            "number": "213",
            "price": "USD 166,911",
            "sqm": 45.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-impar-413",
            "number": "413",
            "price": "USD 175,257",
            "sqm": 45.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "musa-del-puerto-par",
        "letter": "B",
        "name": "Modelo Mareas",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · tamaños variados",
        "beds": 1,
        "baths": 1,
        "sqm": null,
        "priceFrom": "USD 175,690",
        "available": 29,
        "units": [
          {
            "id": "musa-del-puerto-par-104",
            "number": "104",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-108",
            "number": "108",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-208",
            "number": "208",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-304",
            "number": "304",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-308",
            "number": "308",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-404",
            "number": "404",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-408",
            "number": "408",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-504",
            "number": "504",
            "price": "USD 198,625",
            "sqm": 51.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-508",
            "number": "508",
            "price": "USD 198,625",
            "sqm": 51.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-106",
            "number": "106",
            "price": "USD 175,690",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-112",
            "number": "112",
            "price": "USD 175,690",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-206",
            "number": "206",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-212",
            "number": "212",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-306",
            "number": "306",
            "price": "USD 184,777",
            "sqm": 49.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-312",
            "number": "312",
            "price": "USD 184,777",
            "sqm": 49.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-406",
            "number": "406",
            "price": "USD 187,806",
            "sqm": 49.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-412",
            "number": "412",
            "price": "USD 187,806",
            "sqm": 49.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-506",
            "number": "506",
            "price": "USD 190,835",
            "sqm": 49.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-512",
            "number": "512",
            "price": "USD 190,835",
            "sqm": 49.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-110",
            "number": "110",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-114",
            "number": "114",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-210",
            "number": "210",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-214",
            "number": "214",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-310",
            "number": "310",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-314",
            "number": "314",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-410",
            "number": "410",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-414",
            "number": "414",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-510",
            "number": "510",
            "price": "USD 198,625",
            "sqm": 51.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-par-302",
            "number": "302",
            "price": "USD 211,174",
            "sqm": 56.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "musa-del-puerto-t16",
        "letter": "C",
        "name": "Modelo Caracola",
        "type": "Departamento",
        "shortInfo": "3 rec · 2 baños · 118.0 m²",
        "beds": 3,
        "baths": 2,
        "sqm": 118.0,
        "priceFrom": "USD 437,679",
        "available": 3,
        "units": [
          {
            "id": "musa-del-puerto-t16-116",
            "number": "116",
            "price": "USD 437,679",
            "sqm": 118.0,
            "piso": "Piso 1",
            "beds": 3,
            "baths": 2
          },
          {
            "id": "musa-del-puerto-t16-216",
            "number": "216",
            "price": "USD 452,269",
            "sqm": 118.0,
            "piso": "Piso 2",
            "beds": 3,
            "baths": 2
          },
          {
            "id": "musa-del-puerto-t16-316",
            "number": "316",
            "price": "USD 466,858",
            "sqm": 118.0,
            "piso": "Piso 3",
            "beds": 3,
            "baths": 2
          }
        ]
      },
      {
        "id": "musa-del-puerto-t17",
        "letter": "D",
        "name": "Modelo Conchas",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 51.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 51.0,
        "priceFrom": "USD 196,585",
        "available": 1,
        "units": [
          {
            "id": "musa-del-puerto-t17-117",
            "number": "117",
            "price": "USD 196,585",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "musa-del-puerto-local",
        "letter": "Local",
        "name": "Local Comercial",
        "type": "Local",
        "shortInfo": "Local comercial · 455.24 m²",
        "beds": null,
        "baths": null,
        "sqm": 455.24,
        "priceFrom": "USD 1,380,000",
        "available": 1,
        "units": [
          {
            "id": "musa-del-puerto-local-local",
            "number": "local",
            "price": "USD 1,380,000",
            "sqm": 455.24,
            "piso": "planta baja",
            "beds": null,
            "baths": null
          }
        ]
      }
    ]
  },
  {
    "slug": "distrito-arte",
    "key": "Distrito Arte",
    "name": "Distrito Arte",
    "region": "Tulum · Aldea Zamná",
    "tagline": "Arte, naturaleza y diseño en Tulum",
    "description": "Comunidad creativa en Aldea Zamná con galerías, talleres y residencias inspiradas en la cultura maya.",
    "hero": "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121950.png?v=1777832948",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0760/1799/1845/files/Captura_de_pantalla_2026-05-03_121950.png?v=1777832948"
    ],
    "highlights": [
      "Galerías y talleres de arte",
      "Cenote privado",
      "Senderos en selva nativa",
      "Diseño bioclimático"
    ],
    "available": 62,
    "total": 62,
    "models": [
      {
        "id": "distrito-arte-m01",
        "letter": "A",
        "name": "Modelo Atelier",
        "type": "Departamento",
        "shortInfo": "126.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 126.0,
        "priceFrom": "USD 419,000",
        "available": 7,
        "units": [
          {
            "id": "distrito-arte-m01-101",
            "number": "101",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m01-201",
            "number": "201",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m01-301",
            "number": "301",
            "price": "USD 422,000",
            "sqm": 126.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m01-101",
            "number": "101",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m01-201",
            "number": "201",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m01-301",
            "number": "301",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m01-401",
            "number": "401",
            "price": "USD 425,000",
            "sqm": 126.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-m16-18",
        "letter": "G",
        "name": "Modelo Galería",
        "type": "Departamento",
        "shortInfo": "tamaños variados",
        "beds": null,
        "baths": null,
        "sqm": null,
        "priceFrom": "USD 490,000",
        "available": 7,
        "units": [
          {
            "id": "distrito-arte-m16-18-116",
            "number": "116",
            "price": "USD 490,000",
            "sqm": 150.9,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m16-18-216",
            "number": "216",
            "price": "USD 490,000",
            "sqm": 150.9,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m16-18-316",
            "number": "316",
            "price": "USD 505,000",
            "sqm": 150.9,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m16-18-118",
            "number": "118",
            "price": "USD 555,000",
            "sqm": 166.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m16-18-218",
            "number": "218",
            "price": "USD 549,000",
            "sqm": 166.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m16-18-318",
            "number": "318",
            "price": "USD 560,000",
            "sqm": 166.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m16-18-418",
            "number": "418",
            "price": "USD 565,000",
            "sqm": 166.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-m15-17",
        "letter": "S",
        "name": "Modelo Estudio",
        "type": "Departamento",
        "shortInfo": "112.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 112.0,
        "priceFrom": "USD 379,000",
        "available": 7,
        "units": [
          {
            "id": "distrito-arte-m15-17-115",
            "number": "115",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m15-17-215",
            "number": "215",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m15-17-315",
            "number": "315",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m15-17-117",
            "number": "117",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m15-17-217",
            "number": "217",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m15-17-317",
            "number": "317",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-m15-17-417",
            "number": "417",
            "price": "USD 385,000",
            "sqm": 112.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-mb",
        "letter": "B",
        "name": "Modelo B · Torre A",
        "type": "Departamento",
        "shortInfo": "58 m² · endings 02-14",
        "beds": null,
        "baths": null,
        "sqm": 58.0,
        "priceFrom": "USD 180,000",
        "available": 10,
        "units": [
          {
            "id": "distrito-arte-mb-102",
            "number": "102",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-mb-106",
            "number": "106",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-mb-110",
            "number": "110",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-mb-112",
            "number": "112",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-mb-114",
            "number": "114",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-mb-204",
            "number": "204",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-mb-206",
            "number": "206",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-mb-210",
            "number": "210",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-mb-212",
            "number": "212",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-mb-214",
            "number": "214",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-md",
        "letter": "D",
        "name": "Modelo D · ambas torres",
        "type": "Departamento",
        "shortInfo": "80 m²",
        "beds": null,
        "baths": null,
        "sqm": 80.0,
        "priceFrom": "USD 165,000",
        "available": 22,
        "units": [
          {
            "id": "distrito-arte-md-103",
            "number": "103",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-105",
            "number": "105",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-109",
            "number": "109",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-111",
            "number": "111",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-205",
            "number": "205",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-209",
            "number": "209",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-211",
            "number": "211",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-305",
            "number": "305",
            "price": "USD 260,000",
            "sqm": 80.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-102",
            "number": "102",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-104",
            "number": "104",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-109",
            "number": "109",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-112",
            "number": "112",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-202",
            "number": "202",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-204",
            "number": "204",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-209",
            "number": "209",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-212",
            "number": "212",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-304",
            "number": "304",
            "price": "USD 260,000",
            "sqm": 80.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-309",
            "number": "309",
            "price": "USD 260,000",
            "sqm": 80.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-402",
            "number": "402",
            "price": "USD 260,000",
            "sqm": 80.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-404",
            "number": "404",
            "price": "USD 221,000",
            "sqm": 80.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-409",
            "number": "409",
            "price": "USD 165,000",
            "sqm": 80.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-md-412",
            "number": "412",
            "price": "USD 260,000",
            "sqm": 80.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-me",
        "letter": "E",
        "name": "Modelo E · Torre B",
        "type": "Departamento",
        "shortInfo": "46 m²",
        "beds": null,
        "baths": null,
        "sqm": 46.0,
        "priceFrom": "USD 135,150",
        "available": 7,
        "units": [
          {
            "id": "distrito-arte-me-307",
            "number": "307",
            "price": "USD 135,150",
            "sqm": 46.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-me-405",
            "number": "405",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-me-406",
            "number": "406",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-me-407",
            "number": "407",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-me-408",
            "number": "408",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-me-410",
            "number": "410",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-me-411",
            "number": "411",
            "price": "USD 140,250",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-otros",
        "letter": "Otros",
        "name": "Otros modelos",
        "type": "Departamento",
        "shortInfo": "62.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 62.0,
        "priceFrom": "USD 209,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-arte-otros-208",
            "number": "208",
            "price": "USD 209,000",
            "sqm": 62.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-local",
        "letter": "Local",
        "name": "Local Comercial",
        "type": "Local",
        "shortInfo": "Local comercial",
        "beds": null,
        "baths": null,
        "sqm": null,
        "priceFrom": "—",
        "available": 1,
        "units": [
          {
            "id": "distrito-arte-local-numero departamento torre b",
            "number": "numero departamento torre b",
            "price": "—",
            "sqm": null,
            "piso": "—",
            "beds": null,
            "baths": null
          }
        ]
      }
    ]
  }
];

export const PROJECTS_DETAIL: ProjectDetail[] = (RAW_PROJECTS as ProjectDetail[]).map((p) => ({
  ...p,
  models: p.models.map((m) => ({ ...m, render: placeholderRender, plan: placeholderPlan })),
}));

export const getProjectBySlug = (slug?: string) =>
  PROJECTS_DETAIL.find((p) => p.slug === slug);
