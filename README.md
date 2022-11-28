# Datos Generales

Instituto Tecnológico de Estudios Superiores de Monterrey, campus Querétaro \
Proyecto Integrador de la materia TC1004B.501 - Implementación de Internet de las Cosas

## Profesores

Eberth Manjarrez Quintanilla - ISC \
Rodrigo Sanchez Luna - Mtro \
Pedro Nájera García - Mtro

## Integrantes

Carlos Salguero ~ A00833341 \
Daniel Hurtado ~ \
Daniel Cajas ~ A01708637 \
Dante Peréz ~

## Contexto

Electrum es una escuderia formada por estudiantes de profesional del Tecnológico de Monterrey. Compite en Electraton, una competencia enfocada en impulsar la construcción de autos eléctricos a pequeña escala. Para mejorar el rendimiento del kart y del piloto, es necesario llevar un registro de diferentes parámetros como tiempos de vuelta, temperatura del motor, entre otros.

Nuestro proyecto tiene como objetivo implementar un circuito con el Node MCU como computadora central para registrar los datos y enviarlos a una base de datos local. Luego, mostrar en tiempo real los valores de los parámetros en un dashboard digitial para que el equipo de los pits conozca la condición del kart y, así determinar una estrategia.

## Dashboard Digital

En este proyecto de Implementación de Internet de las Cosas estamos desarrollando
un dashboard digital para el grupo estudiantil Electrum del Tecnologico de Monterrey,
campus Queretaro.

### Frontend

La pagina web diseñada para los integrantes de los pits muestra los valores de
ubicación, número de vueltas, temperatura del motor, velocidad actual, un gráfico de
dispersión con los valores de longitud y latitud, el punto inicial de la carrera y
estadísticas generales del equipo.

Esta parte de la plataforma utiliza React JS, la librería de Material Theme para React,
JavaScript y elemntos HTML.

### Backend

Consiste en la conexión de un servidor de localhost de phpmyadmin. Utiliza el puerto
3000 y permite visualizar los datos de la base de datos.

Utiliza JavaScript, Express, cors y queries de SQL para mostrar los datos de la base
de datos.

### Correr el programa

Para correr el programa es necesario tener activo la aplicación de Xampp con la base
de datos del proyecto, iniciar el backend de la app con el siguiente comando

```js
node index.js
```

y correr el frontend de la app con el siguiente comando.

```js
npm run start
```
