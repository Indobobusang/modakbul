-- migrate:up
CREATE TABLE post_categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category VARCHAR(200)
);

-- migrate:down
DROP TABLE post_categories;
