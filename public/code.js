receivedArr = []
function setup (){
  $("#unicornNamebtn").click(
    function () {
      $.ajax({
        url: "http://localhost:5000/filteredUnicorns",
        type: "POST",
        data: {
          unicornNameFromHTTPbody: $("#unicornName").val(),
          namefilter: ($('#nameFilter').is(":checked")) ? "true" : "false",
          weightfilter: ($('#weightFilter').is(":checked")) ? "true" : "false"
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
          upperBound: $("#upperLimit").val(),
          namefilter: ($('#nameFilter').is(":checked")) ? "true" : "false",
          weightfilter: ($('#weightFilter').is(":checked")) ? "true" : "false"
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

  $("#unicornFoodbtn").click(
    function () {
      $.ajax({
        url: "http://localhost:5000/filteredbyfoodUnicorns",
        type: "POST",
        data: {
          apple: ($('#appleFilter').is(":checked")) ? "apple" : "none",
          carrot: ($('#carrotFilter').is(":checked")) ? "carrot" : "none",
          namefilter: ($('#nameFilter').is(":checked")) ? "true" : "false",
          weightfilter: ($('#weightFilter').is(":checked")) ? "true" : "false"
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
}


$(document).ready(setup);