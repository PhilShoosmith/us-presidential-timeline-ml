import { GoogleGenAI } from "@google/genai";
async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: "Hi",
  });
  console.log(JSON.stringify(response, null, 2));
}
test();
