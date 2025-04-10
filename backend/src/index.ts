import cors from "cors";
import express, { Request, Response } from "express";
import { Pool } from "pg";

const app = express();
const port = 5001;

// Enable CORS for all origins
app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", async (req: Request, res: Response) => {
  try {
  const result = await pool.query("SELECT * FROM users");
  res.json({ data: result.rows, message: 'Working' });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).send("Database error");
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
