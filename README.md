# Datos Generales

TC1004B.501 - Implementacion de Internet de las Cosas <br>
Instituto Tecnológico de Estudios Superiores de Monterrey, campus Querétaro

## Integrantes

Carlos Salguero ~ A00833341
<br>
Daniel Hurtado ~ A01707774
<br>
Daniel Cajas ~ A01708637
<br>
Dante Pérez ~

# Proyecto

## Analisis del problema

### Contexto

Electrum es una escuderia formada por estudiantes de profesional del Tecnológico de Monterrey. Compite
en Electraton, una competencia enfocada en impulsar la construcción de autos eléctricos a pequeña
escala. Para mejorar el rendimiento del kart y del piloto, es necesario llevar un registro de
diferentes parámetros como tiempos de vuelta, temperatura del motor, entre otros.

Nuestro proyecto tiene como objetivo implementar un circuito con el Node MCU como computadora central
para registrar los datos y enviarlos a una base de datos local. Luego, mostrar en tiempo real los
valores de los parámetros en un dashboard digitial para que el equipo de los pits conozca la
condición del kart y, así determinar una estrategia.

## Dashboard Digital

Consiste en una página web creada con React para desplegar los valores de posición inicial, un mapa
con los valores de posición registrados, la temperatura del motor, el número de vueltas así como los
tiempos de las últimas tres vueltas y la vuelta con mejor tiempo y los valores de velocidad y
aceleración instantánea.

## Base de datos

Consiste en una abse de datos en phpMyAdmin hosteada localmente con XAMPP. El controlador solo corre el archivo sendData.php. Este archivo, al igual que setup.php y config.php deben estar en el servidor. Si se requie cambiar la base de datos, tabla o carrera de la cual se estan enviando los se debe de cambiar el archivo config.php.

## Implementación Física

EL controlador a utilizar es el NodeMCU ESP8266. Este está conectado a los sensores DHT22 de temperatura y humedad y al Neo6MV2 de GPS. Decodifica los datos y envía a la base de datos temperatura, latitud, longitud, altura y velocidad. Para configurar la red a conectar, ubicación de los scripts php, ip del servidor y puerto de la base de datos solo se deben cambiar las constantes al principio del programa FINAL.ino.

## NodeMCU

EL programa esta subdividido en cuatro principales secciones. Al principio se establecen las constantes para conectarse al servidos y se inicializan los sensores, al igual que se importan las librerías necesarias. Luego tenemos dos funciones, getGPSData que se encarga de la decodificación de las oragiones del GPS y sendData que abre el script snedData.php y le envía los datos temperatura, latitud, longitud, altura y velocidad.

