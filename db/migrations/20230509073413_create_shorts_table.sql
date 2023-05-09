-- migrate:up
CREATE TABLE shorts (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(500),
  content VARCHAR(3000),
  user_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT shorts_user_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE shorts;

