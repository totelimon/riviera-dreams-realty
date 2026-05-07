export type Property = {
  id: string;
  title: string;
  description: string;
  price: string;
  priceValue: number;
  location: string;
  region: string;
  project: string;
  beds: number;
  baths: number;
  sqft: number;
  images: string[];
  img: string;
  name: string;
  specs: string;
};

export const properties: Property[] = [];
