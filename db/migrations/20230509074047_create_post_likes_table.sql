-- migrate:up
CREATE TABLE post_likes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  post_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT post_likes_user_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT post_likes_post_fkey FOREIGN KEY (post_id) REFERENCES posts (id)
);

-- migrate:down
DROP TABLE post_likes;
