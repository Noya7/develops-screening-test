import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import classes from "./Chart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PopulationChart = ({ data }) => {
  const years = data.map((item) => item.year);
  const populationValues = data.map((item) => item.value);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Population",
        data: populationValues,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Population growth",
        font: { size: 18 },
      },
      legend: { display: true, position: "top" },
    },
    scales: {
      x: { title: { display: true, text: "Year" } },
      y: {
        title: { display: true, text: "Population" },
        beginAtZero: false,
      },
    },
  };

  return (
    <div className={classes.main}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PopulationChart;
