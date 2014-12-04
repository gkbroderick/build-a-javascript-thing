// onclick color for text field

// --------- first try

// document.getElementById("squareOne").onclick = function(){
//   document.getElementById('messagePreview').className = 'orange';
// }
// document.getElementById("squareTwo").onclick = function(){
//   document.getElementById('messagePreview').className = 'green';
// }

// --------- second try

// variable for message container ID
// variable colors 3 buttons
// access colors by data attribute: data-color
// click on square and get attribute color, check if color = color
// if true then set attribute color in message container to this.attribute

var preview = document.getElementById('messagePreview');
var colorMenu = document.getElementById('colorMenu');
var colors = colorMenu.dataset.color;

document.querySelector('[data-color="orange"]').onclick = function() {
  preview.setAttribute('data-color', 'orange');
}
document.querySelector('[data-color="green"]').onclick = function() {
  preview.setAttribute('data-color', 'green');
}
document.querySelector('[data-color="blue"]').onclick = function() {
  preview.setAttribute('data-color', 'blue');
}


//  event delegation

// var colorMenu = document.querySelectorAll(".colorMenu colorBtn");
// var createColorHandler = function(button) {
//   return function() {
//     if(!button.classList.contains("active"))
//       button.classList.add("active");
//     else
//       button.classList.remove("active");
//   };
// };

// for(var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", createToolBarButtonHandler(buttons[i]));
// }


// create a holiday message, using event fuction
document.getElementById('message').onkeyup = function() {
  document.getElementById('messagePreview').value = this.value;
}
