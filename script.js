const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
var Timer = setInterval (0)


let shuffledQuestions, currentQuestionIndex, countDownTimer

let currentQuestion = {}
let score = 0
let questionCounter = 0
let availableQuestion = []


startButton.addEventListener('click', startGame, countDownTimer)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.floor(Math.random()))
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    countDownTimer()
    //call Timer here - Global variable Timer=setInterval () clear it with clearInterval
    //look at timing events on w3
    var sec = 60;
    var countDownTimer = setInterval(function(){
        document.getElementById('countDownTimer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        
        }
    }, 1000);
    
}

// function timer(){
//     var sec = 60;
//     var countDownTimer = setInterval(function(){
//         document.getElementById('countDownTimer').innerHTML='00:'+sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
        
//         }
//     }, 1000);
// }

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    }   else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")

    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "What is a Javascript Function??",
        answers: [
            { text: "A block of code designed to perform a particular task", correct: true },
            { text: "A way to make digital coffee", correct: false },
            { text: "The job the whole app does", correct: false },
            { text: "A value", correct: false },

        ]
    },
    {
        question: "What are Variables used for?",
        answers: [
            { text: "To make Functions work", correct: false },
            { text: "To cause uncertainty", correct: false },
            { text: "To store data values", correct: true },
            { text: "To look all technical", correct: false },

        ]
    },
    {
        question: "What are semicolons used for, in Javascript?",
        answers: [
            { text: "Separating statements", correct: true },
            { text: "Confirming values", correct: false },
            { text: "Testing your patience", correct: false },
            { text: "To start a new line of code", correct: false },

        ]
    },
    {
        question: "What is an Expression?",
        answers: [
            { text: "A face you pull when you want to smash your PC to pieces", correct: false },
            { text: "A funny thing people say, round where you live", correct: false },
            { text: "A combination of values, variables, and operators, which computes to a value", correct: true },
            { text: "A variable operator, computed through the use of values", correct: false },

        ]
    },
    {
        question: "What is Keyword?",
        answers: [
            { text: "Magic words that open doors to secret places", correct: false },
            { text: "Very important words in daily life", correct: false },
            { text: "Words that you've been hypnotised to subconsciously respond to", correct: false },
            { text: "Words used to identify actions to be performed in Javascript", correct: true },

        ]
    },
    {
        question: "Which of the following are NOT named using Identifiers, in Javascript?",
        answers: [
            { text: "variables", correct: false },
            { text: "keywords", correct: false },
            { text: "functions", correct: false },
            { text: "operators", correct: true },

        ]
    },
    {
        question: "What is a string?",
        answers: [
            { text: "A piece of twine", correct: false },
            { text: "a set of text values, set inside quotes and used for storing and manipulating data", correct: true },
            { text: "Something nobody seems to know the length of", correct: false },
            { text: "A long list of failures", correct: false },

        ]
    },
    {
        question: "Which of these is NOT a Javascript datatype?",
        answers: [
            { text: "Number", correct: false },
            { text: "String", correct: false },
            { text: "Cat", correct: true },
            { text: "Boolean", correct: false },

        ]
    },
    {
        question: "How many times of number does Javascript have?",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "7", correct: false },

        ]
    },
    {
        question: "What is an Array?",
        answers: [
            { text: "A special kind of object", correct: false },
            { text: "A set of numbers", correct: false },
            { text: "A kind of variable that can hold more than one value at a time", correct: true },
            { text: "A set of variables", correct: false },

        ]
    },


]