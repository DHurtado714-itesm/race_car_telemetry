import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

// Components
import CustomSidebar from "./Components/Sidebar/CustomSidebar"
import Topbar from "./Components/Topbar/Topbar"

// Hooks
import BackendAPI from "./Hooks/BackendAPI/BackendAPI"
import DataEntries from "./Hooks/DataEntries/DataEntries"

// Views
import Dashboard from "./Views/Dashboard/Dashboard"
import Calendar from "./Views/Calendar/Calendar"

// theme
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"

// styles
import "./Styles/app.css"

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
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
