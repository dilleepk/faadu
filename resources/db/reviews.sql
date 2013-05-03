DROP TABLE IF EXISTS `people`;

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `reviewer_id` varchar(45) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `review_date` varchar(45) DEFAULT NULL,
  `verified` int(11) DEFAULT NULL,
  `movie_data` longtext,
  `performance_data` text,
  `conclusion` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

