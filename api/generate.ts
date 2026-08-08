import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const keys = [process.env.GEMINI_API_KEY, process.env.VITE_GEMINI_API_KEY, process.env.API_KEY];
    const apiKey = keys.find(k => k && k !== 'MY_GEMINI_API_KEY' && k !== 'your_gemini_api_key_here');

    if (!apiKey) {
      return res.status(401).json({ error: "Missing API key" });
    }

    const ai = new GoogleGenAI({ apiKey });
    const { model, contents, systemInstruction, config } = req.body;
    
    const mergedConfig = { ...config };
    if (systemInstruction) {
      mergedConfig.systemInstruction = systemInstruction;
    }
    
    const response = await ai.models.generateContent({
      model: model || "gemini-3.1-flash-lite",
      contents,
      config: mergedConfig,
    });
    
    res.status(200).json({
      ...response,
      text: response.text
    });
  } catch (error: any) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: error.message || "Failed to generate content" });
  }
}
