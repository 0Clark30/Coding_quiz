// needed variables : timer, question count, correct answer count, container for the quiz, highscores button, start button
// need an object for my questions and answers, that indexes the correct answer
// create element for what is on page load
// create elements that work inside the logic for the quiz
// innerHTML needs to be cleared after each question
// startquiz function should hide elements on page load
// The quiz, the timer, and the high scores are seperate logics, treat each as seperate problems

var body = document.body;
var currentQuestions = 0;
var correctAnswers = 0;
var timeLeft= 60;
var container = document.createElement('div')
var highScores = document.createElement ('button')
var h1El = document.createElement('h1');
h1El.textContent = "Austin's Code Quiz";
var pEl = document.createElement('p')
pEl.textContent = "This is a quiz over basic coding facts, answering each question will gain you a point. You have until time runs out. Each incorrect answer will reduce your time remaining"
var startButton = document.createElement('button')
startButton.textContent = 'start'
var timerDisplay = document.createElement ('div');
body.appendChild(timerDisplay);

// create an array of objects, objects are my questions with key value pairs for the question,
// the answer choices, and the index of the correct answer choice

var questionObj = [{
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
// 
function init(){
    body.appendChild(h1El);
    body.appendChild(pEl);
    body.appendChild(startButton);
}
init()
function cycleQuestion(){
    if (currentQuestions < questionObj.length) {
        var questionEl = document.createElement('h2');
        questionEl.textContent = questionObj[currentQuestions].question;
        body.appendChild(questionEl);


        // Display answer choices by creating a for loop that adds the text content of the answer choices, if there is nothing left the quiz is over alert user of score
      for (var i = 0; i < questionObj[currentQuestions].answerChoices.length; i++) {
          var answerChoiceBtn = document.createElement('button');
          answerChoiceBtn.textContent = questionObj[currentQuestions].answerChoices[i];
          answerChoiceBtn.setAttribute('data-index', i);
          answerChoiceBtn.addEventListener('click', checkAnswer);
          body.appendChild(answerChoiceBtn);
      }
  } else {
      alert('Your Score: ' + correctAnswers);
  }
}
function checkAnswer(event) {
    var selectedAnswerIndex = parseInt(event.target.getAttribute('data-index'));
    // if correct increase correct answer count
    if (selectedAnswerIndex === questionObj[currentQuestions].correctAnswer) {
        correctAnswers++;
    } else {
        // Penalty for incorrect answer 
        timeLeft -= 10; 
    }
  
    // Move to the next question then reset the innerHTML to an empty string
    currentQuestions++;
  
    body.innerHTML = '';
  
    // Display the next question
    cycleQuestion();
  }

//   need to get timer to display, 
  function countdown(){
    var timeInterval = setInterval(function() {
    if (timeLeft > 1){
       
    } else if (timeLeft === 1){
         timerDisplay.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } else {
        timeInterval.textContent = '';

        clearInterval(timeInterval); 
    }
  }, 1000);
}

function startQuiz() {
    startButton.style.display = 'none';
    h1El.style.display = 'none';
    pEl.style.display = 'none';

    cycleQuestion();

    // display timer by appending it to the body
    
    countdown()
}
startButton.addEventListener("click", startQuiz ) 




body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';