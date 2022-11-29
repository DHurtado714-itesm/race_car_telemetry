import { useState } from "react"
import { Link } from "react-router-dom"

// react-pro-sidebar components
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import "react-pro-sidebar/dist/css/styles.css"

// mui components
import { Box, Typography, useTheme, IconButton } from "@mui/material"

// mui icons
import { MenuOutlined } from "@mui/icons-material"

// Data
import {
  MainOptions,
  DataValues,
  RawValues,
} from "../../Assets/Data/SidebarData"

// Theme
import { tokens } from "../../theme"

// Profile picture
import user from "../../Assets/Images/user.jpg"

// SIDEBAR ITEM
/**
 * @brief
 * Renders the sidebar item
 * @param {Object} props
 * @param {String} props.icon
 */
const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      icon={icon}
      onClick={() => setSelected(title)}
      active={selected === title}
      //   styles
      style={{
        color: colors.grey[100],
      }}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

// SIDEBAR
/**
 * @brief
 * Renders the sidebar
 * @return {JSX.Element} Sidebar
 */
const CustomSidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [selected, setSelected] = useState("Dashboard")
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#6870fa !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "@media (max-width: 600px)": {
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
        },
      }}
    >
      {/* Starts with collapsed sidebar */}
      <ProSidebar
        collapsed={collapsed}
        sx={{
          "@media (max-width: 600px)": {
            height: "100%",
          },
        }}
      >
        <Menu iconShape="square">
          {/* Logo and Menu Icon */}
          <MenuItem
            onClick={toggleSidebar}
            icon={collapsed ? <MenuOutlined /> : null}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Electrum
                </Typography>
                <IconButton onClick={toggleSidebar}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* Navbar lower items */}
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" alignItems="center" justifyContent="center">
                {/* Image */}
                <img
                  alt="profile user "
                  width="100px"
                  height="100px"
                  src={user}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              {/* Name and title */}
              <Box textAlign={"center"}>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0  0" }}
                >
                  Daniel Hurtado
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Pits & Crew
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? "0" : "15px"}>
            <Typography
              variant="h6"
              color={colors.grey[100]}
              sx={{
                m: "15px 0 5px 20px",
                display: collapsed ? "none" : "block",
              }}
            >
              Easy Access
            </Typography>
            {/* Main options */}
            {MainOptions.map((option, index) => (
              <SidebarItem
                key={index}
                title={option.title}
                to={option.to}
                icon={option.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}

            {/* Data Navigation Elements */}
            <Typography
              variant="h6"
              color={colors.grey[100]}
              sx={{
                m: "15px 0 5px 20px",
                display: collapsed ? "none" : "block",
              }}
            >
              Graphs
            </Typography>
            {DataValues.map((option, index) => (
              <SidebarItem
                key={index}
                title={option.title}
                to={option.to}
                icon={option.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}

            {/* Raw Navigation Elements */}
            <Typography
              variant="h6"
              color={colors.grey[100]}
              sx={{
                m: "15px 0 5px 20px",
                display: collapsed ? "none" : "block",
              }}
            >
              Raw Data
            </Typography>
            {RawValues.map((option, index) => (
              <SidebarItem
                key={index}
                title={option.title}
                to={option.to}
                icon={option.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default CustomSidebar
