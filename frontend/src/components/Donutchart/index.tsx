import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type chartData = {
  labels: string[];
  series: number[];
};

type chartDataRes = {
  sellerName: string;
  sum: number;
};
export function Donutchart() {
  const [chartData, setChartData] = useState<chartData>([], []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}sales/sum`).then((res) => {
      const data: chartDataRes[] = res.data;

      const dataLabels = data.map((label) => label.sellerName);
      const dataSeries = data.map((serie) => serie.sellerName);
    });
  }, []);

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
  };

  const options = {
    legend: {
      show: true,
    },
  };
  return (
    <Chart
      options={{ ...options, labels: mockData.labels }}
      series={mockData.series}
      type="donut"
      height="240px"
    />
  );
}
