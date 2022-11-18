-- Creating data base for telemetry

CREATE DATABASE telemetry;

-- Path: telemtry.sql

CREATE TABLE temperature (
  id INT PRIMARY KEY, --AUTO_INCREMENT,
  temperature_c NUMERIC(5,1),
  x NUMERIC(5,1),
  y NUMERIC(5,1),
  speed NUMERIC(5,1),
  date TIMESTAMP
);

-- conectar la temperatura con la aceleracion y la posicion,
-- para poder hacer un grafico de la temperatura en funcion de la posicion y la aceleracion

CREATE TABLE aceleration (
  id SERIAL PRIMARY KEY, -- Serial is 1 to n
  x NUMERIC(5,2),
  y NUMERIC(5,2),
  z NUMERIC(5,2),
  timestamp TIMESTAMP
);

CREATE TABLE gps (
  id SERIAL PRIMARY KEY,
  latitude NUMERIC(5,2),
  longitude NUMERIC(5,2),
  timestamp TIMESTAMP
);

CREATE TABLE race(
  id INT PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  location VARCHAR(40) NOT NULL,
  track_img_path VARCHAR,
  date DATE NOT NULL
);


-- FK
ALTER Table temperature
ADD CONSTRAINT fk_raceId1 FOREIGN KEY(id) REFERENCES race(id);

ALTER TABLE aceleration
ADD CONSTRAINT fk_raceId2 FOREIGN KEY(id) REFERENCES race(id);

ALTER Table gps
ADD CONSTRAINT fk_raceId3 FOREIGN KEY(id) REFERENCES race(id);

-- Insert random data
INSERT INTO temperature (id, temperature_c, x, y, speed, date) 
VALUES 
(1, 23.5, 1.2, 2.3, 3.4, '2019-10-22 12:00:00'),
(2, 40.5, 2.2, 3.3, 3.4, '2019-10-22 12:01:00'),
(3, 50.5, 3.2, 4.3, 3.4, '2019-10-22 12:02:00'),
(4, 40.5, 4.2, 5.3, 2.4, '2019-10-22 12:03:00');

INSERT INTO aceleration (id, x, y, z, timestamp)
VALUES
(1, 1.2, 2.3, 3.4, '2019-10-22 12:00:00'),
(2, 2.2, 3.3, 3.4, '2019-10-22 12:01:00'),
(3, 3.2, 4.3, 3.4, '2019-10-22 12:02:00'),
(4, 4.2, 5.3, 2.4, '2019-10-22 12:03:00');

INSERT INTO gps (id, latitude, longitude, timestamp)
VALUES
(1, 1.2, 2.3, '2019-10-22 12:00:00'),
(2, 2.2, 3.3, '2019-10-22 12:01:00'),
(3, 3.2, 4.3, '2019-10-22 12:02:00'),
(4, 4.2, 5.3, '2019-10-22 12:03:00');

INSERT INTO race(name, location, track_img_path, date)
VALUES
(1, 'Mexico City', 'CDMX', 'img/track1.png', '2019-10-22'),
(2, 'Mexico City', 'CDMX', 'img/track2.png', '2020-10-22'),
(3, 'Mexico City', 'CDMX', 'img/track3.png', '2021-10-22'),
(4, 'Mexico City', 'CDMX', 'img/track4.png', '2022-10-22');


-- Querys for average temperature
SELECT AVG(temperature) 
FROM temperature 
WHERE timestamp BETWEEN '2020-10-22 00:00:00' AND '2020-10-22 23:59:59';
-- Como hacemos para determinar el dia de la carrera?

-- Querys for current temperature
SELECT temperature_c as current_temperature
FROM temperature
WHERE timestamp = (SELECT MAX(timestamp) FROM temperature);

-- Querys for current aceleration
SELECT x, y, z
FROM aceleration
WHERE timestamp = (SELECT MAX(timestamp) FROM aceleration);

-- Querys for current gps
SELECT latitude, longitude
FROM gps
WHERE timestamp = (SELECT MAX(timestamp) FROM gps);