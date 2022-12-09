receivedArr = []
function showdetails (unicornName, detailbutton) {
  console.log(detailbutton)
  elementid = unicornName.id
  buttonid = detailbutton.id
  var x = document.getElementById(elementid);
  var y = document.getElementById(buttonid);
  console.log(x)
  if (x.style.display === "none") {
    x.style.display = "block";
    $(y).html("Hide Details")
  } else {
    x.style.display = "none";
    $(y).html("Show Details")
  }
}
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
  $("#unicornGenderbtn").click(
    function () {
      $.ajax({
        url: "http://localhost:5000/filteredbygenderUnicorns",
        type: "POST",
        data: {
          gender: $("#genderfilter").val() ,
          namefilter: ($('#nameFilter').is(":checked")) ? "true" : "false",
          weightfilter: ($('#weightFilter').is(":checked")) ? "true" : "false"
        },
        success: function (data) {
          console.log(data);
          receivedArr = data;
          result = "";
          result += "<ul>"
          data.map((unicorn) => {
              result += `<li>${unicorn["name"]}</li>`
              result += `<button id="${unicorn["name"]}btn" onclick="showdetails(${unicorn["name"]}details, ${unicorn["name"]}btn)">Show details</button>`
              result += `<ul id="${unicorn["name"]}details" style="display:none;">`
              result += `<li>dob: ${unicorn["dob"]}</li>`
              result += `<li>loves:</li>`
              result += `<ul>`
              for (var food in unicorn["loves"]){
                result += `<li>${unicorn["loves"][food]}</li>`
              }
              result += `</ul>`
              result += `<li>weight: ${unicorn["weight"]}</li>`
              if (unicorn["gender"] == "f"){result += `<li>gender: female</li>`}
              else {result += `<li>gender: male</li>`}
              if (unicorn["vampires"] != null){
                result += `<li>vampires: ${unicorn["vampires"]}</li>`
              }
              result += `</ul>`
            })
          result += "</ul>"


          // $("#result").html(JSON.stringify(data))
          $("#result").html(result)
        }
      })
    }
  )
}


$(document).ready(setup);