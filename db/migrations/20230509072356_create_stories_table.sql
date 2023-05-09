-- migrate:up
CREATE TABLE stories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  image_url VARCHAR(2000),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT stories_user_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE stories;
