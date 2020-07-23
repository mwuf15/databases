CREATE DATABASE IF NOT EXISTS chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER AUTO_INCREMENT NOT NULL,
  roomName VARCHAR(20) NOT NULL,
  messages VARCHAR(200) NOT NULL,
  user INTEGER NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT NOT NULL,
  names VARCHAR(20) NOT NULL,
  Age INTEGER NOT NULL,
  PRIMARY KEY (id)
);


ALTER TABLE messages ADD FOREIGN KEY (user) REFERENCES users (id);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

