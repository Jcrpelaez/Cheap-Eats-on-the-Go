// created an array to give each marker a name, latitude and longitude
var locations = [
  ["The Alamo", 29.425594, -98.274856],
  ["The Missions", 29.36186, -98.47923],
  ["UTSA DownTown", 29.422933, -98.502937]
];
// Created function to get the map
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 29.424122, lng: -98.493629 }
  });
}
//ready document for JQuery

$(document).ready(function () {
  var street = "";
  var city = "";
  var state = "";

  // Button click functions Add button and Clear buttons
  $("#findPlaces").on("click", function (event) {
    //reset
    $("#errorAddress").hide();
    $("#errorCity").hide();
    $("#errorState").hide();
    //sets all flags to flase
    var fieldCheck = [false, false, false];
    var finalCheck = false;
    //gets values
    event.preventDefault();
    street = $("#address").val();
    city = $("#city").val();
    state = $("#state").val();

    //validation section
    fieldCheck[0] = _.isEmpty(street);
    fieldCheck[1] = _.isEmpty(city);
    fieldCheck[2] = _.isEmpty(state);
    //flags
    if (fieldCheck[0]) {
      $("#errorAddress").show();
      finalCheck = true;
    }
    if (fieldCheck[1]) {
      $("#errorCity").show();
      finalCheck = true;
    }
    if (fieldCheck[2]) {
      $("#errorState").show();
      finalCheck = true;
    }
  

    //after validation is confirmed hide form and go through next functions
    if (!finalCheck) {
      hideForm();
      getPlaces(street, city, state);
    }

  });
});

function hideForm() {
  $('#myDiv').hide();
}

function showmap() {
  //calls array of points to drop markers
  // created an array to give each marker a name, latitude and longitude
  
}

function getPlaces(street, city, state) {
  //finds 10 places and stores an array of points
  var address = encodeURIComponent(street + "," + " " + city + "," + " " + state);
  console.log(address);

  var listings = [];

  //Ajax call being set up
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?address=" + address + "&compCount=10",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com",
      "x-rapidapi-key": "c403db74fcmsh82c18191678d823p1aeb6ajsneba4140264a8"
    }
  }

  //Ajax call taking place and displaying results
  $.ajax(settings).done(function (response) {
    console.log(response);

    // $("#results").append("<table><thead><tr><th>Address</th><th>Bedroom</th><th>Bathroom</th><th>Price</th></tr></thead><tbody>");
    $("#results").append("<tbody>");

    for (x = 0; x < response.listings.length; x++) {
      //console.log("test");

      $("#results").append("<tr><");

      results = [
        response.listings[x].latitude,
        response.listings[x].longitude,
        response.listings[x].formattedAddress,
        response.listings[x].bedrooms,
        response.listings[x].bathrooms,
        response.listings[x].price
      ];

      for (y = 2; y < results.length; y++) {
        $("#results").append("<td>" + results[y] + "</td>");
      };

      $("#results").append("</tr>");


      console.log(results[x]);

    };

    $("#results").append("</tbody></table>");

  });
  showmap();
}      
