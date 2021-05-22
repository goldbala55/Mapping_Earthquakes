// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// change the view to be between LAX/SFO and zoom in a bit
let map = L.map("mapid").setView([30.1975, -97.6664], 5);

// Coordinates for each point to be used in the line.
// LAX: [33.9416, -118.4085]
// SFO: [37.6213, -122.3790]
// SLC: [40.7899, -111.9791]
// SEA: [47.4502, -122.3088]
// JFK: [40.641766, ‑73.780968]
// AUS: [30.1975, -97.6664]
// TPS: [43.6777, -79.6248]
let line = [
  [37.6213, -122.379],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.641766, -73.780968],
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  dashArray: "20 10",
  weight: "4",
}).addTo(map);

// We create the tile layer that will be the background of our map.
/*
    Alternative map styles
    mapbox/streets-v11
    mapbox/outdoors-v11
    mapbox/light-v10
    mapbox/dark-v10
    mapbox/satellite-v9
    mapbox/satellite-streets-v11
*/
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
