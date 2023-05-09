-- migrate:up
CREATE TABLE messages (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  message_from_user_id INT,
  message_to_user_id INT,
  content VARCHAR(2000),
  message_type_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT message_message_from_user_fkey FOREIGN KEY (message_from_user_id) REFERENCES users (id),
  CONSTRAINT message_message_to_user_fkey FOREIGN KEY (message_to_user_id) REFERENCES users (id),
  CONSTRAINT message_message_type_fkey FOREIGN KEY (message_type_id) REFERENCES message_types (id)
);

-- migrate:down
DROP TABLE messages;
