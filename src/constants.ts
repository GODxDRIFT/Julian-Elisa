import { MenuSection } from './types';

export const MENU_DATA: MenuSection[] = [
  {
    id: 'pizza',
    title: { de: 'Pizza', en: 'Pizza' },
    items: [
      { name: { de: 'Margherita', en: 'Margherita' }, description: { de: 'Tomate, Mozzarella, Oregano, Basilikum', en: 'Tomato, mozzarella, oregano, basil' }, price: '8,50 €' },
      { name: { de: 'Salami', en: 'Salami' }, description: { de: 'Tomate, Mozzarella, Salami Milanese', en: 'Tomato, mozzarella, Milanese salami' }, price: '9,50 €' },
      { name: { de: 'Diavola', en: 'Diavola' }, description: { de: 'Tomate, Mozzarella, milde Peperoni, scharfe Salami Napoli', en: 'Tomato, mozzarella, mild peppers, spicy Napoli salami' }, price: '10,90 €' },
      { name: { de: 'La Romana', en: 'La Romana' }, description: { de: 'Tomate, Mozzarella, Schinken (cotto)', en: 'Tomato, mozzarella, ham (cotto)' }, price: '9,90 €' },
      { name: { de: 'Napoli', en: 'Napoli' }, description: { de: 'Tomate, Mozzarella, Sardellen, Oliven, Kapern', en: 'Tomato, mozzarella, anchovies, olives, capers' }, price: '11,50 €' },
      { name: { de: 'Tonno', en: 'Tonno' }, description: { de: 'Tomate, Mozzarella, Thunfisch, Zwiebeln', en: 'Tomato, mozzarella, tuna, onions' }, price: '11,50 €' },
      { name: { de: 'Vegetariana', en: 'Vegetariana' }, description: { de: 'Tomate, Mozzarella, Zucchini, Artischocken, Oliven', en: 'Tomato, mozzarella, zucchini, artichokes, olives' }, price: '10,90 €' },
      { name: { de: 'Delicatia', en: 'Delicatia' }, description: { de: 'Tomate, Mozzarella, Parmaschinken, Rucola, Parmesan', en: 'Tomato, mozzarella, Parma ham, arugula, parmesan' }, price: '14,90 €' }
    ],
    extras: [
        { de: '+1,50€ (Salami, Peperoni, Schinken, Kapern, Oliven, Artischocken, Zucchini, Champignons, Zwiebeln, Spinat, Rucola)', en: '+1.50€ (Salami, peppers, ham, capers, olives, artichokes, zucchini, mushrooms, onions, spinach, arugula)' },
        { de: '+2,50€ (Parmaschinken, Tunfisch, Sardellen, Parmesan, Mozzarella, Gorgonzola)', en: '+2.50€ (Parma ham, tuna, anchovies, parmesan, mozzarella, gorgonzola)' }
    ]
  },
  {
    id: 'gelato',
    title: { de: 'Eiskarte', en: 'Ice Cream' },
    items: [
      { name: { de: 'Spaghetti-Eis', en: 'Spaghetti Ice' }, description: { de: 'Vanilleeis, hausgemachte Erdbeersoße, weiße Schokolade, Sahne', en: 'Vanilla ice cream, homemade strawberry sauce, white chocolate, whipped cream' }, price: '7,50 €' },
      { name: { de: 'Erdbeertraum', en: 'Strawberry Dream' }, description: { de: 'Erdbeer + Vanilleeis, Erdbeersoße, frische Erdbeeren, Sahne, Mandelkrokant', en: 'Strawberry & vanilla ice cream, strawberry sauce, fresh strawberries, cream, almond brittle' }, price: '8,50 €' },
      { name: { de: 'Schokobecher', en: 'Chocolate Sundae' }, description: { de: 'Schokoladen + Vanilleeis, Schokoraśpeln, Schokoladensoße, Sahne', en: 'Chocolate & vanilla ice cream, chocolate shavings, chocolate sauce, cream' }, price: '8,50 €' },
      { name: { de: 'Bananensplit', en: 'Banana Split' }, description: { de: 'Bananen + Schokoladen + Vanilleeis, Bananen, Schokoladensoße, Sahne', en: 'Banana, chocolate & vanilla ice cream, bananas, chocolate sauce, cream' }, price: '8,90 €' },
      { name: { de: 'Schwarzwaldbecher', en: 'Black Forest Cup' }, description: { de: 'Vanille + Schokolade + Stracciatellaeis, Kirschen, Sahne, Kirschwasser', en: 'Vanilla, chocolate & stracciatella ice cream, cherries, cream, cherry brandy' }, price: '9,50 €' },
      { name: { de: 'Julian Becher (Kids)', en: 'Julian Cup (Kids)' }, description: { de: 'Schokoladen + Bananeneis, Schokoladensoße, Banane, Sahne', en: 'Chocolate & banana ice cream, chocolate sauce, banana, cream' }, price: '4,90 €' }
    ]
  },
  {
    id: 'waffles',
    title: { de: 'Waffeln', en: 'Waffles' },
    items: [
      { name: { de: 'Mit Puderzucker', en: 'With Powdered Sugar' }, price: '3,50 €' },
      { name: { de: 'Mit Nutella', en: 'With Nutella' }, price: '4,50 €' },
      { name: { de: 'Mit 2 Kugeln Eis', en: 'With 2 Scoops of Ice Cream' }, price: '6,90 €' },
      { name: { de: 'Mit Vanilleeis & Apfelmus', en: 'With Vanilla Ice & Applesauce' }, description: { de: 'Zimt und Sahne', en: 'Cinnamon and cream' }, price: '7,50 €' }
    ]
  },
  {
    id: 'drinks',
    title: { de: 'Getränke', en: 'Drinks' },
    items: [
      { name: { de: 'Espresso', en: 'Espresso' }, price: '2,00 €' },
      { name: { de: 'Cappuccino', en: 'Cappuccino' }, price: '3,20 €' },
      { name: { de: 'Latte Macchiato', en: 'Latte Macchiato' }, price: '3,20 €' },
      { name: { de: 'Aperol Spritz', en: 'Aperol Spritz' }, price: '5,90 €' },
      { name: { de: 'Limonello (Ice Cocktail)', en: 'Limonello (Ice Cocktail)' }, description: { de: 'Zitronen Eis, Prosecco, Limette, Minze', en: 'Lemon ice cream, prosecco, lime, mint' }, price: '6,90 €' }
    ]
  }
];

