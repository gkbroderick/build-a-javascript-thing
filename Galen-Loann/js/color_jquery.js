var message = document.getElementById("message"),
messagePreview = document.getElementById("messagePreview");
message.addEventListener("keypress", function(){
  messagePreview.innerText = message.value;
}, false);
// jquery try 1
$(function() {
  // variable for text container
  var $preview = $('#messagePreview');
  // variables for colorMenu
  var $colorMenu = $('#colorMenu');
  $colorMenu.on('click', function(e) {
    switch($(e.target).attr("data-color")) {
      case("red"):
        $preview.attr('data-color', 'red');
        console.log("RED");
        break;
      case('green'):
        $preview.attr('data-color', 'green');
        console.log("GREEN");
        break;
      case('blue'):
        $preview.attr('data-color', 'blue');
        console.log("BLUE");
        break;
    }
    if ($(e.target).attr("data-image") == "thumb-santa") {
      console.log("SANTA");
      $preview.toggleClass("large-santa")
    }
  });
});
