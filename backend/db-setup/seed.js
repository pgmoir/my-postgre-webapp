// Run in terminal in root directory of project
// `docker-compose exec backend node db-setup/seed.js`
// to refresh the database

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function seed() {
  await pool.query(`
    DROP TABLE users
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      address VARCHAR(100)
    )
  `);

  await pool.query(`
    DELETE FROM users
  `);

  await pool.query(`
    INSERT INTO users (name, email, address) VALUES
    ('Alice', 'alice@example.com', '1 Main Street'),
    ('Bobx', 'bob@example.com', '10 Long Way'),
    ('Phil', 'phil@example.com', '5 London Road')
    ON CONFLICT (email) DO NOTHING
  `);

  console.log("Seed data inserted!");
  process.exit();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
