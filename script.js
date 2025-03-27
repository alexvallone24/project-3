// script.js

// Load the JSON data using D3
d3.json("electric_vehicles.json").then(function(data) {
    // Count the occurrences of each 'Make'
    let makeCounts = {};

    // Loop through the data and count occurrences of 'Make'
    data.forEach(function(d) {
        let make = d['Make'];
        if (make in makeCounts) {
            makeCounts[make]++;
        } else {
            makeCounts[make] = 1;
        }
    });

    // Prepare the data for plotting
    let makes = Object.keys(makeCounts);
    let counts = makes.map(make => makeCounts[make]);

    // Create the bar chart with Plotly
    var trace = {
        x: makes,  // Make names on the x-axis
        y: counts,  // Counts on the y-axis
        type: 'bar',  // Bar chart
        marker: {
            color: 'blue'  // Set the color of the bars
        }
    };

    var layout = {
        title: 'Electric Vehicle Make Distribution',  // Chart title
        xaxis: { title: 'Make' },
        yaxis: { title: 'Count' },
        width: 800,  // Set the width
        height: 600  // Set the height
    };

    // Plot the chart
    Plotly.newPlot('chart', [trace], layout);
});
