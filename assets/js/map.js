function initMap() {
  // The location of Uluru
  var sanAntonio = { lat: 29.424122, lng: -98.493629 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: sanAntonio
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: sanAntonio, map: map });
}
