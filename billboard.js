var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://billboard-api2.p.rapidapi.com/artist-100?date=2020-01-01&range=1-10",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com",
		"x-rapidapi-key": "207e2be657msh6f04971c7f3e427p16486djsn0f3ffe48db38"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});