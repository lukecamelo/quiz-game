const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: 'what is your favorite color?',
    answers: {
      a: 'red',
      b: 'blue',
      c: 'pink'
    },
    correctAnswer: 'c'
  },
  {
    question: 'who would win in a fight?',
    answers: {
      a: 'Jerry Seinfeld',
      b: 'Yoshi',
      c: 'Tay Zonday'
    },
    correctAnswer: 'a'
  },
  {
    question: 'whats your problem dude?',
    answers: {
      a: 'i just don\'t like quizzes',
      b: 'i didn\'t get a lot of sleep last night',
      c: 'fuck you'
    },
    correctAnswer: 'a'
  },
]

function buildQuiz() {

  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers){
        answers.push(
          `
          <label>
            <input type='radio' name='question${questionNumber}' value='${letter}'>
            ${letter} : ${currentQuestion.answers[letter]}
          </label>
          `
        );
      }

      output.push(
        `
        <div class='question'> ${currentQuestion.question} </div>
        <div class='answers'> ${answers.join('')} </div>
        `
      );
    }
  );
  quizContainer.innerHTML = output.join('');
}

buildQuiz();

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
  });
}