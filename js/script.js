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

    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    return false;

    // // Your NYTimes AJAX request goes here

    // var nytURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
    //     cityStr + '&sort=newest&api-key=81e6f6f0b0cd433cb106e2f4c02208db';

    // $.getJSON(nytURL, function(data) {

    //     $nytHeaderElem.text('New York Times Articles About '+ cityStr);

    //     articles = data.response.docs;
    //     for (var i = 0; i < articles.length; i++) {
    //         var article = articles[i];
    //         $nytElm.append('<li class="article">'+
    //             '<a href="'+article.web_url+'">'+article.headline.main+
    //                 '</a>'+
    //                 '<p>' + article.snippet + '</p>'+
    //             '</li>');
    //     };
    // });
};

$('#form-container').submit(loadData);
