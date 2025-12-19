
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHealthTipForPet = async (petName: string, breed: string, history: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional veterinarian assistant. Given a pet named ${petName} which is a ${breed} and has a recent service history of: ${history}, provide a short, professional health tip (max 2 sentences) for the owner.`,
    });
    return response.text || "Ensure your pet stays hydrated and maintain a regular exercise routine.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Keep a close eye on your pet's dietary needs and ensure regular checkups.";
  }
};

export const getSmartSearchHelp = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `A pet shop manager is searching for: "${query}". Help them find what they might be looking for (clients, pets, or products) or provide a helpful shortcut command. Keep it very short (max 10 words).`,
    });
    return response.text;
  } catch (error) {
    return null;
  }
};
