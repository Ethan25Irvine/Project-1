//wikipedia AJAX request here
      var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' 
      + cityStr + '&format=json&callback=wikiCallback';

      $.ajax({
          url: wikiUrl,
          dataType: "jsonp",
          // json callback,
          success: function(Response) {
              var articleList = response[1];

              for (var i =0; i < articleList.length; i++) {
                  articleStr = articleList[i];
                  var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                  $wikiElem.append('<li><a href="' + url + '">' + 
                    articleStr + '</a></li>');
              };
          }
      });
      console.log(articleStr);