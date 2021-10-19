
//select all needed elemets from HTML
const form = document.getElementById('quiz-form')
const answers = Array.from(document.querySelectorAll('.answer'))
const allQuestionItems = Array.from(document.querySelectorAll('.question-item'))
const alert = document.getElementById('alert')

//add event listener on submit
form.addEventListener('submit', e => {
    //preventing the default behaviour
    e.preventDefault()
    //loop through each question items and set the incorrect theme in case of submit
    //becasue no answer is also wrong answer
    allQuestionItems.forEach(item => {
        inCorrectAnswer(item)
    })
    //loop through each choosen answer to see if was answered correctly
    const choosenAnswers = answers.filter(answer => answer.checked)
    choosenAnswers.forEach(answer => {
        const questionItem = answer.closest('.question-item')
        //in html the true is a string!! not a boolean thats why should be in quotes ('true')
        if (answer.value === 'true') {
            correctAnswer(questionItem)
        } else {
            inCorrectAnswer(questionItem)
        }
    })

    const allTrue = choosenAnswers.every(answer => answer.value === 'true')
    //below code to check if all three are answered before displaying the alert 
    const allAnswered = choosenAnswers.length === allQuestionItems.length
    //If all answers are correct show the element with the id `alert` and hide it after couple of seconds
    if (allTrue && allAnswered) {
        alert.style.display = 'block'
        setTimeout(() => {
            alert.style.display = 'none'
        }, 2700)
    }
})

function correctAnswer (questionItem) {
    questionItem.classList.add('correct')
    questionItem.classList.remove('incorrect')
}

function inCorrectAnswer (questionItem) {
    questionItem.classList.add('incorrect')
    questionItem.classList.remove('correct')
}
