import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

const rootDir = process.cwd();
app.use(express.static(rootDir));

app.get("*", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Iron Nation Gym server running on http://0.0.0.0:${PORT}`);
});
