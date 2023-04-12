const data = {
  labels: ["Food", "Furniture", "Child Care"],
  values: [500, 1000, 800],
  colors: ["#FF6384", "#36A2EB", "#FFCE56"],
  label: "Expenses",
  hoverOffset: 4,
  responsive: false,
  maintainAspectRatio: false
};

// const fetchData = async () => {
//   const response = await fetch('/api/expense');
//   const { labels, values } = await response.json();
//   return { labels, values };
// };

const chartContainer = document.querySelector('#chart-container');
const canvas = document.createElement('canvas');
const chart = new Chart(canvas, {
  type: 'pie',
  data: {
    labels: data.labels,
    datasets: [{
      data: data.values,
      backgroundColor: data.colors,
      hoverOffset: data.hoverOffset
    }]
  },
  options: {
    responsive: data.responsive,
    maintainAspectRatio: data.maintainAspectRatio,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: data.label,
        font: {
          size: 18
        }
      }
    }
  }
});

chartContainer.appendChild(canvas);