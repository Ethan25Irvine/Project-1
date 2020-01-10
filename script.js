

$('.btn').click(function (event) {
    event.preventDefault();
    const artistSearched = $(this).siblings('input').val();
    getVideo(artistSearched);
    // newsAPI(artistSearched);
    // youTubeAPI();
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
      error: function(response){
          console.log("Request Failed");
      }
    });
  }

  function embedVideo(data) {

    for(let i = 0; i<data.items.length; i++){
        const iFrame = "<iframe height='200' width='200' src='https://www.youtube.com/embed/"+ data.items[i].id.videoId +"'></iframe>"
        const videoTitle = "<h5>"+data.items[i].snippet.title+"</h5>"
          $('#youTube').append(videoTitle);
          $('#youTube').append(iFrame);
      
    }
    

    // $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    // $('h3').text(data.items[0].snippet.title)
    // $('.description').text(data.items[0].snippet.description)
}
// function youTubeAPI(){

//     const youTubeURL = 'https://www.googleapis.com/youtube/v3/search?q=drake&type=video&key=AIzaSyD_OiIO8pDNaa1l6yj4knjqBfLmxnsxQYU'

//     $.ajax({
//             url: youTubeURL,
//             method: "GET",
//         }).then(function (Response) {
              
//             console.log(Response);
//         });
// }


// function newsAPI(artist){
//     console.log(artist);

//     // google API
//     const dayURL = 'https://gnews.io/api/v3/search?q='+artist+'&token=f2a089b473671f2cf60c9c338b0c2d06'
    
//     $.ajax({
//         url: dayURL,
//         method: "GET",
//     }).then(function (Response) {
//         // const articleTitle = Response.articles[i].title
//         // const articleDescription = Response.articles[i].description
//         // const articleImage = Response.article[i].image
//         $('.articleDisplay').empty();
//         for(let i = 0; i < 5; i++){
        

//             $('.articleDisplay').append("<div class= 'card col-lg-8'><h5>"+Response.articles[i].title+"</h5><img src='"+Response.articles[i].image+"'></img><p>"+Response.articles[i].description+"</p></div>");
        
//         }
//         console.log(Response);
//     });

// }


