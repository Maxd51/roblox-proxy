import express from "express";
import fetch from "node-fetch";

const app = express();

// Kleidung eines Users
app.get("/api/clothing/:userid", async (req, res) => {
  const id = req.params.userid;
  const url = `https://catalog.roblox.com/v1/search/items?category=Clothing&creatorTargetId=${id}&creatorType=User&limit=30&sortAggregation=5`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Gamepasses eines Spiels (PlaceId)
app.get("/api/gamepasses/:placeid", async (req, res) => {
  const placeId = req.params.placeid;
  const url = `https://games.roblox.com/v1/games/${placeId}/game-passes?limit=100`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(10000, () => console.log("✅ Roblox Proxy läuft auf Port 10000"));
