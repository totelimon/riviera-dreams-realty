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
    "available": 17,
    "total": 57,
    "models": [
      {
        "id": "distrito-norte-a",
        "letter": "A",
        "name": "Modelo A",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 79.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 79.0,
        "priceFrom": "USD 255,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-a-004",
            "number": "004",
            "price": "USD 255,000",
            "sqm": 79.0,
            "piso": "planta baja",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "distrito-norte-b",
        "letter": "B",
        "name": "Modelo B",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 65.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 65.0,
        "priceFrom": "USD 215,583",
        "available": 2,
        "units": [
          {
            "id": "distrito-norte-b-102",
            "number": "102",
            "price": "USD 215,583",
            "sqm": 65.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "distrito-norte-b-202",
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
        "id": "distrito-norte-c",
        "letter": "C",
        "name": "Modelo C",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 62.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 62.0,
        "priceFrom": "USD 208,000",
        "available": 2,
        "units": [
          {
            "id": "distrito-norte-c-104",
            "number": "104",
            "price": "USD 208,000",
            "sqm": 62.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "distrito-norte-c-204",
            "number": "204",
            "price": "USD 212,000",
            "sqm": 62.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "distrito-norte-d",
        "letter": "D",
        "name": "Modelo D",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 61.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 61.0,
        "priceFrom": "USD 207,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-d-106",
            "number": "106",
            "price": "USD 207,000",
            "sqm": 61.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "distrito-norte-e",
        "letter": "E",
        "name": "Modelo E",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 62.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 62.0,
        "priceFrom": "USD 208,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-e-111",
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
        "id": "distrito-norte-f",
        "letter": "F",
        "name": "Modelo F",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 62.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 62.0,
        "priceFrom": "USD 208,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-f-114",
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
        "id": "distrito-norte-g",
        "letter": "G",
        "name": "Modelo G",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 68.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 68.0,
        "priceFrom": "USD 255,567",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-g-116",
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
        "id": "distrito-norte-h",
        "letter": "H",
        "name": "Modelo H",
        "type": "Departamento",
        "shortInfo": "2 rec · 3 baños · 137.0 m²",
        "beds": 2,
        "baths": 3,
        "sqm": 137.0,
        "priceFrom": "USD 401,000",
        "available": 3,
        "units": [
          {
            "id": "distrito-norte-h-117",
            "number": "117",
            "price": "USD 459,000",
            "sqm": 137.0,
            "piso": "Piso 1",
            "beds": 2,
            "baths": 3
          },
          {
            "id": "distrito-norte-h-217",
            "number": "217",
            "price": "USD 401,000",
            "sqm": 137.0,
            "piso": "Piso 2",
            "beds": 2,
            "baths": 3
          },
          {
            "id": "distrito-norte-h-317",
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
        "id": "distrito-norte-i",
        "letter": "I",
        "name": "Modelo I",
        "type": "Departamento",
        "shortInfo": "4 rec · 4 baños · 326.0 m²",
        "beds": 4,
        "baths": 4,
        "sqm": 326.0,
        "priceFrom": "USD 815,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-i-401",
            "number": "401",
            "price": "USD 815,000",
            "sqm": 326.0,
            "piso": "Piso 4",
            "beds": 4,
            "baths": 4
          }
        ]
      },
      {
        "id": "distrito-norte-j",
        "letter": "J",
        "name": "Modelo J",
        "type": "Departamento",
        "shortInfo": "3 rec · 3 baños · 128.72 m²",
        "beds": 3,
        "baths": 3,
        "sqm": 128.72,
        "priceFrom": "USD 429,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-j-405",
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
        "id": "distrito-norte-k",
        "letter": "K",
        "name": "Modelo K",
        "type": "Departamento",
        "shortInfo": "4 rec · 4 baños · 371.0 m²",
        "beds": 4,
        "baths": 4,
        "sqm": 371.0,
        "priceFrom": "USD 927,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-norte-k-406",
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
        "shortInfo": "Local comercial en planta baja · 246.11 m²",
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
    "available": 51,
    "total": 121,
    "models": [
      {
        "id": "musa-del-puerto-a",
        "letter": "A",
        "name": "Modelo A",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 49.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 49.0,
        "priceFrom": "USD 178,719",
        "available": 5,
        "units": [
          {
            "id": "musa-del-puerto-a-105",
            "number": "105",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-a-109",
            "number": "109",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-a-205",
            "number": "205",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-a-209",
            "number": "209",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-a-309",
            "number": "309",
            "price": "USD 187,806",
            "sqm": 49.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "musa-del-puerto-b",
        "letter": "B",
        "name": "Modelo B",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 49.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 49.0,
        "priceFrom": "USD 178,719",
        "available": 6,
        "units": [
          {
            "id": "musa-del-puerto-b-107",
            "number": "107",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-b-111",
            "number": "111",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-b-203",
            "number": "203",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-b-207",
            "number": "207",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-b-211",
            "number": "211",
            "price": "USD 181,748",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-b-311",
            "number": "311",
            "price": "USD 187,806",
            "sqm": 49.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "musa-del-puerto-c",
        "letter": "C",
        "name": "Modelo C",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 51.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 51.0,
        "priceFrom": "USD 182,861",
        "available": 13,
        "units": [
          {
            "id": "musa-del-puerto-c-104",
            "number": "104",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-108",
            "number": "108",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-115",
            "number": "115",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-208",
            "number": "208",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-215",
            "number": "215",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-304",
            "number": "304",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-308",
            "number": "308",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-315",
            "number": "315",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-404",
            "number": "404",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-408",
            "number": "408",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-415",
            "number": "415",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-504",
            "number": "504",
            "price": "USD 198,625",
            "sqm": 51.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-c-508",
            "number": "508",
            "price": "USD 198,625",
            "sqm": 51.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "musa-del-puerto-d",
        "letter": "D",
        "name": "Modelo D",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 49.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 49.0,
        "priceFrom": "USD 175,690",
        "available": 10,
        "units": [
          {
            "id": "musa-del-puerto-d-106",
            "number": "106",
            "price": "USD 175,690",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-d-112",
            "number": "112",
            "price": "USD 175,690",
            "sqm": 49.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-d-206",
            "number": "206",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-d-212",
            "number": "212",
            "price": "USD 178,719",
            "sqm": 49.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-d-306",
            "number": "306",
            "price": "USD 184,777",
            "sqm": 49.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-d-312",
            "number": "312",
            "price": "USD 184,777",
            "sqm": 49.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-d-406",
            "number": "406",
            "price": "USD 187,806",
            "sqm": 49.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-d-412",
            "number": "412",
            "price": "USD 187,806",
            "sqm": 49.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-d-506",
            "number": "506",
            "price": "USD 190,835",
            "sqm": 49.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-d-512",
            "number": "512",
            "price": "USD 190,835",
            "sqm": 49.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "musa-del-puerto-e",
        "letter": "E",
        "name": "Modelo E",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 51.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 51.0,
        "priceFrom": "USD 182,861",
        "available": 9,
        "units": [
          {
            "id": "musa-del-puerto-e-110",
            "number": "110",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-e-114",
            "number": "114",
            "price": "USD 182,861",
            "sqm": 51.0,
            "piso": "Piso 1",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-e-210",
            "number": "210",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-e-214",
            "number": "214",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-e-310",
            "number": "310",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-e-314",
            "number": "314",
            "price": "USD 192,319",
            "sqm": 51.0,
            "piso": "Piso 3",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-e-410",
            "number": "410",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-e-414",
            "number": "414",
            "price": "USD 195,472",
            "sqm": 51.0,
            "piso": "Piso 4",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-e-510",
            "number": "510",
            "price": "USD 198,625",
            "sqm": 51.0,
            "piso": "Piso 5",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "musa-del-puerto-f",
        "letter": "F",
        "name": "Modelo F",
        "type": "Departamento",
        "shortInfo": "3 rec · 2 baños · 118.0 m²",
        "beds": 3,
        "baths": 2,
        "sqm": 118.0,
        "priceFrom": "USD 437,679",
        "available": 3,
        "units": [
          {
            "id": "musa-del-puerto-f-116",
            "number": "116",
            "price": "USD 437,679",
            "sqm": 118.0,
            "piso": "Piso 1",
            "beds": 3,
            "baths": 2
          },
          {
            "id": "musa-del-puerto-f-216",
            "number": "216",
            "price": "USD 452,269",
            "sqm": 118.0,
            "piso": "Piso 2",
            "beds": 3,
            "baths": 2
          },
          {
            "id": "musa-del-puerto-f-316",
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
        "id": "musa-del-puerto-g",
        "letter": "G",
        "name": "Modelo G",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 51.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 51.0,
        "priceFrom": "USD 196,585",
        "available": 1,
        "units": [
          {
            "id": "musa-del-puerto-g-117",
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
        "id": "musa-del-puerto-h",
        "letter": "H",
        "name": "Modelo H",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 51.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 51.0,
        "priceFrom": "USD 186,013",
        "available": 1,
        "units": [
          {
            "id": "musa-del-puerto-h-201",
            "number": "201",
            "price": "USD 186,013",
            "sqm": 51.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          }
        ]
      },
      {
        "id": "musa-del-puerto-i",
        "letter": "I",
        "name": "Modelo I",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 45.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 45.0,
        "priceFrom": "USD 166,911",
        "available": 2,
        "units": [
          {
            "id": "musa-del-puerto-i-213",
            "number": "213",
            "price": "USD 166,911",
            "sqm": 45.0,
            "piso": "Piso 2",
            "beds": 1,
            "baths": 1
          },
          {
            "id": "musa-del-puerto-i-413",
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
        "id": "musa-del-puerto-j",
        "letter": "J",
        "name": "Modelo J",
        "type": "Departamento",
        "shortInfo": "1 rec · 1 baños · 56.0 m²",
        "beds": 1,
        "baths": 1,
        "sqm": 56.0,
        "priceFrom": "USD 211,174",
        "available": 1,
        "units": [
          {
            "id": "musa-del-puerto-j-302",
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
        "id": "musa-del-puerto-local",
        "letter": "Local",
        "name": "Local Comercial",
        "type": "Local",
        "shortInfo": "Local comercial en planta baja · 455.24 m²",
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
    "available": 73,
    "total": 166,
    "models": [
      {
        "id": "distrito-arte-a",
        "letter": "A",
        "name": "Modelo A",
        "type": "Departamento",
        "shortInfo": "126.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 126.0,
        "priceFrom": "USD 419,000",
        "available": 3,
        "units": [
          {
            "id": "distrito-arte-a-101",
            "number": "101",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-a-201",
            "number": "201",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-a-301",
            "number": "301",
            "price": "USD 422,000",
            "sqm": 126.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-b",
        "letter": "B",
        "name": "Modelo B",
        "type": "Departamento",
        "shortInfo": "126.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 126.0,
        "priceFrom": "USD 419,000",
        "available": 4,
        "units": [
          {
            "id": "distrito-arte-b-101",
            "number": "101",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-b-201",
            "number": "201",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-b-301",
            "number": "301",
            "price": "USD 419,000",
            "sqm": 126.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-b-401",
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
        "id": "distrito-arte-c",
        "letter": "C",
        "name": "Modelo C",
        "type": "Departamento",
        "shortInfo": "58.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 58.0,
        "priceFrom": "USD 180,000",
        "available": 10,
        "units": [
          {
            "id": "distrito-arte-c-102",
            "number": "102",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-c-106",
            "number": "106",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-c-110",
            "number": "110",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-c-112",
            "number": "112",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-c-114",
            "number": "114",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-c-204",
            "number": "204",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-c-206",
            "number": "206",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-c-210",
            "number": "210",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-c-212",
            "number": "212",
            "price": "USD 180,000",
            "sqm": 58.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-c-214",
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
        "id": "distrito-arte-d",
        "letter": "D",
        "name": "Modelo D",
        "type": "Departamento",
        "shortInfo": "46.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 46.0,
        "priceFrom": "USD 135,150",
        "available": 7,
        "units": [
          {
            "id": "distrito-arte-d-307",
            "number": "307",
            "price": "USD 135,150",
            "sqm": 46.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-d-405",
            "number": "405",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-d-406",
            "number": "406",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-d-407",
            "number": "407",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-d-408",
            "number": "408",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-d-410",
            "number": "410",
            "price": "USD 165,000",
            "sqm": 46.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-d-411",
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
        "id": "distrito-arte-e",
        "letter": "E",
        "name": "Modelo E",
        "type": "Departamento",
        "shortInfo": "80.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 80.0,
        "priceFrom": "USD 255,000",
        "available": 8,
        "units": [
          {
            "id": "distrito-arte-e-103",
            "number": "103",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-e-105",
            "number": "105",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-e-109",
            "number": "109",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-e-111",
            "number": "111",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-e-205",
            "number": "205",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-e-209",
            "number": "209",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-e-211",
            "number": "211",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-e-305",
            "number": "305",
            "price": "USD 260,000",
            "sqm": 80.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-f",
        "letter": "F",
        "name": "Modelo F",
        "type": "Departamento",
        "shortInfo": "80.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 80.0,
        "priceFrom": "USD 165,000",
        "available": 14,
        "units": [
          {
            "id": "distrito-arte-f-102",
            "number": "102",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-104",
            "number": "104",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-109",
            "number": "109",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-112",
            "number": "112",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-202",
            "number": "202",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-204",
            "number": "204",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-209",
            "number": "209",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-212",
            "number": "212",
            "price": "USD 255,000",
            "sqm": 80.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-304",
            "number": "304",
            "price": "USD 260,000",
            "sqm": 80.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-309",
            "number": "309",
            "price": "USD 260,000",
            "sqm": 80.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-402",
            "number": "402",
            "price": "USD 260,000",
            "sqm": 80.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-404",
            "number": "404",
            "price": "USD 221,000",
            "sqm": 80.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-409",
            "number": "409",
            "price": "USD 165,000",
            "sqm": 80.0,
            "piso": "Piso 4",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-f-412",
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
        "id": "distrito-arte-g",
        "letter": "G",
        "name": "Modelo G",
        "type": "Departamento",
        "shortInfo": "112.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 112.0,
        "priceFrom": "USD 379,000",
        "available": 3,
        "units": [
          {
            "id": "distrito-arte-g-115",
            "number": "115",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-g-215",
            "number": "215",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-g-315",
            "number": "315",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-h",
        "letter": "H",
        "name": "Modelo H",
        "type": "Departamento",
        "shortInfo": "150.9 m²",
        "beds": null,
        "baths": null,
        "sqm": 150.9,
        "priceFrom": "USD 490,000",
        "available": 3,
        "units": [
          {
            "id": "distrito-arte-h-116",
            "number": "116",
            "price": "USD 490,000",
            "sqm": 150.9,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-h-216",
            "number": "216",
            "price": "USD 490,000",
            "sqm": 150.9,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-h-316",
            "number": "316",
            "price": "USD 505,000",
            "sqm": 150.9,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          }
        ]
      },
      {
        "id": "distrito-arte-i",
        "letter": "I",
        "name": "Modelo I",
        "type": "Departamento",
        "shortInfo": "112.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 112.0,
        "priceFrom": "USD 379,000",
        "available": 4,
        "units": [
          {
            "id": "distrito-arte-i-117",
            "number": "117",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-i-217",
            "number": "217",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-i-317",
            "number": "317",
            "price": "USD 379,000",
            "sqm": 112.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-i-417",
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
        "id": "distrito-arte-j",
        "letter": "J",
        "name": "Modelo J",
        "type": "Departamento",
        "shortInfo": "166.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 166.0,
        "priceFrom": "USD 549,000",
        "available": 4,
        "units": [
          {
            "id": "distrito-arte-j-118",
            "number": "118",
            "price": "USD 555,000",
            "sqm": 166.0,
            "piso": "Piso 1",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-j-218",
            "number": "218",
            "price": "USD 549,000",
            "sqm": 166.0,
            "piso": "Piso 2",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-j-318",
            "number": "318",
            "price": "USD 560,000",
            "sqm": 166.0,
            "piso": "Piso 3",
            "beds": null,
            "baths": null
          },
          {
            "id": "distrito-arte-j-418",
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
        "id": "distrito-arte-k",
        "letter": "K",
        "name": "Modelo K",
        "type": "Departamento",
        "shortInfo": "62.0 m²",
        "beds": null,
        "baths": null,
        "sqm": 62.0,
        "priceFrom": "USD 209,000",
        "available": 1,
        "units": [
          {
            "id": "distrito-arte-k-208",
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
        "shortInfo": "Local comercial en planta baja · None m²",
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
