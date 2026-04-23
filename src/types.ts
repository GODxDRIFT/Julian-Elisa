export interface MenuItem {
  name: { de: string; en: string };
  description?: { de: string; en: string };
  price: string;
  tags?: string[];
}

export interface MenuSection {
  title: { de: string; en: string };
  id: string;
  items: MenuItem[];
  extras?: { de: string; en: string }[];
}

export type Language = 'de' | 'en';
