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

function correctGuess() { 
    totalScore ++; 
    questionNumber ++;

    // check if questionionNumber is within range
    // if not, do somethin else
    var updatePage = question(questionNumber);

    localStorage.setItem("scoreCount", totalScore);
    
    $('#mainContent').html(updatePage); 

    if(questionNumber < 4){
        var updatePage = question(questionNumber);
    
        $('#mainContent').html(updatePage); 

    }

    
};

function incorrectGuess() {
    
    totalScore = 0;
    questionNumber ++;

    // if questionNumber is in range go to next question
    // if not, display score
    var updatePage = question(questionNumber);
    
    $('#mainContent').html(updatePage);

    };

function question(i) { //displayQuestion
    // if i is within range, do
    if (i < 4) {
    mainContent.html('<div id="questionDiv">' +
        '<h2>Question ' + (i + 1) + '<h2>' +
        '<h3>' + allQuestions[i].question + '</h3>' +
        '<input type="radio" class="radiobtn" name="questionChoices" value="' + allQuestions[i].choices[0] + '" checked="yes">' + allQuestions[i].choices[0] + '</input>' + '<br />' +
        '<input type="radio" class="radiobtn" name="questionChoices" value="' + allQuestions[i].choices[1] + '">' + allQuestions[i].choices[1] + '</input>' + '<br />' +
        '<input type="radio" class="radiobtn" name="questionChoices" value="' + allQuestions[i].choices[2] + '">' + allQuestions[i].choices[2] + '</input>' + '<br />' +
        '<input type="radio" class="radiobtn" name="questionChoices" value="' + allQuestions[i].choices[3] + '">' + allQuestions[i].choices[3] + '</input>' + '<br />' +
        '<button type="button" class="btn btn-primary" id="submitButton">Submit</button>' + '</div>' );
    } else {
        chooseNextScreen();
    };
    

    $('#submitButton').on('click', function() {
        
        if($('input:radio[name=questionChoices]:checked').val() === allQuestions[i].correctAnswer && i < 4) {
            correctGuess();
        } else {
            incorrectGuess();
        } 
        
    });
};

 function chooseNextScreen(){
    if (questionNumber < 4) {
        question();
    } else {
        displayScore();
    }
    };

function displayScore() {
    $('#mainContent').html('<h2>Well Done!</h2>' + '<h4> You scored ' + totalScore + '!</h4>' + '<h4>Please enter your initials for the highscores</h4>' +
    '<hr />' + '<input class="form-control" type="text" placeholder="Default input">' + '<button type="button" class="btn btn-primary" id="submitButton">Submit</button>');
    };

question(questionNumber);
