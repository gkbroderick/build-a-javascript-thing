var message = document.getElementById("message"),
messagePreview = document.getElementById("messagePreview");
message.addEventListener("keypress", function(){
  messagePreview.value = message.value;
}, false);

// onclick color for text field
document.getElementById("colorMenu").addEventListener("click",function(e) {
  var preview = document.getElementById('messagePreview');
  var colorCheck = e.target.getAttribute('data-color');
  if (colorCheck === 'red') {
    preview.setAttribute('data-color', 'red');
  }
  else if (colorCheck === 'green') {
    preview.setAttribute('data-color', 'green');
  }
  else if (colorCheck === 'blue') {
    preview.setAttribute('data-color', 'blue');
  }
});

// create a holiday message, using event fuction
document.getElementById('message').onkeyup = function() {
  document.getElementById('messagePreview').value = this.value;
}
