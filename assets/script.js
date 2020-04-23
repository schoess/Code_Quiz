var totalScore = 0
var questionNumber = 0
var questionsLine = $("#questionsLine");
var answerssLine = $("#answersLine");

var allQuestions = [{
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["Tony Blair", "Gordon Brown", "Winston Churchill", "David Cameron"],
    correctAnswer: "David Cameron"
},
{
    question: "What is the capital city of Spain?",
    choices: ["Barcelona", "London", "Madrid", "Lisbon"],
    correctAnswer: "Madrid"
},
{
    question: "How many strings does a guitar have?",
    choices: ["Three", "Four", "Five", "Six"],
    correctAnswer: "Six"
},
{
    question: "What year did MTV launch?",
    choices: ["1980", "1992", "1981", "1979"],
    correctAnswer: "1981"
}];

function correctAnswer (i) {
    totalScore ++;
    questionNumber ++;

    var updatePage = ['<div id="answerDiv">' +
    '<h1>Correct!<h1>' +
    '<h2>Total Score: ' + totalScore + '</h2></div>'
]
}
