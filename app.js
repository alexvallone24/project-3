// 1. Create the base map
// Center it roughly on Washington State, with a zoom of your choice
let myMap = L.map("map", {
    center: [47.4, -120.7], // approx center for WA
    zoom: 7
  });
  
  // 2. Add a tile layer (basemap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors'
  }).addTo(myMap);
  
  // 3. Load your JSON file. 
  //    Replace "ev-data.json" with the actual path to your JSON.
  d3.json("ev-data.json").then(function(data) {
    console.log("First row:", data[0]);

    let heatArray = [];
  
    // 4. Loop over each record
    data.forEach(record => {
        const locString = record["Vehicle Location"];
      
        if (!locString) {
          // This row is missing "Vehicle Location" or spelled differently
          console.log("Missing Vehicle Location for this record:", record);
          return;
        }
      
        // Now safely call .match()
        const match = locString.match(/POINT \((-?\d+(\.\d+)?) (\d+(\.\d+)?)\)/);
        if (!match) {
          console.log("Could not parse location string:", locString);
          return;
        }
      
        // Parse out lon, lat, push to heat array, etc.
        const lon = parseFloat(match[1]);
        const lat = parseFloat(match[3]);
        heatArray.push([lat, lon]);
      });
      
    // 5. Create the heat layer using the array of lat/lon points
    //    Adjust radius/blur to taste
    let heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    });
  
    // 6. Add it to the map
    heat.addTo(myMap);
  });