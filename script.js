myArray = ["Hello!", "Wonderful!", "You're the best!", "Hooray!"];

var options = {
  fadeInSpeed: 500,
  displayDuration: 1000,
  fadeOutSpeed: 500,
  delay: 2000
};


function cycletext(selector, quotes, options){
  var self = this;
  if (typeof selector === "object"){
    options = quotes;
    quotes = selector;
    self = document.querySelector(selector);
  }
  var settings = {
    fadeInSpeed: 2000,
    displayDuration: 7000,
    fadeOutSpeed: 2000,
    delay: 0,
    element: "p"
  };
  if (typeof options === "object"){
    for (var option in options){
      settings[option] = options[option];
    }
  }
  quotes.forEach(function(quote){
    var el = document.createElement(settings.element);
    el.innerHTML = quote;
    el.style.display = 'none';
    selector.appendChild(el);
  });

  function fadeIn(el, time) {
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

  function fadeOut(el, time) {
    el.style.opacity = 1;
    var last = +new Date();
    var tick = function() {
      el.style.opacity = -el.style.opacity - (new Date() - last) / time;
      last = +new Date();
      if (+el.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }

  var i = 0;
  function displayQuote(){
    var el = self.children.eq(i);
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


