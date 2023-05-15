-- migrate:up
CREATE TABLE comment_mentions (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  comment_id INT,
  CONSTRAINT comment_mentions_comment_fkey FOREIGN KEY (comment_id) REFERENCES comments (id),
  CONSTRAINT comment_mentions_user_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE comment_mentions;
