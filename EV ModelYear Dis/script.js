// script.js

// Load the JSON data using D3
d3.json("electric_vehicles.json").then(function(data) {
    // Count the occurrences of each 'Model Year'
    let modelYearCounts = {};

    // Loop through the data and count occurrences of 'Model Year'
    data.forEach(function(d) {
        let year = d['Model Year'];
        if (year in modelYearCounts) {
            modelYearCounts[year]++;
        } else {
            modelYearCounts[year] = 1;
        }
    });

    // Prepare the data for plotting
    let years = Object.keys(modelYearCounts);
    let counts = years.map(year => modelYearCounts[year]);

    // Create the bar chart with Plotly
    var trace = {
        x: years,  // Model years on the x-axis
        y: counts,  // Counts on the y-axis
        type: 'bar',  // Bar chart
        marker: {
            color: 'blue'  // Set the color of the bars
        }
    };

    var layout = {
        title: 'Electric Vehicle Model Year Distribution',  // Chart title
        xaxis: { title: 'Model Year' },
        yaxis: { title: 'Count' },
        width: 800,  // Set the width
        height: 600  // Set the height
    };

    // Plot the chart
    Plotly.newPlot('chart', [trace], layout);
});
