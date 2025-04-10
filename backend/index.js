const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 5001;

// Enable CORS for all origins
app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json({ data: result.rows, message: 'Working' });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
