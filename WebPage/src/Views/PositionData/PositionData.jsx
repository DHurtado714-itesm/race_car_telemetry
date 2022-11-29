// mui material
import { Box, Typography, useTheme } from "@mui/material"

// Components
import Header from "../../Components/Header/Header"

// Hooks
import Time from "../../Hooks/TimeStamp/Time"
import Weather from "../../Hooks/Weather/Weather"

// themes
import { tokens } from "../../theme"

/**
 * @brief
 * Renders the Position Graph view
 * @params {Object} props
 * @returns {JSX.Element} Position Graph view
 */
const PositionData = ({ longitudeArray, latitudeArray }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const coordinates = []

  return (
    <Box m="20px" max-height="100vh">
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
        <Header title="Position Graph" subtitle="Renders the kart's path" />
        <Box justifyContent={"flex-end"}>
          <Time display="flex" padding="10px 0" />
          <Weather />
        </Box>
      </Box>
      {/* Graph element */}
      <Box width="90%">
        <Typography variant="h2" sx={{ color: colors.text }}>
          Eaw Position Data at Kartodrome, Queretaro
        </Typography>
        <Typography>Track length: 2km</Typography>
        <Box></Box>
      </Box>
    </Box>
  )
}

export default PositionData
