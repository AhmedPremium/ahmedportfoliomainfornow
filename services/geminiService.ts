import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const chatWithAssistant = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are the AI assistant for 'QwertyDeveloper', a world-class product designer and engineer's portfolio. 
        Your tone is professional, helpful, minimalist, and "Apple-like"—sophisticated but concise.
        You know about QwertyDeveloper's projects (Horizon OS, Aura Health, Nebula Engine) and experience. 
        Keep answers short and elegant. If someone asks for a meeting, tell them to use the contact link.`,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently unavailable. Please try again later.";
  }
};