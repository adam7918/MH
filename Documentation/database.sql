CREATE TABLE `account` (
	`username` varchar(50) NOT NULL UNIQUE,
	`password` varchar(255) NOT NULL,
	`email` varchar(50) NOT NULL,
	`registered_on` DATETIME NOT NULL DEFAULT now(),
	`last_online` DATETIME NOT NULL DEFAULT now(),
	PRIMARY KEY (`username`)
);

CREATE TABLE `player_stats` (
	`username` varchar(50) NOT NULL,
	`level` int(100) ,
	`experience` int(0),
	`gold` int(0),
	`rubies` int(0),
	`health` int(0),
	`energy` int(0),
	PRIMARY KEY (`username`)
);

ALTER TABLE `player_stats` ADD CONSTRAINT `player_stats_fk0` FOREIGN KEY (`username`) REFERENCES `account`(`username`);
