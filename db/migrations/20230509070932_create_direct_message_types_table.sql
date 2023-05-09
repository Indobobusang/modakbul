-- migrate:up
CREATE TABLE message_types (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  type VARCHAR(200)
);

-- migrate:down
DROP TABLE message_types;
