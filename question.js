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
    answers: ['Hyperlinks and Text Markup Language','Hyper Text Markup Language','Home Tool Markup Language'],
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
    category: 1,
    question: 'What does CSS stand for?',
    answers: ['Cascading Style Sheets','Colorful Style Sheets','Creative Style Sheets', 'Computer Style Sheets'],
    correctAnswerID: 0
  },
  {
    id: 4,
    category: 1,
    question: 'What is the correct HTML for referring to an external style sheet?',
    answers: ['<stylesheet>mystyle.css</stylesheet>','<style src="mystyle.css">',' <link rel="stylesheet" type="text/css" href="mystyle.css">'],
    correctAnswerID: 2
  },
  {
    id: 5,
    category: 1,
    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    answers: ['At the end of the document','In the <head> section',' In the <body> section'],
    correctAnswerID: 1
  },
  {
    id: 6,
    category: 2,
    question: 'What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id="demo">This is a demonstration.</p>',
    answers: ['document.getElementById("demo").innerHTML = "Hello World!";','#demo.innerHTML = "Hello World!";','document.getElementByName("p").innerHTML = "Hello World!";'],
    correctAnswerID: 0
  },
  {
    id: 7,
    category: 2,
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: ['<script href="xxx.js">','<script src="xxx.js">','<script name="xxx.js">'],
    correctAnswerID: 1
  },
  {
    id: 8,
    category: 2,
    question: 'How do you create a function in JavaScript?',
    answers: ['function = myFunction()','function:myFunction()','function myFunction()'],
    correctAnswerID: 2
  },

  {
    id: 9,
    category: 0,
    question: 'HTML is the standard........ language for creating Web pages.',
    answers: ['scripting','programming','styling', 'markup'],
    correctAnswerID: 3
  },

{
    id: 10,
    category: 0,
    question: 'Which is the correct syntax to include comment in an HTML document?',
    answers: ['//','/* Comment */','// Comment //', '<!-- Comment -->'],
    correctAnswerID: 3
  },

{
    id: 11,
    category: 0,
    question: 'Can we hide content using the comment?',
    answers: ['Yes','No'],
    correctAnswerID: 0
  },

{
    id: 12,
    category: 0,
    question: 'Which element/tag defines a paragraph?',
    answers: ['<p>','<pre>','<panel>', '<None of the above>'],
    correctAnswerID: 0
  },

{
    id: 13,
    category: 0,
    question: 'Which tag/element defines the HTML documents body?',
    answers: ['<HTML>','<HTMLbody>','<bdy>', '<body>'],
    correctAnswerID: 0
  },

{
    id: 14,
    category: 0,
    question: 'Which tag contains the meta information about the HTML page?',
    answers: ['<HTML>','<title>','<head>', '<body>'],
    correctAnswerID: 2
  },

{
    id: 15,
    category: 0,
    question: 'Which tag is the root element of an HTML page?',
    answers: ['<HTML>','<title>','<head>', '<body>'],
    correctAnswerID: 0
  },

{
    id: 16,
    category: 0,
    question: 'Who invented HTML?',
    answers: ['Dave Ragett','Tim Berners-Lee','Denis Ritchie', 'All of the above'],
    correctAnswerID: 1
  },

{
    id: 17,
    category: 0,
    question: 'HTML tags with no content are called _____.',
    answers: ['Special tags','Advanced tags','Empty tags', 'Other tags'],
    correctAnswerID: 2
  },

{
    id: 18,
    category: 0,
    question: 'HTML tags with no content are called _____.',
    answers: ['Special tags','Advanced tags','Empty tags', 'Other tags'],
    correctAnswerID: 2
  },

{
    id: 19,
    category: 0,
    question: 'Is HTML a case sensitive?',
    answers: ['Yes','No'],
    correctAnswerID: 1
  },

{
    id: 20,
    category: 0,
    question: 'HTML headings are defined with the _____ tags.',
    answers: ['<head1> to <head6>','<p1> to <p6>','<h1> to <h6>','<h1> to <h3>'],
    correctAnswerID: 2
  },

{
    id: 21,
    category: 0,
    question: 'Which tag is used to display a horizonal rule (horizonal line)?',
    answers: ['<br>','<hr>','<hr>...</hr>', '<line>'],
    correctAnswerID: 1
  },

 {
    id: 22,
    category: 0,
    question: 'Which tag is used to define a line break?',
    answers: ['<\n>','<lr>','<br>', '<br>...</br>'],
    correctAnswerID: 2
  },

