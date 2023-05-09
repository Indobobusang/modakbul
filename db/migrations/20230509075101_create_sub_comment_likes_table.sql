-- migrate:up
CREATE TABLE sub_comment_likes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  sub_comment_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT sub_comments_likes_user_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT sub_comment_likes_sub_comment_fkey FOREIGN KEY (sub_comment_id) REFERENCES sub_comments (id)
);

-- migrate:down
DROP TABLE sub_comment_likes;
