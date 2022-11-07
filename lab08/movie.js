



setup = function() 
{
  $.ajax
  (
    {
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=8b35647f9448076a6df7d25f874f6d3b&language=en-US&page=1",
      type: "GET",
      success: function (data) 
      {
        // console.log(data);
        for (i= 0; i <data.results.length; i++)
        {
          $("main").append (
            `
            <div>
            ${data.results[i].title}
            <p>
            ${data.results[i].overview}
            </p>
            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"
            style="width: 100%;">
            <button movieID="${data.results[i].backdrop_path}" class="backdropBtn"> BackDrop Image </button>
            <hr>
            </div>
            `
          )
        }
      }
    }
  )
  $("body").on("click", ".backdropBtn", function (){
    // console.log(`https://image.tmdb.org/t/p/w300/${$(this).attr('movieID')}`)
    $("aside").html(
      `
      <img src="https://image.tmdb.org/t/p/w300/${$(this).attr('movieID')}">
      `
    )
  })
}




$(document).ready(setup)