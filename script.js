$(document).ready(function pageLoad(){
    billboardFunction();
    newsAPI();
    getVideo();
})
$("#home").click(function(){
    pageLoad();
})
$('.btn').click(function (event) {
    event.preventDefault();
    const artistSearched = $(this).siblings('input').val();
    getVideo(artistSearched);
    $('#youTube').empty();
    newsAPI(artistSearched);
});


//   youtube api
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
        const videoTitle = "<h5 class='text-light'>"+data.items[i].snippet.title+"</h5>"
          $('#youTube').append(videoTitle);
          $('#youTube').append(iFrame);
      
    }
}

// googleNews API
function newsAPI(artist){
    console.log(artist);

    
    const dayURL = 'https://gnews.io/api/v3/search?q='+artist+'&token=f2a089b473671f2cf60c9c338b0c2d06'
    
    $.ajax({
        url: dayURL,
        method: "GET",
    }).then(function (Response) {
       
        $('.articleDisplay').empty();
        for(let i = 0; i < 5; i++){
        

            $('.articleDisplay').append("<div class= 'card bg-dark text-white mb-3'><img class='card-img-top' src='"+Response.articles[i].image+"'></img><div class='card-body'><a href='"+Response.articles[i].url+"' target='_blank' ><h3 class='card-header' >"+Response.articles[i].title+"</h3></a><p id='articletext'>"+Response.articles[i].description+"</p></div></div>");
        
        }
        console.log(Response);
    });

}


// // billboard top 10 list api 

function billboardFunction() {
const cdt = moment().format('YYYY-MM-DD');

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://billboard-api2.p.rapidapi.com/artist-100?date=2020-01-11&range=1-10",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com",
		"x-rapidapi-key": "207e2be657msh6f04971c7f3e427p16486djsn0f3ffe48db38"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    for (let i = 1; i < 11; i++) {

        $('#artistlist').append('<li id="A">' + response.content[i].artist+ '</li>')
        
    }
});

}
