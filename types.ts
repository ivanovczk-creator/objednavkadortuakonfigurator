export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageAlt: string;
}

export interface OrderFormData {
  name: string;
  phone: string;
  date: string;
  branch: string;
  notes?: string;
}

export const BRANCHES = [
  "Hlavní prodejna (Centrum)",
  "Pobočka Náměstí",
  "Výdejna Sklad"
];