(function($){

//fetch a random quote post http://localhost:8888/project5/wp-json/wp/v2/posts

//load all the posts and count them and then do a random number from 1 to whatver

//history api mdn HISTORYpushstate

//submit a new quote with the form using jquery 

$( '#new-quote-button' ).on( 'click', function ( s ) {
    s.preventDefault();
    $.ajax({
      url: '/project5/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
          success: function ( data ) {


            var quoteUrl = data[0]._qod_quote_source_url;
            var quoteSource = data[0]._qod_quote_source;


            if(quoteUrl.length > 0){
            $(".entry-content").empty();
            $(".entry-content").append(data[0].content.rendered);
            $(".entry-title").empty();
            $(".entry-title").append("&mdash;" + data[0].title.rendered + ",");
            $(".source").empty();
            $(".source").append(' ' + '<a href="' + data[0]._qod_quote_source_url + '">' + data[0]._qod_quote_source + '</a>');

            } else if(quoteSource.length > 0 ){
            $(".entry-content").empty();
            $(".entry-content").append(data[0].content.rendered);
            $(".entry-title").empty();
            $(".entry-title").append("&mdash;" + data[0].title.rendered + ",");
            $(".source").empty();
            $(".source").append(' ' + data[0]._qod_quote_source);

            }else{
            $(".entry-content").empty();
            $(".entry-content").append(data[0].content.rendered);
            $(".entry-title").empty();
            $(".entry-title").append("&mdash;" + data[0].title.rendered);
            $(".source").empty();
            $(".source").append(data[0]._qod_quote_source);

            }
            
            


    }});

  } );


  // submit a new quote from the form, e.g. button .on click form .submit
  // post request wp-json/wp/v2/posts
  // before send nonce authentication, it's in the slides from wp ajax lesson


})(jQuery);