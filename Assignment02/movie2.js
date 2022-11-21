var PAGE_SIZE;
var CURRENT_PAGE = 1;

display_page = () => {
  console.log(PAGE_SIZE)
  console.log(CURRENT_PAGE)
   $.ajax
    (
      {
        url: "https://api.themoviedb.org/3/movie/top_rated?api_key=8b35647f9448076a6df7d25f874f6d3b&language=en-US&page=1",
        type: "GET",
        success: function (data) 
        {
          let start_index = PAGE_SIZE * (CURRENT_PAGE - 1);
          let end_index = PAGE_SIZE * (CURRENT_PAGE - 1) + PAGE_SIZE;
          for (i = start_index; i < end_index; i++) {
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
    }
    
paginate_buttons = () => {
  $.ajax
  (
    {
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=8b35647f9448076a6df7d25f874f6d3b&language=en-US&page=1",
      type: "GET",
      success: function (data) 
      {
      for(i = 1; i <= Math.ceil(data.results.length / (PAGE_SIZE)); i++) {
        $("#pagebuttons").append(
          `
          <button value="${i}" id="pagebtn">${i}</button>
          `
          )
          console.log($("#pagebtn").val())
        }
      }
    }
  )
}

setup = function() {
  PAGE_SIZE = $("#pagesizemenu option:selected").val();

  $("#searchbtn").click(() => {
    $("main").empty()
    $("aside").empty()
    $("#pagebuttons").empty()
    display_page()
    paginate_buttons()
  })

  $("#pagesizemenu").change(() => {
    // PAGE_SIZE = $("#pagesizemenu").val();
    PAGE_SIZE = $("#pagesizemenu option:selected").val();
    console.log("PAGESIZE", PAGE_SIZE);
    $("main").empty();
    $("aside").empty();
    $("#pagebuttons").empty();
    display_page();
    paginate_buttons()
  })

  $("#prevbtn").click(() => {
    PAGE_SIZE = $("#pagesizemenu option:selected").val();
    CURRENT_PAGE -= 1
    $("main").empty()
    display_page()
  })

  $("#nextbtn").click(() => {
    PAGE_SIZE = $("#pagesizemenu option:selected").val();
    CURRENT_PAGE += 1
    $("main").empty()
    display_page()
  })

  $("body").on("click", "#pagebtn", function () {
    PAGE_SIZE = $("#pagesizemenu option:selected").val();
    CURRENT_PAGE = $("#pagebtn").val();
    $("main").empty()
    display_page()
  })

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