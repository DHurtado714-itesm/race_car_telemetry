import { useState, useEffect } from "react"

// mui components
import { Typography, Box } from "@mui/material"

/**
 * @brief
 * Gets the current weather from Open Weather API
 * @return {JSX.Element} Weather
 */
const Weather = () => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(true)
  // Get the current location
  useEffect(() => {
    async function fetchWeatherAPI() {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      })

      if ((lat, lon)) {
        try {
          const fetchURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

          const res = await fetch(fetchURL)
          const data = await res.json()

          setWeather(data)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error)
        }
      }
    }
    fetchWeatherAPI()
  }, [lat, lon])

  return (
    <Box
      sx={{
        "@media (max-width: 600px)": {
          display: "none",
        },
      }}
    >
      {loading ? (
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
