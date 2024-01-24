import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartL = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Dataset 1",
            yAxisID: "y-axis-1",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2,
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: "Dataset 2",
            yAxisID: "y-axis-2",
            backgroundColor: "rgba(255,99,132,0.4)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      },
      options : {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
        },
      }
      ,
    });

    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} width={300} height={300}></canvas>
    </div>
  );
};

export default ChartL;
