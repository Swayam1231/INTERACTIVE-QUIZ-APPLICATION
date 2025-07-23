const questions = [
    // HTML Questions
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "HyperText Markup Language", correct: true },
        { text: "HighText Machine Language", correct: false },
        { text: "HyperTabular Markup Language", correct: false },
        { text: "None of the above", correct: false }
      ]
    },
    {
      question: "Which tag is used to define an unordered list in HTML?",
      answers: [
        { text: "<ul>", correct: true },
        { text: "<ol>", correct: false },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false }
      ]
    },
    {
      question: "Which attribute is used to provide a unique name to an HTML element?",
      answers: [
        { text: "class", correct: false },
        { text: "id", correct: true },
        { text: "name", correct: false },
        { text: "key", correct: false }
      ]
    },
    {
      question: "What is the purpose of the <head> tag in HTML?",
      answers: [
        { text: "To contain metadata and links", correct: true },
        { text: "To display the page content", correct: false },
        { text: "To write inline CSS", correct: false },
        { text: "To define the footer", correct: false }
      ]
    },
    {
      question: "Which tag is used to display an image in HTML?",
      answers: [
        { text: "<img>", correct: true },
        { text: "<picture>", correct: false },
        { text: "<src>", correct: false },
        { text: "<image>", correct: false }
      ]
    },
  
    // CSS Questions
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Creative Style Syntax", correct: false },
        { text: "Colorful Styling Source", correct: false },
        { text: "Code Style Sheet", correct: false }
      ]
    },
    {
      question: "Which CSS property is used to set the background color?",
      answers: [
        { text: "background", correct: false },
        { text: "bg-color", correct: false },
        { text: "background-color", correct: true },
        { text: "color", correct: false }
      ]
    },
    {
      question: "How do you make text bold in CSS?",
      answers: [
        { text: "font-weight: bold;", correct: true },
        { text: "text-style: bold;", correct: false },
        { text: "font-style: bold;", correct: false },
        { text: "text-weight: bold;", correct: false }
      ]
    },
    {
      question: "Which property controls the size of text?",
      answers: [
        { text: "font-size", correct: true },
        { text: "text-size", correct: false },
        { text: "font-weight", correct: false },
        { text: "text-style", correct: false }
      ]
    },
    {
      question: "Which selector targets all elements in CSS?",
      answers: [
        { text: "*", correct: true },
        { text: "#", correct: false },
        { text: ".", correct: false },
        { text: ":", correct: false }
      ]
    },
  
    // JavaScript Questions
    {
      question: "What is the correct syntax to declare a variable in JavaScript?",
      answers: [
        { text: "let x = 5;", correct: true },
        { text: "var: x = 5;", correct: false },
        { text: "x := 5;", correct: false },
        { text: "int x = 5;", correct: false }
      ]
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      answers: [
        { text: "//", correct: true },
        { text: "##", correct: false },
        { text: "<!-- -->", correct: false },
        { text: "**", correct: false }
      ]
    },
    {
      question: "Which method is used to write into the browser console?",
      answers: [
        { text: "console.log()", correct: true },
        { text: "print()", correct: false },
        { text: "log()", correct: false },
        { text: "write()", correct: false }
      ]
    },
    {
      question: "Which keyword is used to define a function in JavaScript?",
      answers: [
        { text: "function", correct: true },
        { text: "define", correct: false },
        { text: "method", correct: false },
        { text: "fun", correct: false }
      ]
    },
    {
      question: "Which function can be used to select an element by ID in JavaScript?",
      answers: [
        { text: "getElementById()", correct: true },
        { text: "querySelectorAll()", correct: false },
        { text: "getId()", correct: false },
        { text: "selectId()", correct: false }
      ]
    },
    {
      question: "Which operator is used for strict equality in JavaScript?",
      answers: [
        { text: "==", correct: false },
        { text: "===", correct: true },
        { text: "=", correct: false },
        { text: "!=", correct: false }
      ]
    },
    {
      question: "What type of language is JavaScript?",
      answers: [
        { text: "Markup Language", correct: false },
        { text: "Scripting Language", correct: true },
        { text: "Programming Language", correct: false },
        { text: "Styling Language", correct: false }
      ]
    },
    {
      question: "How do you create an array in JavaScript?",
      answers: [
        { text: "let arr = [];", correct: true },
        { text: "let arr = array();", correct: false },
        { text: "let arr = new Array[];", correct: false },
        { text: "let arr = {};", correct: false }
      ]
    },
    {
      question: "Which loop is used to iterate over an array?",
      answers: [
        { text: "for", correct: true },
        { text: "if", correct: false },
        { text: "switch", correct: false },
        { text: "case", correct: false }
      ]
    },
    {
      question: "Which built-in method removes the last element of an array?",
      answers: [
        { text: "pop()", correct: true },
        { text: "shift()", correct: false },
        { text: "delete()", correct: false },
        { text: "remove()", correct: false }
      ]
    }
  ];
  
  
  const questionContainer = document.getElementById("question-container");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  const finalScore = document.getElementById("final-score");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    scoreContainer.classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-box").classList.remove('hide');
    nextButton.innerText = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = true;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
  
    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("wrong");
    }
  
    Array.from(answerButtons.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
  
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    document.getElementById("quiz-box").classList.add('hide');
    scoreContainer.classList.remove('hide');
    finalScore.innerText = `You scored ${score} out of ${questions.length}!`;
  }
  
  startQuiz();
  
