-- init.sql - was originally used in the docker-compose, but only runs once
-- but has been superceded by the seed script so that it can be re-run

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  address VARCHAR(100)
);

INSERT INTO users (name, email) VALUES
  ('Alice', 'alice@example.com', '1 Main Street'),
  ('Bobx', 'bob@example.com', '10 Long Way'),
  ('Phil', 'phil@example.com', '5 London Road');
