import { GoogleGenAI } from "@google/genai";
async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: "Tell me a brief history about the US President George Washington.",
    config: { tools: [{googleSearch: {}}] }
  });
  try {
    JSON.stringify({ ...response, text: response.text });
    console.log("SUCCESS");
  } catch(e: any) {
    console.error("FAILED", e.message);
  }
}
test();