export const TRANSLATIONS = {
  de: {
    nav: { story: 'Geschichte', menu: 'Karte', gallery: 'Galerie', sustainability: 'Nachhaltigkeit', reviews: 'Bewertungen', contact: 'Kontakt' },
    hero: { title: 'Das beste Eis Berlins', subtitle: 'Am Gendarmenmarkt – Passione per Gelato', cta_menu: 'Unsere Speisekarte', cta_find: 'Finde uns' },
    about: { title: 'Unsere Geschichte', text: 'Top Qualität startet mit den besten Zutaten. Julian & Elisa steht für handwerklich hergestelltes Gelato, regionale Milch und Zitrusfrüchte direkt von einer mallorquinischen Bio-Farm.' },
    sustainability: { title: 'Nachhaltigkeit', text: 'Unsere Sorbets sind vegan, laktosefrei und fettfrei mit hohem Fruchtanteil. Wir setzen auf regionale Partner und saisonale Vielfalt.' },
    gallery: { title: 'Galleria' },
    reviews: { title: 'Was Gäste sagen', source: 'Basierend auf 714 Google Bewertungen' },
    contact: { title: 'Kontakt & Öffnungszeiten', hours: 'Mo–So: 12:00 – 20:00 Uhr', info: 'Markgrafenstraße 41, 10117 Berlin' }
  },
  en: {
    nav: { story: 'Story', menu: 'Menu', gallery: 'Gallery', sustainability: 'Sustainability', reviews: 'Reviews', contact: 'Contact' },
    hero: { title: 'Berlins Finest Gelato', subtitle: 'At Gendarmenmarkt – Passione per Gelato', cta_menu: 'Explore Menu', cta_find: 'Find Us' },
    about: { title: 'Our Story', text: 'Top quality starts with the best ingredients. Julian & Elisa stands for artisanal gelato, regional milk, and citrus fruits sourced directly from a Mallorcan organic farm.' },
    sustainability: { title: 'Sustainability', text: 'Our sorbets are vegan, lactose-free, and fat-free with a high fruit content. We focus on regional partners and seasonal variety.' },
    gallery: { title: 'Galleria' },
    reviews: { title: 'What Guests Say', source: 'Based on 714 Google Reviews' },
    contact: { title: 'Contact & Hours', hours: 'Mon–Sun: 12:00 PM – 8:00 PM', info: 'Markgrafenstraße 41, 10117 Berlin' }
  }
};

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=2070&auto=format&fit=crop',
    alt: { de: 'Frisches handgemachtes Gelato', en: 'Fresh artisanal gelato' },
    category: 'gelato'
  },
  {
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    alt: { de: 'Authentische italienische Pizza', en: 'Authentic Italian pizza' },
    category: 'pizza'
  },
  {
    url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop',
    alt: { de: 'Hausgemachte Waffeln', en: 'Homemade waffles' },
    category: 'waffles'
  },
  {
    url: 'https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?q=80&w=2070&auto=format&fit=crop',
    alt: { de: 'Café Atmosphäre am Gendarmenmarkt', en: 'Café atmosphere at Gendarmenmarkt' },
    category: 'ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1517093157656-b99917c73e8a?q=80&w=2070&auto=format&fit=crop',
    alt: { de: 'Premium Kaffee Spezialitäten', en: 'Premium coffee specialties' },
    category: 'drinks'
  },
  {
    url: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=1966&auto=format&fit=crop',
    alt: { de: 'Detaillose Eiskunst', en: 'Detailed ice cream art' },
    category: 'gelato'
  }
];
