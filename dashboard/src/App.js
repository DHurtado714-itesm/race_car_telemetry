import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

// Components
import Topbar from "./components/Topbar/topbar"
import CustomSidebar from "./components/Sidebar/sidebar"
import Dashboard from "./Pages/Dashboard/dashboard"

// theme
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"

// Styles
import "./Styles/app.css"

function App() {
  console.log(process.env.REACT_APP_O)
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Layout */}
        <div className="app">
          <CustomSidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />

          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />

            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
