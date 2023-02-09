DROP TABLE IF EXISTS schedules CASCADE;
CREATE TABLE muscle_groups (
  id SERIAL PRIMARY KEY NOT NULL,
  muscle_groups JSON NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);