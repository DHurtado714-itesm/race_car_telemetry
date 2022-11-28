import React from "react"
import CanvasJSReact from "../../lib/canvasjs.react"
import { Box } from "@mui/material"

var CanvasJS = CanvasJSReact.CanvasJSReact
var CanvasJSChart = CanvasJSReact.CanvasJSChart

var dps = [
  { x: 1, y: 10 },
  { x: 2, y: 13 },
  { x: 3, y: 18 },
  { x: 4, y: 20 },
  { x: 5, y: 17 },
  { x: 6, y: 10 },
  { x: 7, y: 13 },
  { x: 8, y: 18 },
  { x: 9, y: 20 },
  { x: 10, y: 17 },
]

var xVal = dps.length + 1
var yVal = 15
var updateInterval = 1000

class PositionGraph extends React.Component {
  constructor() {
    super()
    this.updateChart = this.updateChart.bind(this)
  }

  componentDidMount() {
    setInterval(this.updateChart, updateInterval)
  }

  updateChart() {
    yVal = yVal + Math.round(5 + Math.random() * (-5 - 5))
    dps.push({ x: xVal, y: yVal })
    xVal++
    if (dps.length > 10) {
      dps.shift()
    }
    this.chart.render()
  }

  render() {
    const options = {
      title: {
        text: "Live Data",
      },
      data: [
        {
          type: "line",
          dataPoints: dps,
        },
      ],
    }

    return (
      <Box width="1000px" height="700px" mt="25px">
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </Box>
    )
  }
}

export default PositionGraph
