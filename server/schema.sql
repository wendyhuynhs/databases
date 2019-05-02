DROP DATABASE IF EXISTS chat;


CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER NOT NULL PRIMARY KEY,
  username varchar(20) REFERENCES user (username),
  message varchar(255),
  roomname varchar(20)
);

/* Create other tables and define schemas for them here! */
-- CREATE TABLE rooms (
--   id INTEGER NOT NULL PRIMARY KEY,
--   roomname varchar(255),

-- )

CREATE TABLE user (
  id INTEGER NOT NULL PRIMARY KEY,
  username varchar(20)
)



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.
 mysql -u student -p < server/schema.sql
 */

