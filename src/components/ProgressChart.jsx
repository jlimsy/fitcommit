import { Bar, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
// import { progressData } from "../assets/test_data/test_progress_data";

export default function ProgressChart({ progressData }) {
  console.log("ProgressData", progressData);

  const formatDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
    return formattedDate;
  };

  const findMaxWeight = () => {
    const arrOfWeights = progressData.map((data) => data.weight);
    arrOfWeights.sort((a, b) => a - b);
    const maxWeight = arrOfWeights[arrOfWeights.length - 1];
    console.log("maxweight", arrOfWeights, maxWeight);

    return maxWeight * 1.2;
  };

  findMaxWeight();

  return (
    <>
      <Line
        data={{
          labels: progressData.map((data) => formatDate(data.date)),
          datasets: [
            {
              data: progressData.map((data) => data.weight),
              backgroundColor: "#fafafa",
              borderColor: "#89fa00",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: progressData[0]?.exercise,
              font: { size: 16 },
              color: "#89fa00",
              align: "start",
            },
            legend: { display: false },
          },
          scales: {
            y: { min: 0, max: findMaxWeight },
          },
        }}
      />
    </>
  );
}
