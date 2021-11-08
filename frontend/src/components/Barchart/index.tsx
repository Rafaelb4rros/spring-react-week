import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Api } from "services/api";
import { Round } from "utils/Round";

type seriesData = {
  name: string;
  data: number[];
};

type chartData = {
  labels: {
    categories: string[];
  };
  series: seriesData[];
};

type chartDataRes = {
  sellerName: string;
  visited: number;
  deals: number;
};

export function Barchart() {
  const [chartData, setChartData] = useState<chartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "% Sucesso",
        data: [],
      },
    ],
  });

  useEffect(() => {
    Api.get<chartDataRes[]>(
      `${process.env.REACT_APP_BASE_URL}sales/success`
    ).then((res) => {
      const data: chartDataRes[] = res.data;

      const dataLabels = data.map((label) => label.sellerName);
      const dataSeries = data.map((series) =>
        Round(100 * (series.deals / series.visited), 1)
      );

      setChartData({
        labels: {
          categories: dataLabels,
        },
        series: [
          {
            name: "% Sucesso",
            data: dataSeries,
          },
        ],
      });
    });
  }, []);
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240px"
    />
  );
}
