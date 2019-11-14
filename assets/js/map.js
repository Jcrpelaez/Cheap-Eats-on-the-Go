function init(){
  var mapOptions={
    center: new google.maps.LatLng(40,-73),
    mapTypeId: google.maps.mapTypeId.ROADMAP,
    zoom:13
  };
  venueMap = new google.maps.map(document.getElementById('map'), mapOptions);
}

function loadScript(){
  var script = document
}
var points = [];
for (var i = 0; i < latitude.length; i++) {
  points.push(new google.maps.LatLng(latitude[i], longitude[i]));
}