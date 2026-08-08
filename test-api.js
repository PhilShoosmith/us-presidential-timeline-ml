fetch("http://localhost:3000/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "gemini-3.1-flash-lite",
    contents: "Hello"
  })
}).then(r => r.text()).then(console.log).catch(console.error)
