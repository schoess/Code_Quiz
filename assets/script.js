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

    var updatePage = question(questionNumber);
    
    $('#mainContent').html(updatePage);

    };

function question(i) { 
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

// end screen of quiz
function displayScore() {
    //Text, form and button on end page
    $('#mainContent').html('<h2>Well Done!</h2>' + '<h4> You scored ' + totalScore + '!</h4>' + '<h4>Please enter your initials for the highscores</h4>' +
    '<hr />' + '<form>' + '<input class="form-control" id="initialsBox" type="text" placeholder="Your Initials">' + '<button type="button" class="btn btn-primary" id="hiScoreSubmitBtn">Submit</button>' + '</form>');
    // Submit button on end screen of quiz
    $('#hiScoreSubmitBtn').on('click', function(event) {
        console.log(initialsBox[0].value);
        localStorage.setItem(initialsBox[0].value, totalScore);
        mainContent.html('<h1>' + initialsBox[0].value + ' scored a ' + totalScore + '!' + '</h1>');


        // create new variable that = loacal storage "initials" and "total score"
        // add created var to high scores list
       // mainContent.append(local storage stuff)
    })
    var initialsBox = $("#initialsBox");
    // var notWorkingBox = document.getElementById("initialsBox");
    //    console.log(notWorkingBox.value);
    

};
//calls function for quiz to run
question(questionNumber);
