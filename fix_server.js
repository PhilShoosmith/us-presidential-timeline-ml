const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

// Insert the catch-all for /api before Vite middleware
const insertionPoint = `  if (process.env.NODE_ENV !== "production") {`;
const insertStr = `  // Catch-all for API routes to prevent SPA fallback from serving HTML
  app.use("/api", (req, res) => {
    res.status(404).json({ error: "API route not found: " + req.method + " " + req.path });
  });\n\n`;

code = code.replace(insertionPoint, insertStr + insertionPoint);
fs.writeFileSync('server.ts', code);
