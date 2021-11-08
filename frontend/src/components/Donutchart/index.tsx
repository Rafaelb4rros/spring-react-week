import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type chartData = {
  labels: string[];
  series: number[];
};

type chartDataRes = {
  sallerName: string;
  sum: number;
};

export function Donutchart() {
  const [chartData, setChartData] = useState<chartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}sales/sum`).then((res) => {
      const data: chartDataRes[] = res.data;

      const dataLabels = data.map((label) => label.sallerName);
      const dataSeries = data.map((serie) => serie.sum);

      setChartData({ labels: dataLabels, series: dataSeries });
    });
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };
  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240px"
    />
  );
}
