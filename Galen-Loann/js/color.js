var message = document.getElementById("message"),
messagePreview = document.getElementById("messagePreview");


message.addEventListener("keypress", function(){
  messagePreview.value = message.value;
}, false);

// onclick color for text field

document.getElementById("squareOne").onclick = function(){
  document.getElementById('messagePreview').className = 'orange';
}
document.getElementById("squareTwo").onclick = function(){
  document.getElementById('messagePreview').className = 'green';
}
