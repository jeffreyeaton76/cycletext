$(document).ready(function(){

  myArray = ["Hello!", "Wonderful!", "You're the best!", "Hooray!"];




  $("#example").cycletext(myArray, {
    fadeInSpeed: 500,
    displayDuration: 1000,
    fadeOutSpeed: 500,
    delay: 2000
  });
});