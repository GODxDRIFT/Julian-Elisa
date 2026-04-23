const RECOMMENDATIONS: Record<string, string> = {
  'Adventurous': 'Try our bold Diavola pizza with spicy Napoli salami — a fiery adventure for your taste buds.',
  'Classic': 'Our timeless Margherita or a scoop of rich Dark Chocolate Gelato — perfection in simplicity.',
  'Sweet Tooth': 'The Schwarzwaldbecher (Black Forest Cup) with cherries and cream is pure indulgence.',
  'Light & Fresh': 'Our Mango Sorbet — vegan, fat-free, and bursting with tropical freshness from Mallorca.'
};

export async function getRecommendation(userMood: string): Promise<string> {
  return RECOMMENDATIONS[userMood] ?? 'Julian recommends our seasonal Pistachio Gelato – simply timeless.';
}