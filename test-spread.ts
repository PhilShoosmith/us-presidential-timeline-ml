import { GoogleGenAI } from "@google/genai";
async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: "Hi",
  });
  console.log("SPREAD", JSON.stringify({ ...response, text: response.text }, null, 2));
}
test();
