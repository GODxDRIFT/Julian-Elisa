import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

const SYSTEM_PROMPT = `You are the digital concierge for "Julian & Elisa," a premium gelato and pizza cafe at Gendarmenmarkt, Berlin. 
Your goal is to recommend a specific menu item based on the user's mood or request.
Keep it short (max 2 sentences), elegant, and professional.

Menu Context:
- Gelato: Classic Italian flavors like Pistachio & Salt, Mango Sorbet, Dark Chocolate.
- Pizza: Authentic stone-oven pizza, Margherita, Spicy Salami, Truffle.
- Drinks: Espresso, Aperol Spritz, House-made Lemonade.

Always include the name of the recommended item.`;

export async function getRecommendation(userMood: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMood,
      config: {
        systemInstruction: SYSTEM_PROMPT
      }
    });

    return response.text || "Julian recommends our seasonal Pistachio Gelato – simply timeless.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our stone-oven Margherita is always a classic choice for a sophisticated afternoon.";
  }
}
