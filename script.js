const startbutton = document.getElementById("start-btn")
const nextbutton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex //timer goes here

startbutton.addEventListener('click', startGame)

function startGame() {
    //console.log('Started')
    startbutton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.floor(Math.random()))
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    //call Timer here - Global variable Timer=setInterval () clear it with clearInterval
    //look at timing events on w3
}

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
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach()
    setStatusClass9button.datset.correct)

}

const questions = [
    {
        question: "What is 1?",
        answers: [
            { text: "a", correct: true },
            { text: "b", correct: false },
            { text: "c", correct: false },
            { text: "d", correct: false },

        ]
    }


]