import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/api/clothing/:userid", async (req, res) => {
  const id = req.params.userid;
  const url = `https://catalog.roblox.com/v1/search/items?category=Clothing&creatorTargetId=${id}&creatorType=User&limit=30&sortAggregation=5`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Fehler beim Abrufen der Kleidungsdaten." });
  }
});

app.get("/api/gamepasses/:userid", async (req, res) => {
  const id = req.params.userid;
  const url = `https://games.roblox.com/v1/users/${id}/game-passes?limit=30`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Fehler beim Abrufen der Gamepasses." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy läuft auf Port ${port}`);
});
