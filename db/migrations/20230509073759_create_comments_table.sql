-- migrate:up
CREATE TABLE comments (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content VARCHAR(2000),
  user_id INT,
  post_id INT,
  short_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT comments_user_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT comments_post_fkey FOREIGN KEY (post_id) REFERENCES posts (id),
  CONSTRAINT comments_short_fkey FOREIGN KEY (short_id) REFERENCES shorts (id)
);

-- migrate:down
DROP TABLE comments;
