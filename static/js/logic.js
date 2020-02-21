var map = L.map('map', {
    center: [37, -115],
    zoom: 5
  });
  
  // Adding tile layer
  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.light',
      accessToken: 'pk.eyJ1IjoieW1tcm91ZSIsImEiOiJjazZiZ3MwYTExMWJ3M2xwanZ6OW5lajYxIn0.O8KZLS5_yo6Hs9eID_lQLw'
    }
  ).addTo(map);
  
  
  // BetaNYC Failed us, use local backup
  // var link = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
  // "35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";
  
  var link = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
  
  // Grabbing our GeoJSON data..
  d3.json(link, function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map);
  });
