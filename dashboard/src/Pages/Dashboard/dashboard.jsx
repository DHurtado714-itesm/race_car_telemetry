// mui components
import { Box, Typography, useTheme } from "@mui/material"

// Mui icons
import LocationOutlined from "@mui/icons-material/LocationOnOutlined"
import CarOutlined from "@mui/icons-material/DirectionsCarFilledOutlined"
import TemperatureOutliend from "@mui/icons-material/ThermostatOutlined"

// components
import Header from "../../components/Header/header"
import Time from "../../components/Timestamp/time"
import StatBox from "../../components/Stats/stats"

// theme
import { tokens } from "../../theme"
import { SpeedOutlined } from "@mui/icons-material"

// Dashboard
const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      {/* Header elements */}
      <Box display="flex" justifyContent="space-between" align-items="center">
        <Header title="Electrum Racing Qro" subtitle="Welcome, D. Hurtado" />
        <Box justifyContent="flex-end">
          <Time display="flex" padding="10px 0" />
          <Typography variant="h4">Weather: </Typography>
        </Box>
        {/* <Weather /> */}
      </Box>

      {/* Grid and Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="1.4rem"
      >
        {/* Row #1 */}
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
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Race Laps"
            subtitle="Pilot's name"
            progress="50 lap"
            left="01:00:00"
            icon={
              <CarOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>
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
            progress="75 Celsius"
            left="Prev: 70 Celsius"
            icon={
              <TemperatureOutliend
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>
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
            progress="49.59 km/h"
            left="Prev: 49.09 km/h"
            icon={
              <SpeedOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          {/* First element */}
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Name and Location theme */}
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Race Track Dispersion Map
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Kartodrome Qro
              </Typography>
              <Typography variant="h6">Track race length: 2km</Typography>
            </Box>
          </Box>
        </Box>
        {/* Second element */}
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
                Starting Location
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Latitude, Longitude
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Third element */}
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
