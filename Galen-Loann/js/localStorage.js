// Adapted from: http://jsfiddle.net/arunpjohny/4EwQy/

$(window).load(function(){
  if (window.localStorage) {
    $('.persisted-text').keyup(function () {
        localStorage.setItem(this.name, this.value);
    }).val(function() {
        return localStorage.getItem(this.name);
    })
  }
});
