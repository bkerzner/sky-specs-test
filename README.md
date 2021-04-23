# sky-specs-test

To run the application:

* Set up database *

> docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

Connect to database and run this SQL command:

CREATE TABLE favorite_gists (
 id varchar(256) PRIMARY KEY
);

* Then... *

> npm install
> node app.js
