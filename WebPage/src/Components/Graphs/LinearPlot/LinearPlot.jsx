import React from "react"

import { Box } from "@mui/material"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LinearPlot = ({ datasets, labels }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        text: "title",
        display: true,
        position: "top",
        fullSize: true,
        align: "center",
        padding: 10,
      },
    },
    scales: {
      y: {
        max: 200,
        min: -200,
        ticks: {
          stepSize: 0.5,
        },
      },
      // x: {
      //   display: false,
      // },
    },
  }

  const data = {
    labels: labels,
    datasets: datasets,
  }

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
      <LinearPlot options={options} data={data} />
    </Box>
  )
}

export default LinearPlot
