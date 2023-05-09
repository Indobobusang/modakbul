-- migrate:up
CREATE TABLE sub_comment_mentions (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mention VARCHAR(200),
  sub_comment_id INT,
  CONSTRAINT sub_comment_mentions_sub_comment_fkey FOREIGN KEY (sub_comment_id) REFERENCES sub_comments (id)
);

-- migrate:down
DROP TABLE sub_comment_mentions;
