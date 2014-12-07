var sweaterOne = $('#SwtOne'),
sweaterTwo = $('#SwtTwo'),
sweaterThree = $('#SwtThree'),
sizeOne = $('#sizeSwtOne'),
sizeTwo = $('#sizeSwtTwo'),
sizeThree = $('#sizeSwtThree'),
alertBox = $('#alert');

// function submit(event) {
// // so page does not refresh on submit click by default
//   event.preventDefault();
//   calcTotal();
// }

function calcTotal() {
// using valueAsNumber in place of parseInt to make sure we get number value back
// http://html5doctor.com/the-output-element/
  var sweaterOneVal = sweaterOne.val() || 0;
  var sweaterTwoVal = sweaterTwo.val() || 0;
  var sweaterThreeVal = sweaterThree.val() || 0;

  var subtotal = (sweaterOneVal * 29.99) + (sweaterTwoVal * 35.99) + (sweaterThreeVal * 19.99);
  // use toFixed method to pass in 2 decimal places
  var total = '$' + subtotal.toFixed(2);

  $('#textTotal').val(total);
}

function checkSize(quant, size) {
  if ((quant > 0) && (size != "")) {
    alertBox.fadeOut(300);
    setTimeout(function(){
      alertBox.removeClass('color1').text("");
    }, 300);
  }
  else if ((quant > 0) && (size == "")){
    alertBox.hide().addClass("color1").text("Please Enter a Size");
    alertBox.fadeIn(300);
  }
  else {
    alertBox.hide().addClass("color1").text("Please Enter a Quantity");
    alertBox.fadeIn(300);
  }
}

// Event Listeners


$(function() {
  $('#cartSweater').on('change', function(e) {
    switch(e.target.id) {
      case("SwtOne"):
      case("sizeSwtOne"):
        calcTotal();
        checkSize(sweaterOne.val(), $("#sizeSwtOne option:selected").val());
        break;
      case("SwtTwo"):
      case("sizeSwtTwo"):
        calcTotal();
        checkSize(sweaterTwo.val(), $("#sizeSwtTwo option:selected").val());
        break;
      case("SwtThree"):
      case("sizeSwtThree"):
        calcTotal();
        checkSize(sweaterThree.val(), $("#sizeSwtThree option:selected").val());
        break;
    }
  });
});
