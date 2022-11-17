-- Creating data base for telemetry

CREATE DATABASE telemetry;

-- Path: telemtry.sql

CREATE TABLE temperature (
  id SERIAL PRIMARY KEY,
  temperature_c NUMERIC(5,1),
  timestamp TIMESTAMP
);

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
  id SERIAL PRIMARY KEY, -- Formato: Lugar-dia-mes-anio (CDMX201022)
  name VARCHAR(40) NOT NULL,
  location VARCHAR(40) NOT NULL,
  date DATE NOT NULL
);


-- FK
ALTER Table temperature
ADD CONSTRAINT fk_raceId FOREIGN KEY(id) REFERENCES race(id);

ALTER TABLE aceleration
ADD CONSTRAINT fk_raceId FOREIGN KEY(id) REFERENCES race(id);

ALTER TABLE gps


-- Querys for average temperature
SELECT AVG(temperature) 
FROM temperature 
WHERE timestamp BETWEEN '2020-10-22 00:00:00' AND '2020-10-22 23:59:59';
-- Como hacemos para determinar el dia de la carrera?

-- Querys for current temperature
SELECT temperature_c
FROM temperature
GROUP BY temperature_c
Order by DESC LIMIT 1;

-- SELECT temperature_c, timestamp
-- FROM temperature
-- WHERE timestamp BETWEEN '2020-10-22 00:00:00' AND '2020-10-22 23:59:59'

-- Data for temperature
data(id INT, raceId, date TIMESTAMP, temperature FLOAT, x DOUBLE, y DOUBLE, speed DOUBLE)
PK(id) AUTO_INCREMENT
FK(raceId) REFERENCES races(id)

-- Data for races

races(id  INT, date DATE, location VARCHAR, track_name VARCHAR, track_img_path VARCHAR)
PK(id)
