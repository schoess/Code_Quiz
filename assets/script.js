var totalScore = 0, 
	questionNumber = 0,
	allQuestions = [{
        question: "What do you call a variable with multiple boolean values?",
        choices: ["variable", "object", "array", "let"],
        correctAnswer: "array"
    },
    {
        question: "A useful tool for debugging during development is_______.",
        choices: ["wrench", "Chrome dev tools", "Visual Studio Code", "keyboard"],
        correctAnswer: "Chrome dev tools"
    },
    {
        question: "Where will you find most of the answers to the questions you will have in your coding career?",
        choices: ["Teachers", "Coworkers", "User manual", "The Internet"],
        correctAnswer: "The Internet"
    },
    {
        question: "What should you do when using git before you push a project to the repository?",
        choices: ["pull", "bop it", "save it", "close it"],
        correctAnswer: "pull"
    }
];


var mainContent = $('#mainContent'); 

function correctGuess (i) { 
    totalScore ++; 
    questionNumber ++;

    var updatePage = ['<div id="answerDiv">' +
        '<h1>Correct!<h1>' +
        '<h2>Total Score: ' + totalScore + '</h2></div>'], // 
    whereToPut = updatePage[0].length; 

    if(totalScore < 4){
        var whatToPut = '<button type="button" id="nextButton" class="btn btn-primary">Next Question</button>';


        
        updatePage = [updatePage.slice(0, whereToPut), whatToPut, updatePage.slice(whereToPut)].join('');

        $('#mainContent').html(updatePage);

        $('#nextButton').on('click', function() { 
                question(questionNumber);
        });
    } else {
        
        var whatToPut = '<h1>Congratulations, you Win!</h1><button id="restartButton">Play Again</button>';

        updatePage = [updatePage.slice(0, whereToPut), whatToPut, updatePage.slice(whereToPut)].join('');

        $('#mainContent').html(updatePage);

        $('#restartButton').on('click', function() {
            questionNumber = 0;
            totalScore = 0;
            question(questionNumber);
        });
    }

    
};

function incorrectGuess(i) {
    
    totalScore = 0;
    questionNumber = 0;

    var updatePage = ['<div id="answerDiv"></div>' +
        '<h1>Wrong!<h1>' +
        '<button id="restartButton">Restart</button>'
        ];
    
    $('#mainContent').html(updatePage);

    $('#restartButton').on('click', function() {
        question(questionNumber);
    });
};

function question(i) {
    mainContent.html('<div id="questionDiv">' +
        '<h2>Question ' + (i + 1) + '<h2>' +
        '<h3>' + allQuestions[i].question + '</h3>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[0] + '" checked="yes">' + allQuestions[i].choices[0] + '</input>' + '<br />' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[1] + '">' + allQuestions[i].choices[1] + '</input>' + '<br />' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[2] + '">' + allQuestions[i].choices[2] + '</input>' + '<br />' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[3] + '">' + allQuestions[i].choices[3] + '</input>' + '<br />' +
        '<button type="button" class="btn btn-primary" id="submitButton">Submit</button>' + '</div>'
        
    );
    

    $('#submitButton').on('click', function() {
        if($('input:radio[name=questionChoices]:checked').val() === allQuestions[i].correctAnswer && i < 4) {
            correctGuess();
        } else {
            incorrectGuess();
        }
    });
};

question(questionNumber);
