// mui components
import { Box, Typography, useTheme } from "@mui/material"

// theme
import { tokens } from "../../theme"

const StatBox = ({ title, subtitle, icon, progress, left }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3">{progress}</Typography>
          <Typography variant="h5">{left}</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="0px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox
