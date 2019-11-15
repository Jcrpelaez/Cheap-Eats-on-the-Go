var locations = [
  ["The Alamo", 29.425594, -98.274856],
  ["The Missions", 29.36186, -98.47923],
  ["UTSA DownTown", 29.422933, -98.502937]
];

// var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 29.424122, lng: -98.493629 }
  });

  for (i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: { lat: locations[i][1], lng: locations[i][2] }
    });
  }
}
