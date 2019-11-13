function initMap() {
  // The location of the UTSA Campus
  var sanAntonio = { lat: 29.424122, lng: -98.493629 };
  // The map, centered at San Antonio
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: sanAntonio
  });
  // The marker, positioned at
  var marker = new google.maps.Marker({ position: sanAntonio, map: map });
}
