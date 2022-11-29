// WIFI & SERVER CONFIG
#include <ESP8266WiFi.h>
const char *ssid = "Cajas";            // SSID
const char *password = "0123456789";   // Password
const char *host = "192.168.31.26";    // Server IP
const int port = 80;                   // Server Port
const int uploadInterval = 9000;       // Upload Interval
String phpDir = "/DHT22/sendData.php"; // Path to sendData.php
String setupDir = "/DHT22/setup.php";  // Path to setup.php
unsigned long previousMillis = millis();
WiFiClient client;

// DHT22 CONFIG
#include "DHT.h"           // Including the library of DHT temperature and humidity sensor
#define DHTTYPE DHT22      // DHT 22
#define dhtDpin D5         // Data conection pin for DHT22
DHT dht(dhtDpin, DHTTYPE); // Definition of sensor

// GPS CONFIG
#include <SoftwareSerial.h> //Including the library of SoftwareSerial communication
#include <TinyGPS.h>        //Including the library of GPS sentence parsing

TinyGPS gps;                    // Declaring the object gps
SoftwareSerial serialgps(4, 5); // Declaring the pin 4 Tx and 3 Rx

// Function prototypes
void sendData(String, bool show = true);
void getGPSData(float &, float &, float &, float &, float &, int &);

void setup(void)
{
  Serial.begin(115200);

  // Connect to WIFI network
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  // DHT22 setup
  dht.begin();
  Serial.println("Temperatura\n\n");
  sendData(setupDir);
  delay(500);

  // GPS setup
  serialgps.begin(9600);
  Serial.println("GPS GY-GPS6MV2");
  Serial.println(" ---Buscando senal--- ");
}

void loop()
{
  // Sends data to DB every time interval
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis > uploadInterval)
  {
    previousMillis = currentMillis;

    // Reads and prints temperature an humidity
    float temperature = dht.readTemperature();

    if (isnan(temperature))
      temperature = -99;

    // Reads GPS data
    float latitude, longitude, altitude, course, speed;
    int satellites;
    getGPSData(latitude, longitude, altitude, course, speed, satellites);
    Serial.println();

    String data;
    data += phpDir +
            "?temp=" + String(temperature) +
            "&lat=" + String(latitude) +
            "&long=" + String(longitude) +
            "&alt=" + String(altitude) +
            "&speed=" + String(speed);
    Serial.println(data);
    sendData(data);
  }
}

void getGPSData(float &latitude, float &longitude, float &altitude, float &course, float &speed, int &satellites)
{
  while (serialgps.available())
  {
    int c = serialgps.read();
    if (gps.encode(c))
    {
      gps.f_get_position(&latitude, &longitude);
      altitude = gps.f_altitude();
      course = gps.f_course();
      speed = gps.f_speed_mps();
      satellites = gps.satellites();
    }
  }
}

/**
 * @brief Sends data to server
 *
 * @param data String with data to send
 */
void sendData(String data, bool show)
{
  if (!client.connect(host, port))
  {
    Serial.println("Fallo al conectar");
    return;
  }

  // Get request to server
  client.print(String("GET ") + data + " HTTP/1.1\r\n" + "Host: " + host + "\r\n" + "Connection: close\r\n\r\n");

  unsigned long timeout = millis();

  // Wait for response
  while (client.available() == 0)
  {
    if (millis() - timeout > 5000)
    {
      Serial.println(">>> Client Timeout !");
      client.stop();
      return;
    }
  }

  // Read all the lines of the reply from server and print them to Serial
  if (show)
  {
    while (client.available())
    {
      String line = client.readStringUntil('\r');
      line.replace("<br>", "\r\n");
      if (line == String("HTTP/1.1 200 OK"))
      {
        Serial.println("Data sent to server successfully");
        // break;
      }
      Serial.print(line);
    }
  }
}