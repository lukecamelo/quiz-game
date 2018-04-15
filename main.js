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

function quizTest() {
  console.log(myQuestions[0].correctAnswer);
}

quizTest();

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
    }
  )

}