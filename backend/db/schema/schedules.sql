-- Drop and recreate schedules table

DROP TABLE IF EXISTS schedules CASCADE;
CREATE TABLE schedules (
  id SERIAL PRIMARY KEY NOT NULL,
  schedule JSON NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) NOT NULL,
);
