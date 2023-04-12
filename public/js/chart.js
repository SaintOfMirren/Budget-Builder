fetch("/api/expense")
  .then(res => res.json())
  .then(expenses => {
    console.log(expenses)
    const categories = expenses.map(item => item.category)
    const amounts = expenses.map(item => item.amount)
    const data = {
      labels: categories,
      values: amounts,
      colors: ["#FF6384", "#36A2EB", "#FFCE56"],
      label: "Expenses",
      hoverOffset: 4,
      responsive: false,
      maintainAspectRatio: false
    };

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
  })


