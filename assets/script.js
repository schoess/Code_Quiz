//total score var that is defined in local storage and question number var that will be incremented later on
var totalScore = 0, 
    questionNumber = 0,
    i = 0;
// questions object
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
//logic if correct answer is chosen
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
//logic if incorrect answer is chosen
function incorrectGuess() {
    
    totalScore = 0;
    questionNumber ++;

    var updatePage = question(questionNumber);
    
    $('#mainContent').html(updatePage);

    };

//starting screen
        function welcome() {
    mainContent.html('<h2>Welcome to the Code Quiz!</h2>' + '<br />' + 
    '<h5>If you think you have what it takes, go ahead and click the start button to see how you do!</h5>' 
    + '<button type="button" class="btn btn-primary" id="startQuizBtn">Start Quiz!</button>');
    document.getElementById("startQuizBtn").addEventListener("click", function() {question(i)});
};


//loads start page to begin with
window.onload = function () {
    this.welcome();
};
//logic to run through questions object
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
    
//submit button at the bottom of the questions
    $('#submitButton').on('click', function() {
        
        if($('input:radio[name=questionChoices]:checked').val() === allQuestions[i].correctAnswer && i < 4) {
            correctGuess();
        } else {
            incorrectGuess();
        } 
        
    });
};

//logic to decide what screen to append next
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
    $('#mainContent').html('<h2>Well Done!</h2>' + '<h4> You scored ' + totalScore + '!</h4>' + '<h4>Please enter your name for the end screen</h4>' +
    '<hr />' + '<form>' + '<input class="form-control" id="initialsBox" type="text" placeholder="Your Name">' + '<button type="button" class="btn btn-primary" id="hiScoreSubmitBtn">Submit</button>' + '</form>');
    // Submit button on end screen of quiz
    $('#hiScoreSubmitBtn').on('click', function(event) {
        localStorage.setItem(initialsBox[0].value, totalScore);
        mainContent.html('<h1>' + initialsBox[0].value + ' scored a ' + totalScore + '!' + '</h1>');
    });
    var initialsBox = $("#initialsBox");
};
//calls function for quiz to run

question(questionNumber);


//Ran out of time to do the timer, been working on it all week. 
//I will submit and after feedback will need some 1 on 1 help with set interval and applying it to this page.
//I have a lot of hours into this thing... :/