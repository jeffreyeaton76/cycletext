myArray = ["Hello!", "Wonderful!", "You're the best!", "Hooray!"];

var options = {
  fadeInSpeed: 1000,
  displayDuration: 2000,
  fadeOutSpeed: 1000,
  delay: 500
};

function cycletext(selector, quotes, options){
  if (typeof selector === "object"){
    options = quotes;
    quotes = selector;
  }
  if (typeof selector === "string"){
    selector = document.querySelector(selector);
  }

  // default settings
  var settings = {
    fadeInSpeed: 2000,
    displayDuration: 7000,
    fadeOutSpeed: 2000,
    delay: 0,
    element: "p"
  };
  // adopts user-defined settings
  if (typeof options === "object"){
    for (var option in options){
      settings[option] = options[option];
    }
  }

  // creates elements for the quote to reside in
  quotes.forEach(function(quote){
    var el = document.createElement(settings.element);
    el.innerHTML = quote;
    el.style.display = "none";
    selector.appendChild(el);
  });

  // non-jQuery fadeIn
  function fadeIn(el, time) {
    el.style.display = "block";
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }

  // non-jQuery fadeOut
  function fadeOut(el, time) {
    el.style.opacity = 1;
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity - (new Date() - last) / time;
      last = +new Date();
      if (+el.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
      // I'm trying to get rid of the div so the next one appears in the same spot; this isn't accomplishing that
      if (el.style.opacity === 0){
        el.style.display = "none";
      }
    };
    tick();
  }

  // displays each quote in sequence
  var i = 0;
  function displayQuote(){
    var el = document.getElementsByTagName(settings.element).item(i);
    fadeIn(el, settings.fadeInSpeed);
    // sets duration of fadeout AND duration to display quote
    var fadeOutTimer = setTimeout(function(){
      fadeOut(el, settings.fadeOutSpeed);
      i++;
      // resets counter
      if (i === quotes.length){
        i = 0;
      }
    }, settings.displayDuration);
    // sets duration between initiating the display of a quote and the next initiation of displaying a quote
    setTimeout(function(){
      clearTimeout(fadeOutTimer);
      // recursively calls the displayQuote function
      displayQuote();
    }, settings.fadeOutSpeed + settings.displayDuration + settings.delay);
  }
  displayQuote();
}

cycletext("#example", myArray, options);

