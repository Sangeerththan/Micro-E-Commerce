CREATE TABLE `product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_jmivyxk9rmgysrmsqw15lqr5b` (`name`)
);

CREATE TABLE `user_credential` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6s3isow7rby7lajiubl6rcxkv` (`username`)
) ;

CREATE TABLE `user_detail` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_bw2k2v2ql8t36dw09nel1h62s` (`username`)
)

INSERT INTO product
(id, description, img, name, price)
VALUES
(1, 'Fresh apples', 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/10/apple-2711629_1920-1024x768.jpg', 'Apple', '55');

INSERT INTO product
(id, description, img, name, price)
VALUES
(2, 'Fresh oranges', 'https://media.gettyimages.com/photos/orange-picture-id185284489?s=612x612', 'Oranges', '40');

INSERT INTO product
(id, description, img, name, price)
VALUES
(3, 'Fresh grapes', 'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/grapes_0.jpg?itok=uYYnmpTm', 'Grapes', '150');

INSERT INTO product
(id, description, img, name, price)
VALUES
(4, 'Fresh wood apples', 'https://i.ytimg.com/vi/mxpfyrAG7r4/maxresdefault.jpg', 'Wood apple', '70');

INSERT INTO product
(id, description, img, name, price)
VALUES
(5, 'Mens original trimmer', 'https://images-na.ssl-images-amazon.com/images/I/71pnrdwnKdL._SL1500_.jpg', 'Trimmer', '1500');

INSERT INTO product
(id, description, img, name, price)
VALUES
(6, 'iPhone 11 pro black', 'https://static.toiimg.com/thumb/msid-61654288,width-640,resizemode-4/61654288.jpg', 'iPhone', '150000');

INSERT INTO product
(id, description, img, name, price)
VALUES
(7, 'Samsung note 12', 'https://m.media-amazon.com/images/I/71wjfOWQhsL._AC_SS350_.jpg', 'Samsung', '132500');

INSERT INTO product
(id, description, img, name, price)
VALUES
(8, 'White thick ear buds', 'https://cdn.shopify.com/s/files/1/0543/4293/products/Untitled-89_c9a5442b-b0b6-4cc4-81fd-725d07ccada8_1200x.png?v=1586271201', 'Ear buds', '650');

INSERT INTO product
(id, description, img, name, price)
VALUES
(9, 'Silver carrying water bottle', 'https://images-na.ssl-images-amazon.com/images/I/61d6G-TO6EL._AC_SX522_.jpg', 'Water bottle', '250');

INSERT INTO product
(id, description, img, name, price)
VALUES
(10, 'New ball point pen 3.0', 'https://www.visconti.it/piuma/0_0_100/https://www.visconti.it/wp-content/uploads/2020/05/Van_Gogh_Wheatfield_with_Crows-FP.jpeg', 'Astronut pen', '150');

INSERT INTO product
(id, description, img, name, price)
VALUES
(11, 'Car for toy under 15years old', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWKNtEEP7RNC2KnAa8ctmW6FrFxAlHNVXAKg&usqp=CAU', 'Kids car', '30000');

INSERT INTO product
(id, description, img, name, price)
VALUES
(12, 'Mens original purse', 'https://3.imimg.com/data3/XI/GY/MY-7688301/leather-purse-for-men.jpg', 'Purse', '500');

INSERT INTO product
(id, description, img, name, price)
VALUES
(13, 'Lenovo 10000mA power bank', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYwWjHPaVt0iL6h31e0YJ16a006CYI3zREjQ&usqp=CAU', 'Power bank', '5000');

INSERT INTO product
(id, description, img, name, price)
VALUES
(14, 'Adaptor to connect 2 monitors', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0WdDrfhD646jIuT8mv3CUEgIr09-CZg49Zg&usqp=CAU', 'Monitor adaptor', '3000');
