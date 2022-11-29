import React from "react"

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js"
import { Scatter } from "react-chartjs-2"

// mui components
import { Box } from "@mui/material"

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

const ScatterPlot = (props) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,

        ticks: {
          stepSize: 1,
        },
      },
    },
  }

  const data = {
    datasets: [
      {
        label: "Position Graph",
        data: props.data,
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  }

  return (
    <Box
      // styles
      styles={{
        height: "100%",
        width: "100%",
      }}
    >
      <Scatter options={options} data={data} />
    </Box>
  )
}

export default ScatterPlot
