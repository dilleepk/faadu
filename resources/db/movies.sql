
DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `language` varchar(45) DEFAULT NULL,
  `release_date` datetime DEFAULT NULL,
  `playtime` int(11) DEFAULT NULL,
  `media_id` int(11) DEFAULT NULL,
  `cast_crew` varchar(200) DEFAULT NULL,
  `brief` varchar(45) DEFAULT NULL,
  `view_count` varchar(45) DEFAULT NULL,
  `audio_rating` int(11) DEFAULT NULL,
  `review_rating` int(11) DEFAULT NULL,
  `user_review_rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `movie_cast`;
CREATE TABLE `movie_cast` (
  `id` int(11) NOT NULL,
  `people_id` varchar(45) DEFAULT NULL,
  `movie_id` varchar(45) DEFAULT NULL,
  `character_name` varchar(45) DEFAULT NULL,
  `people_name` varchar(45) DEFAULT NULL,
  `brief_description` varchar(45) DEFAULT NULL,
  `media_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



