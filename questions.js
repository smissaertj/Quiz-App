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
]