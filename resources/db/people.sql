/*
peoeple table*/


ROP TABLE IF EXISTS `people`;


  
CREATE TABLE `People` (

	  `person_id`   int(12),
       `gender`      varchar(1),
       `first_name`  varchar(20),
       `last_name`   varchar(20),
       `email_id` varchar(128),
       `mobile_no` int(10),

       )PRIMARY KEY (`person_id`),
  INDEX `idx_people_id` (`person_id`)
) ENGINE=InnoDB CHARSET=utf8;


  
  