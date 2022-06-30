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
    answers: ['<p style="color: #ff0000;">','<p style="color: red;">','Both A. and B.', 'None of the above'],
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
]