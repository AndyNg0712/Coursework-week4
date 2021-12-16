startButton.addEventListener('click', function(){
        var timeleft = 15;
        var downloadTimer = setInterval(function function1(){
            document.getElementById("countdown").innerHTML = timeleft +" second remaining";
            timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);
    console.log(countdown);});


(function(){
    
    function buildQuiz(){
    
      var output = [];
  
    
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
    
          var answers = [];
  
    
          for(letter in currentQuestion.answers){
  
    
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
    
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
    
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      var answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){

          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
  
        else{
  
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){  
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  

    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var myQuestions = [
      {
        question: "1 + 1 = ?",
        answers: {
          a: "1",
          b: "2",
          c: "3"
        },
        correctAnswer: "b"
      },
      {
        question: "2 + 2 = ?",
        answers: {
          a: "2",
          b: "4",
          c: "6"
        },
        correctAnswer: "b"
      },
      {
        question: "3 + 3 = ?",
        answers: {
          a: "0",
          b: "2",
          c: "4",
          d: "6"
        },
        correctAnswer: "d"
      }
    ];



    buildQuiz();
  
    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
  
  
    showSlide(currentSlide);
  
  
    nextButton.addEventListener("click", showNextSlide);
    previousButton.addEventListener("click", showPreviousSlide);
    submitButton.addEventListener('click', showResults);
  
})();