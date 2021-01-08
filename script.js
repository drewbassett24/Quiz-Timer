const startbutton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startbutton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startbutton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.floor(Math.random()))
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
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

function selectAnswer(e) {


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