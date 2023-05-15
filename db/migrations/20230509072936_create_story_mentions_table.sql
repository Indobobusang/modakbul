-- migrate:up
CREATE TABLE story_mentions (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  story_id INT,
  CONSTRAINT story_mentions_story_fkey FOREIGN KEY (story_id) REFERENCES stories (id),
  CONSTRAINT story_mentions_user_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE story_mentions;
