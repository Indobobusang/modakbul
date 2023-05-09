-- migrate:up
CREATE TABLE follows (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  follower_user_id INT,
  followee_user_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT follows_follower_user_fkey FOREIGN KEY (follower_user_id) REFERENCES users (id),
  CONSTRAINT follows_followee_user_fkey FOREIGN KEY (followee_user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE follows;
