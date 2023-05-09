-- migrate:up
CREATE TABLE story_mentions (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mention VARCHAR(200),
  story_id INT,
  CONSTRAINT story_mentions_story_fkey FOREIGN KEY (story_id) REFERENCES stories (id)
);

-- migrate:down
DROP TABLE story_mentions;
