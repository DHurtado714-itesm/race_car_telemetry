import { Typography, Box, useTheme } from "@mui/material"

// theme
import { tokens } from "../../theme"

const Header = ({ title, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box mb="30px">
      <Typography
        variant="h1"
        color={colors.grey[100]}
        fontWeigt="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h3"
        color={colors.greenAccent[400]}
        fontWeight="bold"
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header
