var cdt = moment().format('YYYY-MM-DD');

var billboardlist = {
	"async": true,
	"crossDomain": true,
	"url": "https://billboard-api2.p.rapidapi.com/artist-100?date=" + cdt + "&range=1-10",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com",
		"x-rapidapi-key": "207e2be657msh6f04971c7f3e427p16486djsn0f3ffe48db38"
	}
} || []

$(function() {
 $.ajax(billboardlist).done(function (response) {
	console.log(response);
	console.log(response.content[1].artist);
	 
	for (let i = 1; i < 11; i++) {

		$('#artistlist').append(
			'<li id="A">' + response.content[i].artist+ '</li>')
		}
	console.log(response.content.length);
});
});
/*
$(function() {
    $("#searchTerm").keypress(function(e){
        if(e.keyCode===13){
            var searchTerm = $("#searchTerm").val();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
            $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json; charsest=utf-8",
                async: false,
                dataType: "json",
                success: function(data, status, jqXHR){
                    $("#output").html();
                    for(var i=0; i < data[1].length;i++){
                        console.log(data);
                        $("#output").prepend("<div><div class='btn-primary'><a href="
                        +data[3][i]+"><h1>" + data[1][i]+ "</h1>" + "<p>" + data[2][i] +
                        "</p></a></div></div>");
                    }
    
                },
            })
        }
    }); */