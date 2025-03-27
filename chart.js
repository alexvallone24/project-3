async function loadEVData() {
    try {
        // Fetch JSON data
        const response = await fetch('final_cleaned_alt_fuel_stations.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const stations = await response.json();

        if (!Array.isArray(stations)) throw new Error("Invalid JSON format: Expected an array");

        console.log("EV stations loaded:", stations.length);

        // Count EV stations per state
        const stateCounts = {};
        stations.forEach(station => {
            if (station.city) { // Ensure 'city' field is used instead of missing 'state'
                stateCounts[station.city] = (stateCounts[station.city] || 0) + 1;
            }
        });

        // Convert object to sorted array (descending order)
        const sortedStates = Object.entries(stateCounts).sort((a, b) => b[1] - a[1]).slice(0, 10); // Top 10 cities

        // Extract labels and values for the chart
        const labels = sortedStates.map(item => item[0]);
        const values = sortedStates.map(item => item[1]);

        // Render chart
        renderChart(labels, values);
    } catch (error) {
        console.error("Error loading EV stations:", error);
    }
}

function renderChart(labels, values) {
    const ctx = document.getElementById('evChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of EV Charging Stations',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Load the data when the page loads
window.onload = loadEVData;