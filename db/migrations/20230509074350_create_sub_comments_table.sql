-- migrate:up
CREATE TABLE sub_comments (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content VARCHAR(2000),
  user_id INT,
  comment_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT sub_comments_user_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT sub_comment_comment_fkey FOREIGN KEY (comment_id) REFERENCES comments (id)
);


-- migrate:down
DROP TABLE sub_comments;
