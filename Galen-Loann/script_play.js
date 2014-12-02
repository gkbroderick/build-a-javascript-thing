// add event listener to submit
document.getElementById('cartSweater').addEventListener('submit', calcTotal);
// create function and argument for listener
function calcTotal(event) {
// so page does not refresh on submit click by default
  event.preventDefault();
// passing variables inside function, not global
// using valueAsNumber in place of parseInt to make sure we get number value back
// http://html5doctor.com/the-output-element/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  var sweaterOne = document.getElementById('SwtOne').valueAsNumber || 0;
      sweaterTwo = document.getElementById('SwtTwo').valueAsNumber || 0;
      sweaterThree = document.getElementById('SwtThree').valueAsNumber || 0;
      sizeOne = document.getElementById('sizeSwtOne').value,
      sizeTwo = document.getElementById('sizeSwtTwo').value,
      sizeThree = document.getElementById('sizeSwtThree').value;
// making sure it works in console
  // console.log(sweaterOne);
  // console.log(sweaterTwo);
  // console.log(sweaterThree);
  // console.log(sizeOne);
  // console.log(sizeTwo);
  // console.log(sizeThree);
  var subtotal = (sweaterOne * 29.99) + (sweaterTwo * 35.99) + (sweaterThree * 49.99);
  // use toFixed method to pass in 2 decimal places
  var total = '$' + subtotal.toFixed(2);

  document.getElementById('textTotal').value = total;
}
// still need to validate quantity dropdown!
// still need to require size input, provide alert if none!
