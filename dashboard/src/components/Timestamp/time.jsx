import React from "react"

// mui components
import { Typography } from "@mui/material"

/**
 * @brief
 * Timestamp component for the dashboard
 * @param {Object} props
 * @returns {JSX.Element} Timestamp component
 */
class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleString(),
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    })
  }

  render() {
    return <Typography variant="h3">{this.state.time}</Typography>
  }
}

export default Time
