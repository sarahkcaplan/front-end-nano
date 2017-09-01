function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview


    var streetStr = $('#street').val(); //'street' is input id
    var cityStr = $('#city').val(); //'city' is input id
    var address = streetStr+', '+cityStr;

    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' +address + '';

    // YOUR CODE GOES HERE!

    $body.append('<img class="bgimg" src="' + streetviewURL + '">');

    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ cityStr + '&sort=newest&api-key=81e6f6f0b0cd433cb106e2f4c02208db'
    $.getJSON(nytimesUrl, function( data ) {

      $nytHeaderElem.text('New York Times Articles About' + cityStr);
      articles = data.response.docs;
      for(var i = 0; i < articles.length; i++) {
        var article = articles[i];
        $nytElem.append('<li class = "article">' + '<a href = "'+article.web_url+'">'
        + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
      };
    }).error(function(e){
      $nytHeaderElem.text('New York Times articles could not be loaded');
    });

    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityStr + '&format=json&callback=wikiCallback';
        $.ajax({
          url: wikiUrl,
          dataType: "jsonp",
          success: function(response) {
            var articles = response[1];
            for(var i = 0; i < articles.length; i++) {
              var articleStr = articles[i];
              var url = 'http://en.wikipedia.org/wiki/' + articleStr;
              $wikiElem.append('<li><a href="'+url+'">' + articleStr + '</a></li>');
          };
        }
      });

    return false;
};

$('#form-container').submit(loadData);
