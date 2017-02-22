# Shopping List App Challenge

This repo contains starter files for the *Shopping List App* challenge in Thinkful's Front End Web Development course.


reqs

To complete this challenge requires:

Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
Linking to an externally hosted library (jQuery) and an locally hosted JavaScript file (app.js).
Using this and event delegation
Requirements

In terms of user experience, your shopping list app must allow users to:

enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button

check and uncheck items on the list by clicking the 

"Check" button

permanently remove items from the list

Additionally:

You must use a CDN-hosted version of jQuery
Put your application code in a file called app.js and link to it in index.html
Be sure to put both script elements at the bottom of the <body> element.
Do not alter index.html or main.css other than adding the links to the external JavaScript. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

notes on toggleClass()

 This method takes one or more class names as its parameter. In the first version, if an element in the matched set of elements already has the class, then it is removed; if an element does not have the class, then it is added. For example, we can apply .toggleClass() to a simple <div>:


//random .toggleClass() example

1
<div class="tumble">Some text.</div>
The first time we apply $( "div.tumble" ).toggleClass( "bounce" ), we get the following:

1
<div class="tumble bounce">Some text.</div>
The second time we apply $( "div.tumble" ).toggleClass( "bounce" ), the <div> class is returned to the single tumble value:

1
<div class="tumble">Some text.</div>
