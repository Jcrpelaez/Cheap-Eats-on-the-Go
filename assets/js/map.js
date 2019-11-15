// created an array to give each marker a name, latitude and longitude
var locations = [
  ["The Alamo", 29.425594, -98.274856],
  ["The Missions", 29.36186, -98.47923],
  ["UTSA DownTown", 29.422933, -98.502937]
];
// Created function to get the map
function initMap() {
  // created an array to hold the locations "info"
  var info = [];
  // created an array to add a new marker
  var points = [];
// adds the map to the page and centers it over San Antonio
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 29.424122, lng: -98.493629 }
  });
// Created for loop to add new markers
  for (i = 0; i < locations.length; i++) {
    var infowindow = new google.maps.InfoWindow({
      content: locations[i][0]
    });
    info.push(infowindow);

    var marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: { lat: locations[i][1], lng: locations[i][2] }
    });
    points.push(marker);
// listens to click to pop up info on each marker
    marker.addListener("click", function() {
      info[0].open(map, points[0]);
      info[1].open(map, points[1]);
      info[2].open(map, points[2]);
    });
  }
}
