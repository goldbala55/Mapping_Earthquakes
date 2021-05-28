// Add console.log to check to see if our code is working.
console.log("working");

/* prior options commented

  // Create the map object with a center and zoom level.
  //let map = L.map("mapid").setView([30, 30], 2);


      // Add GeoJSON FeatureCollection data for SFO Airport.
      let sanFranAirport = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              id: "3469",
              name: "San Francisco International Airport",
              city: "San Francisco",
              country: "United States",
              faa: "SFO",
              icao: "KSFO",
              alt: "13",
              "tz-offset": "-8",
              dst: "A",
              tz: "America/Los_Angeles",
            },
            geometry: {
              type: "Point",
              coordinates: [-122.375, 37.61899948120117],
            },
          },
        ],
      };

      // Add the SFO GeoJSON data to the map with features

      // L.geoJSON(sanFranAirport).addTo(map);

      L.geoJson(sanFranAirport, {
        // We turn each feature into a marker on the map.
        pointToLayer: function (feature, latlng) {
          console.log(feature);
          return L.marker(latlng).bindPopup(
            "<h2>" +
              feature.properties.name +
              "</h2>" +
              "<hr></hr>" +
              "<h3>" +
              feature.properties.city +
              "," +
              feature.properties.country +
              "</h3>"
          );
        },
      }).addTo(map);


  L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    onEachFeature: function (feature, layer) {
      console.log(layer);
      layer.bindPopup(
        "<h2>" +
          "Airport Code: " +
          feature.properties.faa +
          "</h2>" +
          "<hr></hr>" +
          "<h3>" +
          "Airport name: " +
          feature.properties.name +
          "</h3>"
      );
    },
  }).addTo(map);


  // We create the tile layer that will be the background of our map.
  // add tileLayers for light and dark views
  let light = L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY,
    }
  );

  let dark = L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY,
    }
  );
*/

/*
    Alternative map styles
    mapbox/streets-v11
    mapbox/outdoors-v11
    mapbox/light-v10
    mapbox/dark-v10
    mapbox/satellite-v9
    mapbox/satellite-streets-v11
    mapbox/navigation-day-v1
    mapbox/navigation-night-v1
*/

// add tileLayers for streets and satellite-streets views
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

let satelliteStreets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Create a base layer that holds both maps.
let baseMaps = {
  Streets: streets,
  "Satellite Streets": satelliteStreets,
};

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets],
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL (always load larger, slower data after display)
let airportData =
  "https://raw.githubusercontent.com/goldbala55/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData =
  "https://raw.githubusercontent.com/goldbala55/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods =
  "https://raw.githubusercontent.com/goldbala55/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
  color: "#0000FF",
  // color: "#FFFFA1",
  fillColor: "#FFFFA1",
  weight: 1,
};

// Grabbing our GeoJSON data
d3.json(torontoHoods).then(function (data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJson(data).addTo(map);
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function (feature, layer) {
      //console.log(layer);
      layer.bindPopup(
        "<h2>" + "Neighborhood: " + feature.properties.AREA_NAME + "</h2>"
      );
    },
  }).addTo(map);
  //}).addTo(map);
});
