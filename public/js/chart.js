<script src="https://cdn.jsdelivr.net/npm/handlebars@4.7.7/dist/handlebars.min.js"></script>

const template = Handlebars.compile($('#pie-chart-template').html());

// Holds the data, it is static currently
const data = {
  labels: ["Food", "Furniture", "Child Care"],
  values: [500, 1000, 800],
  colors: ["#FF6384", "#36A2EB", "#FFCE56"],
  label: "Expenses",
  hoverOffset: 4,
  responsive: false,
  maintainAspectRatio: false
};

const html = template(data);
$('#chart-container').html(html);