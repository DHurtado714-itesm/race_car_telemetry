import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

// Components
import CustomSidebar from "./Components/Sidebar/CustomSidebar"
import Topbar from "./Components/Topbar/Topbar"

// Hooks
import BackendAPI from "./Hooks/BackendAPI/BackendAPI"
import DataEntries from "./Hooks/DataEntries/DataEntries"

// Views (Easy Access)
import Dashboard from "./Views/Dashboard/Dashboard"
import Calendar from "./Views/Calendar/Calendar"

// Views (Processed Data)
import SpeedGraph from "./Views/SpeedGraph/SpeedGraph"
import TempGraph from "./Views/TempGraph/TempGraph"

// Views (Raw Data)
import PositionData from "./Views/PositionData/PositionData"
import SpeedData from "./Views/VelocityData/SpeedData"

// theme
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"

// styles
import "./Styles/app.css"
import PGraph from "./Views/PGraph/PGraph"
import RawTemp from "./Views/TemperatureData/RawTemp"

/**
 * @brief
 * Main function of the application. Renders all the elements
 */
function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(false)

  let { data, isPending } = BackendAPI()
  let { longitudeArray, latitudeArray, velocityArray, temperatureArray } =
    DataEntries(data)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Layout */}
        <div className="app">
          <CustomSidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />

          <main className="content">
            <Topbar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />

            <Routes>
              {/* Easy Access Routes */}
              <Route
                path="/"
                element={
                  <Dashboard
                    longitudeArray={longitudeArray}
                    latitudeArray={latitudeArray}
                    velocityArray={velocityArray}
                    temperatureArray={temperatureArray}
                  />
                }
              />
              <Route path="/calendar" element={<Calendar />} />

              {/* Processed Data Graphs */}
              <Route
                path="/PGraph"
                element={
                  <PGraph
                    longitudeArray={longitudeArray}
                    latitudeArray={latitudeArray}
                  />
                }
              />
              <Route
                path="/SpeedGraph"
                element={<SpeedGraph speedArray={velocityArray} />}
              />
              <Route
                path="/TempGraph"
                element={<TempGraph temperatureArray={temperatureArray} />}
              />

              {/* Raw Data */}
              <Route path="/RawPosition" element={<PositionData />} />
              <Route path="/RawSpeed" element={<SpeedData />} />
              <Route path="/RawTemp" element={<RawTemp />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
