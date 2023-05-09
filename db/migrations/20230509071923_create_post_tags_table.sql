-- migrate:up
CREATE TABLE post_tags (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  tag VARCHAR(200),
  post_image_id INT,
  CONSTRAINT post_tags_post_image_fkey FOREIGN KEY (post_image_id) REFERENCES post_images (id)
);

-- migrate:down
DROP TABLE post_tags;
