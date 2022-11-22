import { Typography, Box } from "@mui/material"
import { useState, useEffect } from "react"

const Weather = () => {
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchAPI() {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      })

      if ((lat, lon)) {
        try {
          const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

          const res = await fetch(fetchUrl)
          const data = await res.json()
          setWeather(data)
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
          console.log("error: ", error)
        }
      }
    }
    fetchAPI()
  }, [lat, lon])

  return (
    <Box>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box>
          <Typography variant="h4">
            {weather.name}: {weather.main.temp}°C
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default Weather
