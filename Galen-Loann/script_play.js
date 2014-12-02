var sweaterOne = document.getElementById('SwtOne'),
sweaterTwo = document.getElementById('SwtTwo'),
sweaterThree = document.getElementById('SwtThree'),
sizeOne = document.getElementById('sizeSwtOne'),
sizeTwo = document.getElementById('sizeSwtTwo'),
sizeThree = document.getElementById('sizeSwtThree'),
alert = document.getElementById('alert'),
numList = ["One", "Two", "Three"];

function submit(event) {
// so page does not refresh on submit click by default
  event.preventDefault();
  calcTotal();
}

function calcTotal() {
// passing variables inside function, not global
// using valueAsNumber in place of parseInt to make sure we get number value back
// http://html5doctor.com/the-output-element/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  var sweaterOneVal = sweaterOne.valueAsNumber || 0;
  var sweaterTwoVal = sweaterTwo.valueAsNumber || 0;
  var sweaterThreeVal = sweaterThree.valueAsNumber || 0;

  var subtotal = (sweaterOneVal * 29.99) + (sweaterTwoVal * 35.99) + (sweaterThreeVal * 19.99);
  // use toFixed method to pass in 2 decimal places
  var total = '$' + subtotal.toFixed(2);

  document.getElementById('textTotal').value = total;
}

function checkSize(quant, size) {
  if ((quant > 0) && (size != "")) {
    alert.classList.remove("color1");
    alert.textContent = "THANKS";
  }
  else if ((quant > 0) && (size == "")){
    alert.classList.add("color1");
    alert.textContent = "Please Enter a Size";
  }
  else {
    alert.classList.add("color1");
    alert.textContent = "Please Enter a Quantity";
  }
}

// Event Listeners

document.getElementById('cartSweater').addEventListener('submit', submit);

sweaterOne.addEventListener("change", function(){
    calcTotal();
    checkSize(sweaterOne.value, sizeSwtOne.value);
  },false);

sizeSwtOne.addEventListener("change", function(){
    checkSize(sweaterOne.value, sizeSwtOne.value);
  },false);

sweaterTwo.addEventListener("change", function(){
    calcTotal();
    checkSize(sweaterTwo.value, sizeSwtTwo.value);
  },false);

sizeSwtTwo.addEventListener("change", function(){
    checkSize(sweaterTwo.value, sizeSwtTwo.value);
  },false);

sweaterThree.addEventListener("change", function(){
    calcTotal();
    checkSize(sweaterThree.value, sizeSwtThree.value);
  },false);

sizeSwtThree.addEventListener("change", function(){
    checkSize(sweaterThree.value, sizeSwtThree.value);
  },false);
