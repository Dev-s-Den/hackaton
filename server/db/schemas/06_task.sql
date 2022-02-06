DROP TABLE IF EXISTS task CASCADE;
CREATE TABLE task (
  id SERIAL PRIMARY KEY NOT NULL,
  goal_id INTEGER REFERENCES goal(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL,
)