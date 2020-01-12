$(document).ready(function(){
    billboardFunction();
})

$('.btn').click(function (event) {
    event.preventDefault();
    const artistSearched = $(this).siblings('input').val();
    getVideo(artistSearched);

    $('#youTube').empty();
    newsAPI(artistSearched);

});


  
function getVideo(artist) {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyD_OiIO8pDNaa1l6yj4knjqBfLmxnsxQYU',
          q: artist,
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          videoEmbeddable: true,
      },
      success: function(data){
          console.log(data);
          embedVideo(data);
      },

    });
  }

  function embedVideo(data) {

    for(let i = 0; i<data.items.length; i++){

        const iFrame = "<iframe height='200' width='200' class='mb-3' src='https://www.youtube.com/embed/"+ data.items[i].id.videoId +"'></iframe>"

        const videoTitle = "<h5>"+data.items[i].snippet.title+"</h5>"
          $('#youTube').append(videoTitle);
          $('#youTube').append(iFrame);
      
    }

}

function newsAPI(artist){
    console.log(artist);

    // google API
    const dayURL = 'https://gnews.io/api/v3/search?q='+artist+'&token=f2a089b473671f2cf60c9c338b0c2d06'
    
    $.ajax({
        url: dayURL,
        method: "GET",
    }).then(function (Response) {
        // const articleTitle = Response.articles[i].title
        // const articleDescription = Response.articles[i].description
        // const articleImage = Response.article[i].image
        $('.articleDisplay').empty();
        for(let i = 0; i < 5; i++){
        

            $('.articleDisplay').append("<div class= 'card bg-primary'><img class='card-img-top' src='"+Response.articles[i].image+"'></img><div class='card-body'><h3 class='card-title'>"+Response.articles[i].title+"</h3><p class='card-text'>"+Response.articles[i].description+"</p></div></div>");
        
        }
        console.log(Response);
    });

}

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

$(function billboardFunction() {
    $.ajax(billboardlist).done(function (response) {
        console.log(response);
        console.log(response.content[1].artist);
        
        for (let i = 1; i < 11; i++) {

            $('#artistlist').append(
                '<li class="col-lg-1" id="A">' + response.content[i].artist+ '</li>')
            }
        console.log(response.content.length);
    });
});

