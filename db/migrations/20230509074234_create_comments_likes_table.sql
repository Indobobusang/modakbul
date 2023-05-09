-- migrate:up
CREATE TABLE comment_likes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  comment_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT comments_likes_user_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT comment_likes_comment_fkey FOREIGN KEY (comment_id) REFERENCES comments (id)
);

-- migrate:down
DROP TABLE comment_likes;
