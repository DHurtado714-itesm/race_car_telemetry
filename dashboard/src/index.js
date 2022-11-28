import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

// Prosidebar component
import { ProSidebarProvider } from "react-pro-sidebar"

// App
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
    <Router>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </Router>
  </>
)
