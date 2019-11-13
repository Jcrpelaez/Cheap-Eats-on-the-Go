//ready document for JQuery
$(document).ready(function() {
  var address = "";
  var city = "";
  var state = "";
  var zip = "";
  // Button click functions Add button and Clear buttons
  $("#findPlaces").on("click", function(event) {
    event.preventDefault();
    address = $("#address").val();
    city = $("#city").val();
    state = $("#state").val();
    zip = $("#zip").val();
    
    hideForm();
    getPlaces();
  });
});

function hideForm(){
    $('#myDiv').hide();
}

function showmap(){
    //calls array of points to drop markers
}

function getPlaces() {
    //finds 10 places and stores an array of points


    //show map
    showmap();
}
