var address = "9534%20Beau%20Brg%2C%20San%20Antonio%2C%20TX";
var bedrooms = 4;
var bathrooms = 2;
var propertyType = "Single%20Family";
var squareFootage = 1600;
var results = 1;

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?address=" + address + "&bedrooms=" + bedrooms + "&bathrooms=" + bathrooms + "&propertyType=" + propertyType + "&squareFootage=" + squareFootage + "&compCount=" + results,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com",
		"x-rapidapi-key": "c403db74fcmsh82c18191678d823p1aeb6ajsneba4140264a8"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	$("#info").text(response.listings[0].address);
});