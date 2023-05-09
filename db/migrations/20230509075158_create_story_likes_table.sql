-- migrate:up
CREATE TABLE story_likes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  story_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT story_likes_user_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT story_likes_story_fkey FOREIGN KEY (story_id) REFERENCES stories (id)
);

-- migrate:down
DROP TABLE story_likes;
