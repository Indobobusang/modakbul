-- migrate:up
CREATE TABLE sub_comment_mentions (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  sub_comment_id INT,
  CONSTRAINT sub_comment_mentions_sub_comment_fkey FOREIGN KEY (sub_comment_id) REFERENCES sub_comments (id),
  CONSTRAINT sub_comment_mentions_user_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE sub_comment_mentions;
