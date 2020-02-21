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
  
  var link = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
  
    function colorChange(point){
        var color = ""

        if (point.properties.mag<1){
            color = "Green";
        }
        else if (point.properties.mag<2){
            color = "lime";
        }
        else if (point.properties.mag<3){
            color = "yellow";
        }
        else if (point.properties.mag<4){
            color = "orange";
        }
        else if (point.properties.mag<5){
            color = "orangered";
        }
        else {
            color = "red";
        }
        return color;
    };


  function circles(point){
      L.circle([point.geometry.coordinates[1],point.geometry.coordinates[0]],{
          fillOpacity:0.75,
          color:"white",
          fillColor: colorChange(point),
          radius: point.properties.mag*30000
      }).addTo(map)
  }

  d3.json(link, function(data){
      L.geoJson(data,{
          pointToLayer: circles
      });
  });

