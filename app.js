//ready document for JQuery
$(document).ready(function () {
  var street = "";
  var city = "";
  var state = "";
  //var zip = "";
  // Button click functions Add button and Clear buttons
  $("#findPlaces").on("click", function (event) {
    event.preventDefault();
    street = $("#address").val();
    city = $("#city").val();
    state = $("#state").val();
    zip = $("#zip").val();

    hideForm();
    getPlaces(street, city, state);
  });
});

function hideForm() {
  $('#myDiv').hide();
}

function showmap() {
  //calls array of points to drop markers
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

    $("#results").append("<table class='table'><thead><tr><th scope='col'>Address</th><th scope='col'>Bedroom</th><th scope='col'>Bathroom</th><th scope='col'>Price</th></tr></thead><tbody>");

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

    // var rows = [];

    // function makeRows() {

    //   for (i = 2; i < results.length; i++) {
    //     var $row = $("<tr></tr>");
    //     $row.append($("<td></td>")).text(results[i]);
    //     $row.push(rows)
    //   };

    //   $("#results").append(rows)

    //   };

    // var $row = $("<tr></tr>");

    // $row.append($("<td></td>")).text(listing[2]);
    // $row.append($("<td></td>")).text(listing[5]);

    // $tableBody.append($row);

    // $("#results").after($tableBody);



  });



  //show map
  showmap();
}
