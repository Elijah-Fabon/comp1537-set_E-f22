receivedArr = []
function setup (){
  $("#unicornNamebtn").click(
    function () {
      $.ajax({
        url: "http://localhost:5000/filteredUnicorns",
        type: "POST",
        data: {
          unicornNameFromHTTPbody: $("#unicornName").val()
        },
        success: function (data) {
          console.log(data);
          receivedArr = data;
          result = "";
          result += "<table>"
          data.map((unicorn) => {
            if (unicorn["vaccinated"] == true)
              result += `<tr class="highlight">`
            else
              result += `<tr>`
            for (var field in unicorn) {
              result += `<td>${unicorn[field]}</td>`
            }
            result += `</tr>`
            })
          result += "</table>"


          // $("#result").html(JSON.stringify(data))
          $("#result").html(result)
        }
      })
    }
  )
  $("#unicornWeightbtn").click(
    function () {
      $.ajax({
        url: "http://localhost:5000/filteredbyweightUnicorns",
        type: "POST",
        data: {
          lowerBound: $("#lowerLimit").val(),
          upperBound: $("#upperLimit").val()
        },
        success: function (data) {
          console.log(data);
          receivedArr = data;
          result = "";
          result += "<table>"
          data.map((unicorn) => {
            if (unicorn["vaccinated"] == true)
              result += `<tr class="highlight">`
            else
              result += `<tr>`
            for (var field in unicorn) {
              result += `<td>${unicorn[field]}</td>`
            }
            result += `</tr>`
            })
          result += "</table>"


          // $("#result").html(JSON.stringify(data))
          $("#result").html(result)
        }
      })
    }
  )
  $("#nameFilter").change(function () {
    if (this.checked) {
      newArr = receivedArr.map((item) => {
        return item.name;
      })
      console.log(newArr);
      $("#result").html(JSON.stringify(newArr[0]))
    }else{
      newArr = receivedArr.map((item) => {
        return item;
      })
      $("#result").html(JSON.stringify(newArr[0]))
    }
  });
}


$(document).ready(setup);