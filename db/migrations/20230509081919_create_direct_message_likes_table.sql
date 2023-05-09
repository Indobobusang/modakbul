-- migrate:up
CREATE TABLE message_likes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  message_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT message_likes_user_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT message_likes_message_fkey FOREIGN KEY (message_id) REFERENCES messages (id)
);

-- migrate:down
DROP TABLE message_likes;
