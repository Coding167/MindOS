// server/server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000; // you can change this if you want

// serve static files from "public"
app.use(express.static(path.join(__dirname, "../public")));

// route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// start server
app.listen(PORT, () => {
  console.log(`🚀 MindOS running at http://localhost:${PORT}`);
});
