// server.ts
import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
async function startServer() {
  const app = express();
  const PORT = 3e3;
  app.use(express.json());
  app.post("/api/generate", async (req, res) => {
    try {
      const keys = [process.env.GEMINI_API_KEY, process.env.VITE_GEMINI_API_KEY, process.env.API_KEY];
      const apiKey = keys.find((k) => k && k !== "MY_GEMINI_API_KEY" && k !== "your_gemini_api_key_here");
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
        config: mergedConfig
      });
      res.json({
        ...response,
        text: response.text
      });
    } catch (error) {
      console.error("Error generating content:", error);
      res.status(500).json({ error: error.message || "Failed to generate content" });
    }
  });
  app.use((err, req, res, next) => {
    console.error("Express error:", err);
    res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
  });
  app.use("/api", (req, res) => {
    res.status(404).json({ error: "API route not found: " + req.method + " " + req.path });
  });
  if (false) {
    const viteModule = await null;
    const vite = await viteModule.createServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.use((req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.js.map
