import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Server werkt! 🌍");
});

app.listen(3000, () => console.log("Server draait op poort 3000"));
