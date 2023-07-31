import React from "react";
import propTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function LineChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };
  const labels = props.labels;
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Tahun ini",
        data: props.dataset,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        fill: true,
        label: "Tahun Sebelumnya",
        data: props.datasets,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
LineChart.propTypes = {
  labels: propTypes.array,
  title: propTypes.string,
  dataset: propTypes.array,
  datasets: propTypes.array,
};
