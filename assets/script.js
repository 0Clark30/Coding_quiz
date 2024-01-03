var currentQuestions = 0;
var correctAnswers = 0;


// create an array of objects, objects are my questions with key value pairs for the question,
// the answer choices, and the index of the correct answer choice

var questions = [{
    question: "1. What does the const keyword stand for in JavaScript?",
    answerChoices:['1. Constant - declares a variable that cannot be reassigned', '2.Constructor - creates a new instance of an object', '3. Concatenate - combines two strings into one','4.Continue - skips the rest of the loop and jumps to the next iteration'], 
    correctAnswer: 0,
},{
    question: "2. Which of the following tags is used to create an ordered list in HTML?",
    answerChoices:['1. <ul>','2. <li>','3. <ol>','4.<dl>'], 
    correctAnswer:2,
},{
    question: "3. What is the purpose of the CSS property margin: auto;?",
    answerChoices:['1. Sets the margin to zero','2. Centers the element horizontally within its parent','3. Adds extra spacing to the top and bottom of the element','4. Aligns the element to the right side of its container'], 
    correctAnswer: 1,
},{
    question:"4.How do you comment out multiple lines in JavaScript?" ,
    answerChoices:['1. // This is a comment','2./* This is a comment */ ','3. <!-- This is a comment -->','4. # This is a comment'],
    correctAnswer:0,
},{
    question:"5. What is the correct way to link an external CSS file to an HTML document?" ,
    answerChoices:['1. <style src="styles.css">','2. <link rel="stylesheet" type="text/css" href="styles.css">','3. <css href="styles.css">','4. <script type="text/javascript" src="styles.css">'], 
    correctAnswer:1,
},]