var sweaterOne = document.getElementById('SwtOne'),
sweaterTwo = document.getElementById('SwtTwo'),
sweaterThree = document.getElementById('SwtThree'),
sizeOne = document.getElementById('sizeSwtOne'),
sizeTwo = document.getElementById('sizeSwtTwo'),
sizeThree = document.getElementById('sizeSwtThree'),
alertBox = document.getElementById('alert');

function submit(event) {
// so page does not refresh on submit click by default
  event.preventDefault();
  calcTotal();
}

function calcTotal() {
// using valueAsNumber in place of parseInt to make sure we get number value back
// http://html5doctor.com/the-output-element/
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
    alertBox.classList.remove("color1");
    alertBox.textContent = "";
  }
  else if ((quant > 0) && (size == "")){
    alertBox.classList.add("color1");
    alertBox.textContent = "Please Enter a Size";
  }
  else {
    alertBox.classList.add("color1");
    alertBox.textContent = "Please Enter a Quantity";
  }
}

// Event Listeners

document.getElementById("cartSweater").addEventListener("change",function(e) {
    switch(e.target.id) {
      case("SwtOne"):
      case("sizeSwtOne"):
        calcTotal();
        checkSize(sweaterOne.value, sizeSwtOne.value);
        break;
      case("SwtTwo"):
      case("sizeSwtTwo"):
        calcTotal();
        checkSize(sweaterTwo.value, sizeSwtTwo.value);
        break;
      case("SwtThree"):
      case("sizeSwtThree"):
        calcTotal();
        checkSize(sweaterThree.value, sizeSwtThree.value)
        break;
    }
});
