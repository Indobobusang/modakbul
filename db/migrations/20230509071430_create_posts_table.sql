-- migrate:up
CREATE TABLE posts (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(200),
  content VARCHAR(3000),
  user_id INT,
  post_category_id INT,
  longitude DECIMAL(18,14),
  latitude DECIMAL(18,14),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE posts;
