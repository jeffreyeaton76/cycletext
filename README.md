###Cycletext!

The cycletext jQuery plugin is designed to create a dramatic fadeIn/fadeOut-type display for important text. Example use cases are quotes from reviews of your product, from inside your text-based product (book/article/etc), or from famous people relevant to your site.

The cycletext.js file is formatted as a Universal Module Definition (UMD), so it is compatible with AMD, CommonJS, and can be used in a plain browser setup.

###How to Use

Call cycletext on a div where you want your quotes displayed. Cycletext reads your quotes from an array and takes an object to adjust the default settings.

The default settings are as follows:
fadeInSpeed: 2000,
displayDuration: 7000,
fadeOutSpeed: 2000,
delay: 0,
element: "p"

###Example

HTML
```
  <div id="example"></div>
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <script src="cycletext.js"></script>
  <script src="yourScript.js"></script>
```

yourScript.js
```
$(document).ready(function(){

yourArray = ["Hello!", "Wonderful!", "You're the best!", "Hooray!"];

var options = {
  fadeInSpeed: 1000,
  displayDuration: 2000,
  fadeOutSpeed: 1000,
  delay: 500
};

$("#example").cycleText(yourArray, options);

});
```

If you spot any bugs please let me know/open an issue on GitHub.

###Licence

Copyright (c) Jeffrey Eaton

Licensed under the [MIT License](https://github.com/jeffreyeaton76/cycletext/blob/master/LICENSE.md)