{
    id: 23,
    category: 0,
    question: 'Which HTML attribute is used to define styles of an element?',
    answers: ['<style>','<css>','style', 'css'],
    correctAnswerID: 2
  },

 {
    id: 24,
    category: 0,
    question: 'Which is the correct HTML statement to define the red color of the paragraph text?',
    answers: ['<p style="color: #ff0000;">','<p style="color: red;">','Both A. and B.', 'None of the above'],
    correctAnswerID: 2
  },

  {
    id: 25,
    category: 0,
    question: 'Which HTML attribute is used to define styles of an element?',
    answers: ['<style>','<css>','style', 'css'],
    correctAnswerID: 2
  },

{
    id: 26,
    category: 0,
    question: 'Which tag is used to embed an image in an HTML document?',
    answers: ['<img>','<pic>','<image>', '<picture>'],
    correctAnswerID: 2
  },

{
    id: 27,
    category: 2,
    question: 'JavaScript is the programming language of the _____.',
    answers: ['Desktop','Mobile','Web', 'Server'],
    correctAnswerID: 3
  },

{
    id: 28,
    category: 2,
    question: 'Which type of JavaScript language is _____?',
    answers: ['Object-oriented','Object-based','Functional programming', 'All of the above'],
    correctAnswerID: 1
  },

{
    id: 29,
    category: 2,
    question: 'Which of the following statement(s) is true about the JavaScript?',
    answers: ['It is a scripting language used to make the website interactive','It is an advanced version of Java for Desktop and Mobile application development','It is a markup language of Java to develop the webpages', 'All of the above'],
    correctAnswerID: 0
  },

 {
    id: 30,
    category: 2,
    question: 'JavaScript code can be written in ____.',
    answers: ['JavaScript file (.js file)','HTML document directly','JavaScript file and in HTML document directly', 'In style sheets (.css file)'],
    correctAnswerID: 2
  },

 {
    id: 31,
    category: 2,
    question: 'Which symbol is used separate JavaScript statements?',
    answers: ['Comma (,)','Colon (:)','Hyphen (_)', 'Semicolon (;)'],
    correctAnswerID: 3
  },

   {
    id: 32,
    category: 2,
    question: 'Which JavaScript method is used to access an HTML element by id?',
    answers: ['getElementById()','getElement(id)','getElementById(id)', 'elementById(id)'],
    correctAnswerID: 2
  },

    {
    id: 33,
    category: 2,
    question: 'Which JavaScript method is used to write HTML output?',
    answers: ['document.write()','document.output()','console.log()', 'document.writeHTML()'],
    correctAnswerID: 0
  },

   {
    id: 34,
    category: 2,
    question: 'Which JavaScript method is used to write on browsers console?',
    answers: ['console.write()','console.output()','console.log()', 'console.writeHTML()'],
    correctAnswerID: 2
  },

  {
    id: 35,
    category: 2,
    question: 'Which JavaScript method is used to write into an alert box?',
    answers: ['window.alertHTML()','window.alert()','window.alertBox()', 'window.alertContent()'],
    correctAnswerID: 1
  },

  {
    id: 36,
    category: 2,
    question: 'Which is the correct JavaScript statement to display "Hello Boss!" into an alert box?,
    answers: ['alert("Hello Boss!");','alert(Hello Boss');','alert(Text:'Hello Boss!');', 'Both A. and B.'],
    correctAnswerID: 0
  },

  {
    id: 37,
    category: 2,
    question: 'Which is the correct JavaScript statement to print the addition of two numbers 10 and 2o in a paragraph whose id is "result"?',
    answers: ['getElementById("result").innerHTML = 10+20;','getElementById("result").innerHTML = "10+20";','getElementById("#result").innerHTML = 10+20;', 'All of the above'],
    correctAnswerID: 0
  },

  {
    id: 38,
    category: 2,
    question: 'What is the use of this JavaScript statement <button onclick="window.print()">Submit</button> ?',
    answers: ['It will write "Submit" on the current Window','It will print the content of the current page','It will write the content of the current page in the browser’s console', 'None of the above'],
    correctAnswerID: 1
  },

  {
    id: 39,
    category: 2,
    question: 'In JavaScript, single line comment begins with ___.',
    answers: ['#','/*','$', '//'],
    correctAnswerID: 3
  },

  {
    id: 40,
    category: 2,
    question: 'In JavaScript, multi-line comments start with __ and end with ___.',
    answers: ['/* and */','<!—and -->','## and ##', '// and //'],
    correctAnswerID: 0
  },

  {
    id: 41,
    category: 2,
    question: 'Which JavaScript keyword is used to declare a variable?',
    answers: ['Var','var','Let', 'All of the above'],
    correctAnswerID: 1
  },

  {
    id: 42,
    category: 2,
    question: 'The 3 keywords in javascript to declare a variable are?',
    answers: ['var,let & const','var,let & And'],
    correctAnswerID: 0
  },

  {
    id: 43,
    category: 2,
    question: 'Which is the correct syntax to declare a constant in JavaScript?',
    answers: ['const constant_name;','constant_name const;','constant_name const = value;', 'const constant_name = value;'],
    correctAnswerID: 3
  },

