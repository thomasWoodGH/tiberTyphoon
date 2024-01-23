const express = require('express')
const cors = require('cors')
const logger = require('./logger')
const port = 3000
const questions = require('./questions.json')
const app = express()
const questions = require('./questions.json')

app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    res.send("Welcome to the questions API")
})

app.get('/questions', (req, res) => {
    res.send(questions)
})

<<<<<<< HEAD
=======
app.get('/questions/:id', (req, res) => {
    const selectedQuestion = questions.find(question => question.questionID == req.params.id) // finds question with matching ID to URL
    selectedQuestion ? res.send(selectedQuestion) : res.status(404).send("No question found with that ID")
})

>>>>>>> dev
app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})