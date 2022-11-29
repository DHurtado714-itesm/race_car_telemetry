// icons
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import SpeedOutlined from "@mui/icons-material/SpeedOutlined"
import TemperatureOutlined from "@mui/icons-material/DeviceThermostatOutlined"
import StatsOulined from "@mui/icons-material/QueryStatsOutlined"

export const MainOptions = [
  {
    title: "Dashboard",
    path: "/",
    icon: <DashboardOutlinedIcon />,
  },
  {
    title: "Race Calendar",
    path: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsOutlinedIcon />,
  },
]

export const DataValues = [
  {
    title: "Position Graph",
    path: "/PGraph",
    icon: <MapOutlinedIcon />,
  },
  {
    title: "Speed Data Graph",
    path: "/SpeedGraph",
    icon: <SpeedOutlined />,
  },
  {
    title: "Temperature Data Graph",
    path: "/TempGraph",
    icon: <TemperatureOutlined />,
  },
]

export const RawValues = [
  {
    title: "Raw Position data",
    path: "/RawPosition",
    icon: <MapOutlinedIcon />,
  },
  {
    title: "Raw Speed data",
    path: "/RawSpeed",
    icon: <SpeedOutlined />,
  },
  {
    title: "Raw Temperature data",
    path: "/RawTemp",
    icon: <TemperatureOutlined />,
  },
]
