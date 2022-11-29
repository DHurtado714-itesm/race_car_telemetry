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

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label
          },
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

  console.log(data)

  return (
    <Box
      sx={{
        width: "100",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",

        "& canvas": {
          width: "100% !important",
          height: "100% !important",
        },

        "& .chartjs-render-monitor": {
          width: "100% !important",
          height: "100% !important",

          "& canvas": {
            width: "100% !important",
            height: "100% !important",
          },

          "& .chartjs-size-monitor": {
            width: "100% !important",
            height: "100% !important",

            "& canvas": {
              width: "100% !important",
              height: "100% !important",
            },
          },

          "& .chartjs-size-monitor-expand": {
            width: "100% !important",
            height: "100% !important",

            "& canvas": {
              width: "100% !important",
              height: "100% !important",
            },
          },

          "& .chartjs-size-monitor-shrink": {
            width: "100% !important",
            height: "100% !important",

            "& canvas": {
              width: "100% !important",
              height: "100% !important",
            },
          },
        },
      }}
    >
      <Scatter options={options} data={data} />
    </Box>
  )
}

export default ScatterPlot
