import express from "express";
const app = express();
app.use(express.json());

let spelers = [];

app.get("/plaatsen", (req, res) => {
  res.json(spelers);
});

app.post("/update", (req, res) => {
  const {name, x, y } = req.body; // Haal data uit het verzoek

  if (typeof x !== "number" || typeof y !== "number") {
    return res.status(400).json({ error: "x en y moeten nummers zijn!" });
  }
  let speler = spelers.find(s => s.name === name);
  if (speler) {
    speler.x = x;
    speler.y = y;
  } else {
    spelers.push({ name, x, y });
  }
  res.json({ message: "Score toegevoegd!", spelers });
});

app.listen(3000, () => console.log("Server draait op poort 3000"));
