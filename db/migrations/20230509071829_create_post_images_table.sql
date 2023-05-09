-- migrate:up
CREATE TABLE post_images (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  image_url VARCHAR(2000),
  post_id INT,
  CONSTRAINT post_images_post_fkey FOREIGN KEY (post_id) REFERENCES posts (id)
);

-- migrate:down
DROP TABLE post_images;
