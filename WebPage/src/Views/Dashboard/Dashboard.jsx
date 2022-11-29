// mui components
import { Box, Typography, useTheme } from "@mui/material"

// Mui icons
import LocationOutlined from "@mui/icons-material/LocationOnOutlined"
import CarOutlined from "@mui/icons-material/DirectionsCarFilledOutlined"
import TemperatureOutliend from "@mui/icons-material/ThermostatOutlined"
import SpeedOutlined from "@mui/icons-material/SpeedOutlined"

// Components
import Header from "../../Components/Header/Header"
import StatBox from "../../Components/Stats/Stats"
import ScatterPlot from "../../Components/Graphs/ScatterPlot/ScatterPlot"

// Hooks
import Time from "../../Hooks/TimeStamp/Time"
import Weather from "../../Hooks/Weather/Weather"
import BackendAPI from "../../Hooks/BackendAPI/BackendAPI"
import DataEntries from "../../Hooks/DataEntries/DataEntries"

// Theme
import { tokens } from "../../theme"

/**
 * @brief
 * Dashboard component
 * @return {JSX.Element} Dashboard
 */
const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const coordinates = []

  let { data, isPending } = BackendAPI()
  let { longitudeArray, latitudeArray, velocityArray, temperatureArray } =
    DataEntries(data)

  for (let i = 0; i < longitudeArray.length; i++) {
    coordinates.push({
      x: longitudeArray[i],
      y: latitudeArray[i],
    })
  }

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          "@media (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Header title="Electrum Racing Qro" subtitle="Welcome, D. Hurtado" />
        <Box justifyContent={"flex-end"}>
          <Time display="flex" padding="10px 0" />
          <Weather />
        </Box>
      </Box>

      {/* Grid and Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="1.4rem"
        sx={{
          "@media screen and (max-width: 768px)": {
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "140px",
          },
        }}
      >
        {/* Row #1 */}
        {/* First element: Race Location */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Queretaro"
            subtitle="Queretaro"
            progress="Kartodrome Qro"
            left="Race time: 04:00:00"
            icon={
              <LocationOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>
        {/* Second element: Race Lap Counter */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Race Laps"
            subtitle="Cajas"
            progress="50 lap"
            left="01:00:00"
            icon={
              <CarOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>
        {/* Third element: Temperature from the engine */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Current"
            subtitle="Motor Temperature"
            progress={`${temperatureArray[temperatureArray.length - 1]}°C`}
            left={`Prev: ${temperatureArray[temperatureArray.length - 2]} °C`}
            icon={
              <TemperatureOutliend
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>
        {/* Fourth element: Velocity */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Speed"
            subtitle="Instantaneous Velocity"
            progress={velocityArray[velocityArray.length - 1]}
            left={`Prev: ${velocityArray[velocityArray.length - 2]} km/h`}
            icon={
              <SpeedOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>

        {/* Second Row */}
        <Box
          gridColumn="span 8"
          backgroundColor={colors.primary[400]}
          gridRow="span 4"
        >
          {/* First Element: Scatter Plot */}
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              "@media (max-width: 600px)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            {/* Name and Location theme */}
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "1.2rem",
                    textAlign: "center",
                  },
                }}
              >
                Race Track Dispersion Map
              </Typography>
              <Typography
                variant="h5"
                fontWeight="400"
                color={colors.greenAccent[500]}
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "1rem",
                    textAlign: "center",
                  },
                }}
              >
                Kartodrome, Queretaro
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "0.8rem",
                    textAlign: "center",
                  },
                }}
              >
                Track race length: 2km
              </Typography>
              <Box
                sx={{
                  "@media (max-width: 600px)": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                  },
                }}
              >
                <ScatterPlot data={coordinates} />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Second element: */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            "@media (max-width: 600px)": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            },
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.grey[100]}
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "1.2rem",
                    textAlign: "center",
                  },
                }}
              >
                Initial Track Position
              </Typography>
              <Typography
                variant="h5"
                fontWeight="400"
                color={colors.greenAccent[500]}
              >
                Longitude, Latitude
              </Typography>
              <Typography
                m="20px 0px"
                sx={{
                  "@media (max-width: 600px)": {
                    display: "none",
                  },
                }}
              >
                The following coordinates are the initial position of the kart
                in the track. They are used for tracking the number of laps the
                kart has completed, distance traveled, and the lap time for each
                lap.
              </Typography>

              <Box display={"flex"} m="30px 10px">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.grey[100]}
                >
                  {longitudeArray[0]}, {latitudeArray[0]}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Third element: Team Stats */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                Team Stats
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Shows the teams up-to-date stats
              </Typography>
              <Typography
                sx={{
                  "@media (max-width: 600px)": {
                    display: "none",
                  },
                }}
              >
                Provides the user with up to date stats of the team. The stats
                are updated after each race and are used to determine the team's
                position in the championship.
              </Typography>
              <Typography variant="h6" mt="15px">
                Total Races: 120 races
              </Typography>
              <Typography variant="h6" mt="15px">
                Races Won: 56 races
              </Typography>
              <Typography variant="h6" mt="15px">
                Total km: 18,000
              </Typography>
              <Typography variant="h6" mt="15px">
                Total race time: 36:00
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
