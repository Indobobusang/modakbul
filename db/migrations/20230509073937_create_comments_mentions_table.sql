-- migrate:up
CREATE TABLE comment_mentions (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mention VARCHAR(200),
  comment_id INT,
  CONSTRAINT comment_mentions_comment_fkey FOREIGN KEY (comment_id) REFERENCES comments (id)
);

-- migrate:down
DROP TABLE comment_mentions;
