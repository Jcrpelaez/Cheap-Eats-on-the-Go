// function initMap() {
//   // The location of the UTSA Campus
//   var sanAntonio = { lat: 29.424122, lng: -98.493629 };
//   var markerOne = { lat: 30, lng: -80 };
//   var markerTwo = { lat: 28, lng: -100 };
//   // The map, centered at San Antonio
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center:
//   });
//   // // The marker, positioned at UTSA
//   // var marker = new google.maps.Marker({ position: sanAntonio, map: map });
//   var marker = new google.maps.Marker({ position: markerOne, map: map });
//   var marker = new google.maps.Marker({ position: markerTwo, map: map });
// }
var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 31.968599, lng: -99.90181 }
  });

  marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: { lat: 31.327, lng: -99.067 }
  });
  marker.addListener("click", toggleBounce);

  markerTwo = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: { lat: 31.324, lng: -99.069 }
  });
  marker.addListener("click", toggleBounce);

  markerThree = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: { lat: 31.328, lng: -99.066 }
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
