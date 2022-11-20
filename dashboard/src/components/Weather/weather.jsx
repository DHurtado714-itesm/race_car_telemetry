import React, { useState, useEffect } from "react"
// react weather components
import { ReactWeather, useOpenWeather } from "react-open-weather"

const Weather = () => {
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)

      console.log("Latitude: ", lat)
      console.log("Longitude: ", long)
    })
  }, [lat, long])

  const { data, isLoading, errorMessage, lang } = useOpenWeather({
    key: "896b72d256039e0e52fb67b7a25e591e",
    lat: lat,
    long: long,
    lang: "en",
    unit: "standard",
  })

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang={lang}
      locationLabel="Current Position"
      unitsLabel={{ tempetarure: "C", windSpeed: "km/h" }}
      showForecast
    />
  )
}

export default Weather
