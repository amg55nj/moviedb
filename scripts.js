$(document).ready(function(){

   $('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });

   var api_key = "api_key";

   var getPoster = function(){

        var film = $('#term').val();

         if(film == ''){

            $('#poster').html("<h3 class='loading'>Please enter a movie title.</h3>");

         } else {

            $('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");

            $.getJSON("http://api.themoviedb.org/3/search/movie?query=" + escape(film) + "&api_key=" + api_key + "&callback=?", function(json) {
               if (json != ""){
                     $('#poster').html('<img id="thePoster" src="https://image.tmdb.org/t/p/w185' + json.results[0].poster_path + '" />');
                  } else {
                     $.getJSON("http://api.themoviedb.org/3/search/movie?query=goonies&api_key=" + api_key, function(json) {
                        console.log(json);
                        $('#poster').html('<h2 class="loading">We\'re afraid nothing was found for that search. Perhaps you were looking for The Goonies?</h2><img id="thePoster" src=https://image.tmdb.org/t/p/w185' + json.results[0].poster_path + '" />');
                      });
                      }
                    });
                   }
                   return false;
                 }
   $('#search').click(getPoster);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

});
