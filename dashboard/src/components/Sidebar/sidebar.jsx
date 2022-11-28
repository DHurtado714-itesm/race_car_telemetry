import { useState } from "react"
import { NavLink } from "react-router-dom"

// react-pro-sidebar
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"

// mui components
import { useTheme, Box, Typography, IconButton } from "@mui/material"

// mui icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"

// Data
import {
  MainOptions,
  DataValues,
  RawValues,
} from "../../assets/data/SidebarData"

// Theme
import { tokens } from "../../theme"

// Profile picture
import user from "../../assets/images/user.jpg"

// Custom Items
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      icon={icon}
      onClick={() => setSelected(title)}
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
    >
      <Typography>{title}</Typography>
      <NavLink to={to} />
    </MenuItem>
  )
}

// Sidebar Component
const CustomSidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setisCollapsed] = useState(false)
  const [selected, setSelected] = useState("dashboard")

  return (
    <Box
      sx={{
        "& .sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .menu.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar isCollapsed={isCollapsed} height="100vh">
        <Menu iconshape="square">
          {/* Logo and hambuger icon */}
          <MenuItem
            onClick={() => setisCollapsed(!isCollapsed)}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Electrum
                </Typography>
                <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User section */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="fleξ" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  //   src\assets\images\user.jpg
                  src={user}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center" mt="10px">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  D. Hurtado
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Pits
                </Typography>
              </Box>
            </Box>
          )}

          {/* Sidebar Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {/* Main navigation elements */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "50px 0 5px 20px" }}
            >
              Easy Access
            </Typography>
            {MainOptions.map((item, index) => (
              <Item
                title={item.title}
                key={index}
                to={item.path}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}

            {/* Data navigation elements */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "50px 0 5px 20px" }}
            >
              Data
            </Typography>
            {DataValues.map((item, index) => (
              <Item
                title={item.title}
                key={index}
                to={item.path}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}

            {/* Raw data */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "50px 0 5px 20px" }}
            >
              Raw Data
            </Typography>
            {RawValues.map((item, index) => (
              <Item
                title={item.title}
                key={index}
                to={item.path}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default CustomSidebar