{
    id: 44,
    category: 2,
    question: 'Which JavaScript method is used to get a number as a string?',
    answers: ['toString()','intToString()','parseInteger()', 'All of the above'],
    correctAnswerID: 0
  },

{
    id: 45,
    category: 0,
    question: 'In a CSS file, there is a CSS rule for paragraphs tags – what does p can be called?',
    answers: ['Selector','Attribute','Property', 'Tag'],
    correctAnswerID: 0
  },


    id: 46,
    category: 0,
    question: 'Which property is used to define the text color?',
    answers: ['text-color','color','font-color'],
    correctAnswerID: 1
  },


    id: 47,
    category: 0,
    question: 'Which property is used to define the background color?',
    answers: ['bgcolor','bg-color','background', 'background-color'],
    correctAnswerID: 3
  },


    id: 48,
    category: 0,
    question: 'From the given options which is/are the valid way to represent a color?',
    answers: ['A valid color name like "blue"','HEX code like "#0000ff"','RGB Value like "rgb(0,0,255)', 'All three'],
    correctAnswerID: 3
  },


    id: 49,
    category: 0,
    question: 'Which property is used to define the font of the elements text?',
    answers: ['font','font-family','font-style', 'All three'],
    correctAnswerID: 1
  },

    id: 50,
    category: 0,
    question: 'To make a text italic, which CSS property is used?',
    answers: ['font','font-family','font-style', 'All three'],
    correctAnswerID: 2
  },

    id: 51,
    category: 0,
    question: 'Which CSS property is used to style the hyperlinks on hover (Mouse over)?',
    answers: ['a:mouseover','a:move','a:mover', 'a:hover'],
    correctAnswerID: 3
  },

    id: 52,
    category: 0,
    question: 'If you want to use a green dotted border around an image, which CSS property is used for that?',
    answers: ['border-style','border-color','Both'],
    correctAnswerID: 0
  },

    id: 53,
    category: 0,
    question: 'Which CSS property and value is used to center an element?',
    answers: ['text-align:center','align:center','text-align:middle', 'align:middle'],
    correctAnswerID: 0
  },

    id: 54,
    category: 0,
    question: 'Which CSS property is used to specify the indentation of the first line of a text?',
    answers: ['text-align','padding-left','margin-left', 'text-indent'],
    correctAnswerID: 3
  },

    id: 55,
    category: 0,
    question: 'Which CSS property is used to specify the space between the characters in a text?',
    answers: ['text-space','letter-space','letter-spacing', 'letter-distance'],
    correctAnswerID: 2
  },

    id: 56,
    category: 0,
    question: 'Which CSS property is used to specify the space between lines?',
    answers: ['line-space','line-spacing','line-padding', 'line-height'],
    correctAnswerID: 3
  },

    id: 57,
    category: 0,
    question: 'Which CSS property is used to specify the space between the words in a text?',
    answers: ['word-spacing','word-padding','word-height', 'characters-spacing'],
    correctAnswerID: 0
  },

    id: 58,
    category: 0,
    question: 'Which CSS property adds shadow to text?',
    answers: ['content-shadow','text-shadow','word-shadow', 'text-outline'],
    correctAnswerID: 1
  },

    id: 59,
    category: 0,
    question: 'In a CSS file, there is a CSS rule for paragraphs tags – what does p can be called?',
    answers: ['Selector','Attribute','Property', 'Tag'],
    correctAnswerID: 0
  },

    id: 60,
    category: 0,
    question: 'Which CSS property is used to specify uppercase and lowercase letters in a text?',
    answers: ['text-transform','text-case','case', 'text-casing'],
    correctAnswerID: 0
  },

    id: 61,
    category: 0,
    question: 'Which is the correct CSS statement to capitalize the first letter of each word?',
    answers: ['text-transform: uppercase','text-transform: capitalize','Both'],
    correctAnswerID: 2
  },
id: 62,
    category: 0,
    question: 'CSS be added to HTML:',
    answers: ['By using style attribute inside <body> tag.','By using <style> tag inside the <head> section of HTML','By creating an external CSS file and linking this file using <link> tag in HTML.''By using all three.'],
    correctAnswerID: 3
  },
]
