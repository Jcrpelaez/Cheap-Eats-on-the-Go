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

  $.ajax(settings).done(function (response) {
    console.log(response);
    //$("#info").text(response.listings[0].address);

  });



  //show map
  showmap();
}
