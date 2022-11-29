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
 * Renders the Speed Graph view
 * @params {Object} props
 * @returns {JSX.Element} Position Graph view
 */
const SpeedData = ({ speedArray }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  console.log(speedArray)

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
        <Header title="Speed Data" subtitle="Renders the kart's speed" />
        <Box justifyContent={"flex-end"}>
          <Time display="flex" padding="10px 0" />
          <Weather />
        </Box>
      </Box>

      {/* Graph element */}
      <Box width="90%">
        <Typography variant="h2" sx={{ color: colors.text }}>
          Raw Kart's Speed at Kartdrome, Queretaro
        </Typography>
      </Box>
    </Box>
  )
}

export default SpeedData
