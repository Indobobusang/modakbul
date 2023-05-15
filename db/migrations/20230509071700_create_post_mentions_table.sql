-- migrate:up
CREATE TABLE post_mentions (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  post_id INT,
  CONSTRAINT post_mentions_post_fkey FOREIGN KEY (post_id) REFERENCES posts (id),
  CONSTRAINT post_mentions_user_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE post_mentions;