(function($){
  $.fn.cycletext = function(quotes, options){
    var settings = $.extend({
      fadeInSpeed: 2000,
      displayDuration: 7000,
      fadeOutSpeed: 2000,
      delay: 0,
      element: "p"
    }, options);
    var self = this;
    quotes.forEach(function(quote){
      var el = $("<" + settings.element + ">" + quote + "</" + settings.element + ">").hide();
      $(self).append(el);
    });
    var i = 0;
    function displayQuote(){
      $(self).children().eq(i).fadeIn(settings.fadeInSpeed);
      // sets duration of fadeout AND duration to display quote
      var fadeOutTimer = setTimeout(function(){
        $(self).children().eq(i).fadeOut(settings.fadeOutSpeed);
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

  };
  return this;
}(jQuery));