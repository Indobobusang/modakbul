-- migrate:up
CREATE TABLE post_mentions (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mention VARCHAR(200),
  post_id INT,
  CONSTRAINT post_mentions_post_fkey FOREIGN KEY (post_id) REFERENCES posts (id)
);

-- migrate:down
DROP TABLE post_mentions;