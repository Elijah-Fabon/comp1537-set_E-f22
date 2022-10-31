function addhandler () {
  console.log("Add")
  
  x = parseInt($("#firstop").val());
  y = parseInt($("#secondop").val());
  result = `${x} + ${y} = ${x + y}`;
  colouredresult = `
  <span style="background-color:blue">
  ${result}
  <button class="hidebtn">Hide</button>
  </span>
  <br>
  `
  $('#result').html("Result: " + result);
  $('#history').append(colouredresult)
}

function subhandler () {
  console.log("Subtract")
  
  x = parseInt($("#firstop").val());
  y = parseInt($("#secondop").val());
  result = `${x} - ${y} = ${x - y}`;
  colouredresult = `
  <span style="background-color:yellow">
  ${result}
  <button class="hidebtn">Hide</button>
  </span>
  <br>
  `
  $('#result').html("Result: " + result);
  $('#history').append(colouredresult)
}

function multihandler () {
  console.log("Multiply")
  
  x = parseInt($("#firstop").val());
  y = parseInt($("#secondop").val());
  result = `${x} * ${y} = ${x * y}`;
  colouredresult = `
  <span style="background-color:red">
  ${result}
  <button class="hidebtn">Hide</button>
  </span>
  <br>
  `
  $('#result').html("Result: " + result);
  $('#history').append(colouredresult)
}

function divhandler () {
  console.log("Divide")
  
  x = parseInt($("#firstop").val());
  y = parseInt($("#secondop").val());
  result = `${x} / ${y} = ${x / y}`;
  colouredresult = `
  <span style="background-color:green">
  ${result}
  <button class="hidebtn">Hide</button>
  </span>
  <br>
  `
  $('#result').html("Result: " + result);
  $('#history').append(colouredresult)
}

function hidehandler() {
  console.log('hidehandler')
  $(this).parent().hide();
}

function clrhandler() {
  console.log('clear');
  $("#history").empty();
}

function setup () {
  $("#add").click(addhandler)
  $("#subtract").click(subhandler)
  $("#multiply").click(multihandler)
  $("#divide").click(divhandler)
  $("body").on('click', '.hidebtn', hidehandler)
  $("#clear").click(clrhandler)
}

$(document).ready(setup);