'use strict';

let canvasElem = document.getElementById('chart')

//* TODO:
 //* - Instantiate a new AppState

 let chartData = new AppState();

//  * - Use a method on that AppState to load vote data from localStorage.
chartData.loadItems();

//  * - Create a data object for chart.js using your AppState's allProducts array.
//  * - Combine the data object with configuration information for chart.js type, colors, etc
//  * - Call chart.js with the configuration and the canvasElem


 
function renderChart() {
const productNames = [];
const productViews = [];
const productClicks = [];

for (let i = 0; i < chartData.allProducts.length; i++) {
productNames.push(chartData.allProducts[i].name);
productViews.push(chartData.allProducts[i].views);
productClicks.push(chartData.allProducts[i].clicks);
}

const data = {
    labels: productNames,
    datasets: [
        {
            label: "Views",
            data: productViews,
            backgroundColor: ["blue"],
            borderColor: ["green"],
            borderWidth: 1,
        },
        {
            label: "Clicks",
            data: productClicks,
            backgroundColor: ["green"],
            borderColor: ["blue"],
            borderWidth: 1,
        }
    ]
};

const config = {
    type: "bar",
    data: data,
};

const myChart = new Chart(canvasElem, config)

}

renderChart();
