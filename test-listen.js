import express from 'express';
const app = express();
const server = app.listen(3000, "0.0.0.0", () => {
  console.log("Listening");
});
server.on("error", (e) => { console.error("Server error", e); });
