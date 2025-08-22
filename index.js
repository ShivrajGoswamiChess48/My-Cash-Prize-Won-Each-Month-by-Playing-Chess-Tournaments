const xValues = ["September 2025", "October 2025", "November 2025", "December 2025", "January 2026"];
const yValues = [800, 800, 800, 800, 800];
const barColors = ["blue", "blue","blue","blue","blue"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {...}
});
