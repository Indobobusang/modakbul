-- migrate:up
CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  social_id VARCHAR(200),
  email VARCHAR(200),
  password VARCHAR(200),
  gender VARCHAR(200),
  birth VARCHAR(200),
  user_name VARCHAR(200),
  profile_image_url VARCHAR(2000),
  refresh_token VARCHAR(2000),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE users;
