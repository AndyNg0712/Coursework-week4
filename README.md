# Coursework-week4
Create new repository for "coursework-week4" with ReadMe file.
create Assest folder
Create Iamge folder, CSS folder, JS folder.
In Css folder create reset.css and style.css files
In JS folder create script.js file.

Set-up reset.css style to set html file back to default. 
![alt text](https://github.com/AndyNg0712/Coursework-week4/blob/main/assets/images/reset-css.png?raw=true)

Index.html:
First structure of the website, by using HTML:5, link reset.css, style.css and script.js to index.html file. 
![alt text](https://github.com/AndyNg0712/Coursework-week4/blob/main/assets/images/structure-index-html.png?raw=true)

Create h1 with class High Score, text-align: left
Create "Click to Start" button to let the user to start the game and timer starts to countdown. 
h1 with id = startButton
button id = gameStart

Create h2 "Word Guess" with class= quiz-container and id= quiz

create:
1 - Previous Question
2 - Next Question
3 - Submit Quiz -> this one should link with High Score
[!alt text](https://github.com/AndyNg0712/Coursework-week4/blob/main/assets/images/structure-index-2.png?raw=true)

Set event Listeners for startButton:
With 'click' function, set timer for 15 seconds.
When timer has started, it will display remaining second with message " second remaining" in innerHTML
When timer end, i <=0, "Time is up!" will be displayed. 
Run with console.log (countdown). 
[!alt text](https://github.com/AndyNg0712/Coursework-week4/blob/main/assets/images/startButton-script.png?raw=true)

Set function to run quiz:
Named function buildQuiz to store the HTML output. 
Set function for each question myQuestions.forEach with currentQuestion and questionNumber which asnwers to be stored in variable 'answers'. 
Also we will add radio button use the 'answer' those are stored in HTML file and we do the same with questions and its answers. 
We will have to combine our output and put it on the page. 
[!alt text](https://github.com/AndyNg0712/Coursework-week4/blob/main/assets/images/function-buildquiz.png?raw=true)

Set showResult function: 
We create Var answerContainers to select all the correct answers and keep track with the user's answer for eeach question. 
Create userAnswer varible to select all the answers from the user and base on user's answer
If the answer is correct then it will add all up together, else it will not add to the result. 
show the total correct answer.
[!alt text](https://github.com/AndyNg0712/Coursework-week4/blob/main/assets/images/show-result.png?raw=true)

Set showSlide function and all the buttons to interact with each other
When the currentSlide is first slide, value =0, remove previousButton. 
When the currentSlide is the last slide, value = slides.length-1 then remove the nextButton and show up the submitButton. 
When the currentSlide is not the first or last slide, remove submitButton and nextButton. 
And set function showNextSlide and showPreviousSlide to showSlide where currentSlide will be +/-1. 
[!alt text](https://github.com/AndyNg0712/Coursework-week4/blob/main/assets/images/setup-active-buttons-slides.png?raw=true)

Set Variables:
1 - quizContainer target id "quiz"
2 - resultsContainer target id "reuslt"
3 - submitButton target id "submit"
4 - myQuestions: set 3 questions with different answers 
Run buildQuiz function. 


5 - previousButton target id "previous"
6 - nextButton target id "next"
7 - slides using querrySelectorAll to return all the elements in documents to match with style.css 
8 - currentSlide as the first questions, with value equal 0. 
run showSlide 


Set Event Listener:
1 - nextButton with 'click' event to go next question.
2 - previousButton with 'click' event to go back previous questions 
3 - submitButton with 'click' event to showResult at the end of questions. 
[!alt text](https://github.com/AndyNg0712/Coursework-week4/blob/main/assets/images/buttons-eventListener.png?raw=true)

[!alt text](https://github.com/AndyNg0712/Coursework-week4/blob/main/assets/images/index-full.png?raw=true)

live index.html


