const questions = [
    /*
    HTML: Category 0
    CSS: Category 1
    JavaScript: Category 2
     */
  {
    id: 0,
    category: 0,
    question: 'What does HTML stand for?',
    answers: ['Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language'],
    correctAnswerID: 1
  },
  {
    id: 1,
    category: 0,
    question: 'Who is making the Web standards?',
    answers: ['The World Wide Web Consortium','Microsoft','Mozilla', 'Google'],
    correctAnswerID: 0
  },
  {
    id: 2,
    category: 0,
    question: 'Choose the correct HTML element for the largest heading:',
    answers: ['<h1>','<head>','<heading>', '<h6>'],
    correctAnswerID: 0
  },
  {
    id: 3,
    category: 0,
    question: 'What sort of language is HTML?',
    answers: ['A scripting language','A programming language','A styling language', 'A markup language'],
    correctAnswerID: 3
  },
  {
    id: 4,
    category: 0,
    question: 'Which is the correct syntax to include a comment in an HTML document?',
    answers: ['//','/* Comment */','// Comment //', '<!-- Comment -->'],
    correctAnswerID: 3
  },
  {
    id: 5,
    category: 0,
    question: 'Can we hide content using a comment?',
    answers: ['Yes','No'],
    correctAnswerID: 0
  },
  {
    id: 6,
    category: 0,
    question: 'Which element or tag defines a paragraph?',
    answers: ['<p>','<pre>','<panel>', 'None of the above'],
    correctAnswerID: 0
  },
  {
    id: 7,
    category: 0,
    question: 'Which tag or element defines the HTML documents body?',
    answers: ['<html>','<htmLbody>','<bdy>', '<body>'],
    correctAnswerID: 3
  },
  {
    id: 8,
    category: 0,
    question: 'Which tag contains the meta information about the HTML page?',
    answers: ['<html>','<title>','<head>', '<body>'],
    correctAnswerID: 2
  },
  {
    id: 9,
    category: 0,
    question: 'Which tag is the root element of an HTML page?',
    answers: ['<html>','<title>','<head>', '<body>'],
    correctAnswerID: 0
  },
  {
    id: 10,
    category: 0,
    question: 'Who invented HTML?',
    answers: ['Dave Ragett','Tim Berners-Lee','Denis Ritchie', 'All of the above'],
    correctAnswerID: 1
  },
  {
    id: 11,
    category: 0,
    question: 'HTML tags with no content are called',
    answers: ['Special tags','Advanced tags','Empty tags', 'Other tags'],
    correctAnswerID: 2
  },
  {
    id: 12,
    category: 0,
    question: 'What is the correct sequence of HTML tags for starting a webpage?',
    answers: ['head, title, html','title, head, html','html, head, title'],
    correctAnswerID: 2
  },
  {
    id: 13,
    category: 0,
    question: 'Is HTML case sensitive?',
    answers: ['Yes','No'],
    correctAnswerID: 1
  },
  {
    id: 14,
    category: 0,
    question: 'HTML headings are defined with the following tags',
    answers: ['<head1> to <head6>','<p1> to <p6>','<h1> to <h6>','<h1> to <h3>'],
    correctAnswerID: 2
  },
  {
    id: 15,
    category: 0,
    question: 'Which tag is used to display a horizontal rule or line?',
    answers: ['<br>','<hr>','<hr></hr>', '<line>'],
    correctAnswerID: 1
  },
 {
    id: 16,
    category: 0,
    question: 'Which tag is used to define a line break?',
    answers: ['<\n>','<lr>','<br>', '<br></br>'],
    correctAnswerID: 2
  },
  {
    id: 17,
    category: 0,
    question: 'Which HTML attribute is used to define styles of an element?',
    answers: ['<style>','<css>','style', 'css'],
    correctAnswerID: 2
  },
  {
    id: 18,
    category: 0,
    question: 'In HTML, you can embed SVG elements directly into an HTML page.',
    answers: ['True', 'False'],
    correctAnswerID: 0
  },
  {
    id: 19,
    category: 0,
    question: 'How can you create an email link?',
    answers: ['<a href="mailto:xxx@yyy">','<a href="xxx@yyy">','<mail href="mailto:xxx@yyy">', '<mail="mailto:xxx@yyy">'],
    correctAnswerID: 0
  },
  {
    id: 20,
    category: 0,
    question: 'A Radio Button allows a user to select',
    answers: ['more than 1 item.','only one item.'],
    correctAnswerID: 1
  },
  {
    id: 21,
    category: 0,
    question: 'What is the correct HTML for adding a background color?',
    answers: ['<body bg="yellow">','<body style="background-color:yellow;">',' <background>yellow</background>', 'Other'],
    correctAnswerID: 1
  },
  {
    id: 22,
    category: 0,
    question: 'How can we change our paragraph text color to red?',
    answers: ['<p style="color: #ff0000;">','<p style="color: red;">','Both of the above', 'None of the above'],
    correctAnswerID: 2
  },
  {
    id: 23,
    category: 0,
    question: 'How can you open a link in a new tab/browser window?',
    answers: ['<a href="url" new>','<a href="url" target="_blank">','<a href="url" target="new">', 'None of the above'],
    correctAnswerID: 1
  },
  {
    id: 24,
    category: 0,
    question: 'Inline elements are normally displayed without starting a new line.',
    answers: ['True','False','None of the above'],
    correctAnswerID: 0
  },
  {
    id: 25,
    category: 0,
    question: 'How can you make a numbered list?',
    answers: ['<ol>', '<ul>', '<dl>', '<list>'],
    correctAnswerID: 0
  },
  {
    id: 26,
    category: 0,
    question: 'What is the correct HTML for making a checkbox?',
    answers: ['<input type="checkbox">', '<check>', '<checkbox>', '<input type="check">'],
    correctAnswerID: 2
  },
  {
    id: 27,
    category: 0,
    question: 'What is the correct HTML for inserting an image?',
    answers: ['<img href="image.gif" alt="MyImage">', '<img src="image.gif" alt="MyImage">', '<image src="image.gif" alt="MyImage">', '<img alt="MyImage">image.gif</img>'],
    correctAnswerID: 1
  },
  {
    id: 28,
    category: 0,
    question: 'An <iframe> is used to display a web page within a web page.',
    answers: ['True','False','There is no <iframe> element.'],
    correctAnswerID: 0
  },
  {
    id: 29,
    category: 0,
    question: 'Which doctype is correct for HTML5?',
    answers: ['<!DOCTYPE html>', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">', '<!DOCTYPE HTML5>'],
    correctAnswerID: 0
  },
    // END HTML QUESTIONS

    // START CSS QUESTIONS
  {
    id: 30,
    category: 1,
    question: 'What does CSS stand for?',
    answers: ['Cascading Style Sheets','Colorful Style Sheets','Creative Style Sheets', 'Computer Style Sheets'],
    correctAnswerID: 0
  },
  {
    id: 31,
    category: 1,
    question: 'What is the correct HTML for referring to an external style sheet?',
    answers: ['<stylesheet>mystyle.css</stylesheet>','<style src="mystyle.css">',' <link rel="stylesheet" type="text/css" href="mystyle.css">'],
    correctAnswerID: 2
  },
  {
    id: 32,
    category: 1,
    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    answers: ['At the end of the document','In the <head> section',' In the <body> section'],
    correctAnswerID: 1
  },
  {
    id: 33,
    category: 1,
    question: 'Which HTML tag is used to define an internal style sheet?',
    answers: ['<script>','<css>',' <style>'],
    correctAnswerID: 2
  },
  {
    id: 34,
    category: 1,
    question: 'Which HTML attribute is used to define inline styles?',
    answers: ['font','class','styles','style'],
    correctAnswerID: 2
  },
  {
    id: 35,
    category: 1,
    question: 'Which is the correct CSS syntax?',
    answers: [' {body;color:black;}','body {color: black;}','{body:color=black;}'],
    correctAnswerID: 1
  },
  {
    id: 36,
    category: 1,
    question: 'How do you insert a comment in a CSS file?',
    answers: ['// this is a comment','/* this is a comment */','// this is a comment //'],
    correctAnswerID: 1
  },
  {
    id: 37,
    category: 1,
    question: 'Which property is used to change the background color?',
    answers: ['background-color','bgcolor','color'],
    correctAnswerID: 0
  },
  {
    id: 38,
    category: 1,
    question: 'How do you add a background color for all <h1> elements?',
    answers: ['h1 {background-color:#FFFFFF;}','h1.all {background-color:#FFFFFF;}','all.h1 {background-color:#FFFFFF;}'],
    correctAnswerID: 1
  },
  {
    id: 39,
    category: 1,
    question: 'Which CSS property is used to change the text color of an element?',
    answers: ['text-color','color','fgcolor'],
    correctAnswerID: 1
  },
  {
    id: 40,
    category: 1,
    question: 'Which CSS property controls the text size?',
    answers: ['text-size','text-style','font-size','font-style'],
    correctAnswerID: 2
  },
  {
    id: 41,
    category: 1,
    question: 'What is the correct CSS syntax for making all the <p> elements bold?',
    answers: ['p {font-weight:bold;}','<p style="font-size:bold;">','p {text-size:bold;}','<p style="text-size:bold;">}'],
    correctAnswerID: 0
  },
  {
    id: 42,
    category: 1,
    question: 'How do you display hyperlinks without an underline?',
    answers: ['a {text-decoration:none;}','a {underline:none;}','a {text-decoration:no-underline;}'],
    correctAnswerID: 0
  },
  {
    id: 43,
    category: 1,
    question: 'How do you make each word in a text start with a capital letter?',
    answers: ['You cannot do that with CSS','text-style:capitalize','text-transform:capitalize'],
    correctAnswerID: 2
  },
  {
    id: 44,
    category: 1,
    question: 'Which property is used to change the font of an element?',
    answers: ['font-style','font-weight','font-family'],
    correctAnswerID: 2
  },
  {
    id: 45,
    category: 1,
    question: 'How do you make the text bold?',
    answers: ['style:bold;','font-weight:bold;','font:bold;'],
    correctAnswerID: 1
  },
  {
    id: 46,
    category: 1,
    question: 'How do you make a list that lists its items with squares?',
    answers: ['list: square;','list-style-type: square;','list-type: square;'],
    correctAnswerID: 1
  },
  {
    id: 47,
    category: 1,
    question: 'How do you select an element with id "demo"?',
    answers: ['*demo','.demo', 'demo', '#demo'],
    correctAnswerID: 3
  },
  {
    id: 48,
    category: 1,
    question: 'How do you select elements with class name "test"?',
    answers: ['test', '#test', '.test', '*test'],
    correctAnswerID: 2
  },
  {
    id: 49,
    category: 1,
    question: 'How do you select all p elements inside a div element?',
    answers: ['div.p', 'div p', 'div +p'],
    correctAnswerID: 1
  },
  {
    id: 50,
    category: 1,
    question: 'How do you group selectors?',
    answers: ['Separate each selector with a comma', 'Separate each selector with a plus sign', 'Separate each selector with a space'],
    correctAnswerID: 0
  },
  {
    id: 51,
    category: 1,
    question: 'What is the default value of the position property?',
    answers: ['absolute', 'relative', 'static', 'fixed'],
    correctAnswerID: 2
  },
  {
    id: 52,
    category: 1,
    question: 'Which of the following is correct about CSS?',
    answers: ['Style sheets allow content to be optimized for more than one type of device.',
      'CSS can be stored locally with the help of an offline cache.',
      'Using CSS, we can view offline websites.The cache also ensures faster loading and better overall performance of the website.',
    'All of the above.'],
    correctAnswerID: 3
  },
  {
    id: 53,
    category: 1,
    question: 'Which of the following is correct about RGB Values format of CSS colors?',
    answers: ['The color value is specified using the rgb() property.','The property takes three values, one each for red, green, and blue.',
      'The value can be an integer between 0 and 255 or a percentage.', 'All of the above.'],
    correctAnswerID: 3
  },
  {
    id: 54,
    category: 1,
    question: 'Which of the following value of cursor shows it as a pointing hand?',
    answers: ['crosshair', 'default', 'pointer', 'move'],
    correctAnswerID: 2
  },
  {
    id: 55,
    category: 1,
    question: 'Which of the following is a way to associate styles with your HTML document?',
    answers: ['External CSS','Imported CSS',' Both of the above', 'None of the above'],
    correctAnswerID: 2
  },
  {
    id: 56,
    category: 1,
    question: 'Which of the following property is used to control the position of an image in the background?',
    answers: ['background-color', 'background-image', 'background-repeat', 'background-position'],
    correctAnswerID: 3
  },
  {
    id: 57,
    category: 1,
    question: 'The # symbol specifies that the selector is?',
    answers: ['class', 'tag', 'first', 'id'],
    correctAnswerID: 3
  },
  {
    id: 58,
    category: 1,
    question: 'How do you make a list not display bullet points?',
    answers: ['list-style-type: no-bullet', 'list: none', 'bulletpoints: none', 'list-style-type: none'],
    correctAnswerID: 3
  },
  {
    id: 59,
    category: 1,
    question: 'A declaration is terminated by?',
    answers: ['a period', 'an exclamation mark', 'a semi colon', 'colon'],
    correctAnswerID: 2
  },

    // END CSS QUESTIONS

    // START JS QUESTIONS
  {
    id: 60,
    category: 2,
    question: 'What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id="demo">This is a demonstration.</p>',
    answers: ['document.getElementById("demo").innerHTML = "Hello World!";','#demo.innerHTML = "Hello World!";','document.getElementByName("p").innerHTML = "Hello World!";'],
    correctAnswerID: 0
  },
  {
    id: 61,
    category: 2,
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: ['<script href="xxx.js">','<script src="xxx.js">','<script name="xxx.js">'],
    correctAnswerID: 1
  },
  {
    id: 62,
    category: 2,
    question: 'How do you create a function in JavaScript?',
    answers: ['function = myFunction()','function:myFunction()','function myFunction()'],
    correctAnswerID: 2
  },
  {
    id: 63,
    category: 2,
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: ['<js>','<javascript>','<script>','<scripting>'],
    correctAnswerID: 2
  },
  {
    id: 64,
    category: 2,
    question: 'Where is the correct place to insert a JavaScript?',
    answers: ['<body>','<head>','<heading>', 'Both <body> and <head> are correct.'],
    correctAnswerID: 3
  },
  {
    id: 65,
    category: 2,
    question: 'The external JavaScript file must contain the <script> tag.',
    answers: ['True', 'False'],
    correctAnswerID: 1
  },
  {
    id: 66,
    category: 2,
    question: 'How do you write "Hello World" in an alert box?',
    answers: ['msgBox("Hello World");', 'alertBox("Hello World");', 'msg("Hello World");', 'alert("Hello World");'],
    correctAnswerID: 3
  },
  {
    id: 67,
    category: 2,
    question: 'How do you call a function named "myFunction"?',
    answers: ['myFunction()','call myFunction()','call function myFunction()'],
    correctAnswerID: 0
  },
  {
    id: 68,
    category: 2,
    question: 'How do you write an IF statement in JavaScript?',
    answers: ['if i = 5', 'if i == 5 then', 'if (i === 5)', 'if (i = 5) then'],
    correctAnswerID: 2
  },
  {
    id: 69,
    category: 2,
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: ['if (i <> 5)', 'if i =! 5 then', 'if i <> 5', 'if (i != 5)'],
    correctAnswerID: 3
  },
  {
    id: 70,
    category: 2,
    question: 'How does a WHILE loop start?',
    answers: ['while i = 1 to 10', 'while (i <= 10)','while (i <= 10; i++)'],
    correctAnswerID: 1
  },
  {
    id: 71,
    category: 2,
    question: 'How does a FOR loop start?',
    answers: ['for (i = 0; i <= 5)', 'for i = 1 to 5', 'for (i = 0; i <= 5; i++)'],
    correctAnswerID: 2
  },
  {
    id: 72,
    category: 2,
    question: 'How can you add a comment in a JavaScript?',
    answers: ['// This is a comment', '<!-- This is a comment -->', '# This is a comment'],
    correctAnswerID: 0
  },
  {
    id: 73,
    category: 2,
    question: 'What is the correct way to write a JavaScript array?',
    answers: ['var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")'],
    correctAnswerID: 0
  },
  {
    id: 74,
    category: 2,
    question: 'How do you round the number 7.25, to the nearest integer?',
    answers: ['rnd(7.25)', 'round(7.25)', 'Math.rnd(7.25)', 'Math.round(7.25)'],
    correctAnswerID: 3
  },
  {
    id: 75,
    category: 2,
    question: 'How do you find the number with the highest value of x and y?',
    answers: ['top(x, y)', 'ceil(x, y)', 'Math.max(x, y)', 'Math.ceil(x, y)'],
    correctAnswerID: 2
  },
  {
    id: 76,
    category: 2,
    question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
    answers: ['w2 = window.new("https://www.site.com");','w2 = window.open("https://www.site.com");'],
    correctAnswerID: 1
  },
  {
    id: 77,
    category: 2,
    question: 'JavaScript is the same as Java.',
    answers: ['True', 'False'],
    correctAnswerID: 1
  },
  {
    id: 78,
    category: 2,
    question: 'Which event occurs when the user clicks on an HTML element?',
    answers: ['onmouseover', 'onchange', 'onmouseclick', 'onclick'],
    correctAnswerID: 3
  },
  {
    id: 79,
    category: 2,
    question: 'How do you declare a JavaScript variable?',
    answers: ['let varName;', 'variable varName;', 'v varName;'],
    correctAnswerID: 0
  },
  {
    id: 80,
    category: 2,
    question: 'Which operator is used to assign a value to a variable?',
    answers: ['*', '-', 'x', '='],
    correctAnswerID: 3
  },
  {
    id: 81,
    category: 2,
    question: 'What will the following code return: Boolean(10 > 9)',
    answers: ['false', 'NaN', 'true'],
    correctAnswerID: 2
  },
  {
    id: 82,
    category: 2,
    question: 'Is JavaScript case-sensitive?',
    answers: ['Yes', 'No'],
    correctAnswerID: 0
  },
  {
    id: 83,
    category: 2,
    question: 'What will be the output of the code below?\nconsole.log(typeof NaN);',
    answers: ['NaN', 'number', 'null', 'undefined'],
    correctAnswerID: 1
  },
  {
    id: 84,
    category: 2,
    question: 'What will be the output of the code below?\nlet array = [1, 2, 3];\narray[6] = 9;\nconsole.log(array[5]);',
    answers: ['1', '2', '9', 'undefined'],
    correctAnswerID: 3
  },
  {
    id: 85,
    category: 2,
    question: 'What will be the output of the code below?\nconsole.log(018 - 015);',
    answers: ['NaN', '3', '5', '13'],
    correctAnswerID: 2 // 018 is decimal, 015 is octal: 18 - 13 = 5
  },
  {
    id: 86,
    category: 2,
    question: 'What will be the output of the code below?\nconsole.log(typeof typeof 1);',
    answers: ['string', 'number', '1', 'true'],
    correctAnswerID: 0
  },
  {
    id: 87,
    category: 2,
    question: 'What will be the output of the code below?\nconsole.log(1 +  "2" + "2");',
    answers: ['122', '32', 'NaN2', 'NaN'],
    correctAnswerID: 0
  },
  {
    id: 88,
    category: 2,
    question: 'Is JavaScript an object oriented language?',
    answers: ['Yes', 'No'],
    correctAnswerID: 0
  },
  {
    id: 89,
    category: 2,
    question: 'What will be the output of the code below?\nconsole.log(3 > 2 > 1);',
    answers: ['true', 'false'],
    correctAnswerID: 1
  },
  {
    id: 90,
    category: 2,
    question: 'Which of the below is used in Java script to insert special characters?',
    answers: ['&','\\','-', '%'],
    correctAnswerID: 1
  },
]