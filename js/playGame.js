/*--------------------------------------------playGame.js---------------------------------------------*/
/*-----------------loads the screen in which the actual game is played by the user--------------------*/

//File Variable Declarations
var questionObject;
var questionPara;
var answerButton = [];
var levelDiv;
var gameDisplayDiv;
var gameModalDiv;
var scoreDivWrapper;
var questionsArray = [];
var lives;
var tipsArr = mathsTips;
var questionCount;
var tipsCount = 0;
var userScore;
var difficultyLevelName = "";
var numberOfIncorrectAnswers;
var isGameOver = false;
var timerVar;
var questionsVisited = 0;

/*
 1. loadLevelData function is being called from selectLevelScreen.js when the user clicks on a particular
 level to be played
 2. Purpose of this function is to initialise the play game screen and load various elements of the screen
 3. Arguments:
 4. levelBasedQuestionsArray - the questions array from the relevant js file from data according to the
 selected level
 5. difficultyLevel - the name of the level selected by the user
 6. Usage Example:
 7. Function Call - loadLevelData(gameBeginnerLevelQuestions, 'Beginner')
 8. Data returned - No data returned
 */
function loadLevelData(levelBasedQuestionsArray, difficultyLevel) {

    //empties the contents of game-display-div which is the wrapper div of the game UI
    clearDisplayDiv();

    //add background class to body
    addBackground();

    //empties the contents of question array and sets all main variables to empty or 0
    initialiseLevel();

    // sets questionsArray equal to the argument passed in the function
    questionsArray = levelBasedQuestionsArray;

    // sets difficultyLevelName equal to the argument passed in the function
    difficultyLevelName = difficultyLevel;

    //to set interval for the game timer to work
    timer();
    //assigns the elements from the page o the file variables for further use
    gameDisplayDiv = document.getElementById("game-display-div");
    gameModalDiv = document.getElementById("game-modal-div");

    //creates wrapper div for the level UI
    levelDiv = createElement("div", "", "levelDiv", "");

    //creates paragraph tag for displaying the question
    questionPara = createElement("p", "", "questionTag", "");

    //appends question paragraph tag to the level wrapper div
    levelDiv.appendChild(questionPara);

    //returns question to be displayed on the screen
    getQuestion();

    //creates answer buttons
    for (var counter = 0; counter < questionObject.answerArray.length; counter++) {
        var ansEl = createElement("button", "", "id" + counter, "btnCustom");
        ansEl.classList.add('btnAnswer');
        answerButton.push(ansEl);
        levelDiv.appendChild(ansEl);
    }

    //loads back button for navigating to the previous page
    loadLevelBackButton();

    //creates div for displaying score of the user
    createScoreDiv();

    //creates question and answer div
    createQuestionParagraph();

    //creates button for navigating to the next question
    createNextQuestionButton();
}

/*
 1. initialiseLevel function is being called from loadLevelData function
 2. Purpose of this function is to initialise the game variables to start new level
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - initialiseLevel()
 6. Data returned - No data returned
 */
function initialiseLevel() {

    // Initialise the variables before loading the level.
    questionsArray = [];
    lives = 3;
    questionCount = 0;
    userScore = 0;
    numberOfIncorrectAnswers = 0;
    questionsVisited = 0;

}

/*
 1. loadNextLevelData function is called when user completes the current level
 2. Purpose of this function is to load next level for the user
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadNextLevelData()
 6. Data returned - No data returned
 */
function loadNextLevelData() {

    //play button audio
    playButtonAudio();

    //hide modal displayed for previous level completion
    hideModal();

    //load level according to the previous level played
    if (difficultyLevelName == "Beginner") {
        loadLevelData(gameEasyLevelQuestions, "Easy");
    }
    else if (difficultyLevelName == "Easy") {
        loadLevelData(gameIntermediateLevelQuestions, "Intermediate");
    }
    else if (difficultyLevelName == "Intermediate") {
        loadLevelData(gameDifficultLevelQuestions, "Difficult");
    }
    else if (difficultyLevelName == "Difficult") {
        loadLevelData(gameProLevelQuestions, "Pro");
    }
    else if (difficultyLevelName == "Pro") {
        loadLevelData(gameMasterLevelQuestions, "Master");
    }
    else {
        loadHomeScreen();
    }
}

/*
 1. createLivesDiv function is called from loadLevelData function
 2. Purpose of this function is to load the div displaying the initial lives (bananas) of the user
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createLivesDiv()
 6. Data returned - No data returned
 */

function createLivesDiv() {
    //creates wrapper div for displaying user's lives (bananas)
    var bananaDivWrapper = createElement("div", "", "banana-wrapper", "");

    //creates the inner divs for displaying user's lives (bananas)
    for (var i = 0; i < lives; i++) {
        var bananDiv = createElement("div", "", "", "banana-div");
        var bananaImg = createElement("img", "", "", "");
        bananaImg.src = "images/banana.png";
        bananDiv.appendChild(bananaImg);
        bananaDivWrapper.appendChild(bananDiv);
    }

    //append the lives div to the main game display div
    gameDisplayDiv.appendChild(bananaDivWrapper);


}

/*
 1. createScoreDiv function is called from loadLevelData function
 2. Purpose of this function is to load the div displaying the current score of the user
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createScoreDiv()
 6. Data returned - No data returned
 */

function createScoreDiv() {
    //creates wrapper div for displaying score of the user
    scoreDivWrapper = createElement("div", "", "score-wrapper", "counter");

    //calls function to display initial user score i.e. 0
    updateScoreDisplay(0);

    //appends the score div to the main game display div
    gameDisplayDiv.appendChild(scoreDivWrapper);


}

/*
 1. updateScoreDisplay function is called whenever the user score needs to be updated
 2. Purpose of this function is to display the updated score
 3. Arguments:
 4. score - the current score of the user that needs to be displayed
 4. Usage Example:
 5. Function Call - updateScoreDisplay(20)
 6. Data returned - No data returned
 */

function updateScoreDisplay(score) {
    //converts score to string and prepend 0 if the score is in single digit
    var scoreString = (score.toString().length > 1) ? score.toString() : '0' + score.toString();

    //spilts the score string to store the digits in a array
    var scoreArr = scoreString.split('');

    //gets the score wrapper div and empties it
    var scoreDiv = document.getElementById('score-wrapper');
    scoreDiv.innerHTML = '';

    //iterates through the array of the digits of the score and displays each digit
    for (var i = 0; i < scoreArr.length; i++) {
        var spanClass = 'digit-' + scoreArr[i];
        var spanDiv = createElement('span', scoreArr[i], '', spanClass);
        scoreDiv.appendChild(spanDiv);
    }
}

/*
 1. createQuestionParagraph function is called whenever new question has to be displayed
    on the screen
 2. Purpose of this function is to create UI of the question section
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createQuestionParagraph()
 6. Data returned -  No data returned
 */

function createQuestionParagraph() {
    //increments question count
    questionCount++;
    questionPara.innerHTML = questionObject.question;
    //creates answer buttons and binds events on their click
    for (var counter = 0; counter < questionObject.answerArray.length; counter++) {
        //console.log (answerButton.getElementById("id"));
        document.getElementById("id" + counter).innerHTML = questionObject.answerArray[counter];
        document.getElementById("id" + counter).setAttribute('value', questionObject.answerArray[counter]);
        //answerButton = createElement ("button", questionObject.answerArray[counter], "id"+counter, "");
        for (var i = 0; i < answerButton.length; i++) {
            var btnValue = answerButton[i].getAttribute('value');
            answerButton[i].onclick = checkButtonAnswer(btnValue);
        }
    }
}

/*
 1. getQuestion function is called whenever new question has to be loaded
 2. Purpose of this function is to get new question data into the question object
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - getQuestion()
 6. Data returned -  questionObject
 */

var getQuestion = function getQuestionObject() {

  questionObject = [];
  questionObject = questionsArray[Math.floor(Math.random() * questionsArray.length)];
  while (questionObject.isVisited == 1) {
    questionObject = questionsArray[Math.floor(Math.random() * questionsArray.length)];
  }

}

/*
 1. createNextQuestionButton function is called from the loadLevelData function
 2. Purpose of this function is to display the Skip Question button on the screen and bind
    event on its click
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createNextQuestionButton()
 6. Data returned -  No data returned
 */

function createNextQuestionButton() {
    //creates wrapper div for next question button
    var nextQuestionDiv = createElement("div", "", "next-question-btn-div", "");
    //creates skip question button tag
    var nextQuestionBtn = createElement("button", "Skip Question", "", "btnCustom");
    //add CSS classes to the button
    nextQuestionBtn.classList.add('btnLightBlue');
    //binds events on its click
    nextQuestionBtn.onclick = nextButtonAction;
    //append the skip question button to its wrapper
    nextQuestionDiv.appendChild(nextQuestionBtn);
    //appends the skip question wrapper to the level screen wrapper
    levelDiv.appendChild(nextQuestionDiv);
    //appends the level screen wrapper to the main display div
    gameDisplayDiv.appendChild(levelDiv);

}

/*
 1. loadLevelBackButton function is called from the loadLevelData function
 2. Purpose of this function is to display the back button on the screen and bind event
    on its click
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadLevelBackButton()
 6. Data returned -  No data returned
 */

function loadLevelBackButton() {
    //creates back button and assigns it to the file variable
    var backButton = createBackButton();
    //binds functions on the button's click
    backButton.onclick = function () {

        // Destroys back button if any
        destroyBackButton();
        //plays button audio
        playButtonAudio();
        //stops the timer
        clearInterval(timerVar);
        //loads the level select screen
        loadLevelSelectScreen();
    }
}

/*
 1. nextButtonAction function is called on the click of 'Skip Question' button
 2. Purpose of this function is to display the next question of the level
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - nextButtonAction()
 6. Data returned -  No data returned
*/

function nextButtonAction() {

    //empties the question object
    questionObject = [];
    //sets new question from the questions data into the question object
    // questionObject = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    // while (questionObject.isVisited == 1) {
    //     questionObject = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    // }
    getQuestion();
    //console.log ("Check question object : nextButtonAction");
    //console.log (questionObject);
    //creates question section UI
    createQuestionParagraph();
    //plays button audio
    playButtonAudio();
}

/*
 1. showTipsModal function is called after the completion of the level
 2. Purpose of this function is to display the tips modal
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - showTipsModal()
 6. Data returned -  No data returned
*/

function showTipsModal() {
    hideModal();
    //creates the tips modal and appends to the game modal div
    gameModalDiv.appendChild(createModalContent("images/bulb.gif", tipsArr[tipsCount].title, tipsArr[tipsCount].text, "Skip", ""));
    //make the tips modal visible
    showModal();
    tipsCount++;
    //hide the tips modal after 10 seconds
    // setTimeout(function () {
    //     hideModal();
    //    loadNextLevelData();
    // }, 10000);
}

/*
 1. checkButtonAnswer function is called on the click of answer button
 2. Purpose of this function is to call the checkAnswer function to check the correctness
    of the answer
 3. Arguments:
 4. answer - answer selected by the user
 5. Usage Example:
 6. Function Call - checkButtonAnswer('63')
 7. Data returned -  checkAnswer('63')
*/

function checkButtonAnswer(answer) {
    return function () {
        checkAnswer(answer);
    }
}

/*
 1. checkAnswer function is called from checkButtonAnswer function to check whether the answer
 given by the user is correct or not
 2. Purpose of this function is to check the correctness of the answer and perform further
 operations
 3. Arguments:
 4. answer - answer selected by the user
 5. Usage Example:
 6. Function Call - checkAnswer('63')
 7. Data returned - No data returned
 */

function checkAnswer(answer) {

    // if the answer is correct
    if (answer == questionObject.matchedValue) {
      //sets the question as visited
       questionObject.isVisited = 1;
        // console.log(updateUserScore(true));
        //if the score has reached the maximum level score
        var score = updateUserScore(true);
        if (score >= maxScore ) {
            if (difficultyLevelName == "Master") {//if the difficulty level is master
                //calls the game won function
                gameWon();
                return false;
            }
            else {//if the difficulty level is not master
                goToNextLevel(); //naviagte to next level
                return false;
            }

        }
        if (difficultyLevelName != "" && difficultyLevelName != "Easy" && difficultyLevelName != "Beginner" && numberOfIncorrectAnswers > 0) {
          numberOfIncorrectAnswers = 0;
        }

        //plays the audio for correct answer
        playCorrectAnswerAudio();
    }
    else {//if the answer is incorrect
        //if the difficulty level is not easy and beginner
        if (difficultyLevelName != "Beginner" && difficultyLevelName != "Easy") {
            //calls the function to decrement the score
            updateUserScore(false);
            //updates the incorrect answers' count
            numberOfIncorrectAnswers += 1;
            //if the incorrect answers' count reaches 3
            if (numberOfIncorrectAnswers == 3) {
                //finish the game for the user
                gameOver();
                return false;
            }
        }
        //plays incorrect answer audio
        playIncorrectAnswerAudio();
    }
    //create next question display
    setTimeout(function () {
        getQuestion();
        createQuestionParagraph();
    }, 500);
}

/*
 1. updateUserScore function is called from checkAnswer function to update the user score
 depending upon the correctness of the answer
 2. Purpose of this function is to increment or decrement the user score
 3. Arguments:
 4. isIncrement - It determines whether the score has to be incremented or decremented
 5. Usage Example:
 6. Function Call - updateUserScore(true)
 7. Data returned - 16 (user's updated score)
 */

function updateUserScore(isIncrement) {

    //checks if isIncrement is true
    if (isIncrement) {
        //increments user score
        userScore += 2;

    } else if (!isIncrement) {
        if (userScore > 0) {
            //else decrements user score
            userScore -= 2;
        }
    }
    //updates the score display on the page
    updateScoreDisplay(userScore);
    //returns the updated score
    return userScore;
}

/*
 1. goToNextLevel function is called from checkAnswer function if the user has attained the maximum
 level score
 2. Purpose of this function is to show the level completion modal to the user and then
 navigate the user to the next level on the click of Next Level button
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - goToNextLevel()
 6. Data returned - No data returned
 */

function goToNextLevel() {
    //stops the timer
    clearInterval(timerVar);
    //plays level completion audio
    playLevelCompleteAudio();
    //creates level completion modal and appends to the game modal div
    gameModalDiv.appendChild(createModalContent("images/thumbup.jpg", "Well Done!", "You have completeted this level.","Next Level", ""));
    //make the modal visible on the page
    showModal();
}

/*
 1. gameWon function is called when the game is won
 2. Purpose of this function is to show the game won modal to the user and then
 navigate the user to the landing screen on the click of Play again button
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - gameWon()
 6. Data returned - No data returned
 */

function gameWon(){
    //stops the timer
    clearInterval(timerVar);
    //plays audio for game won
    playLevelCompleteAudio();
    //creates game won modal and appends to the game modal div
    gameModalDiv.appendChild(createModalContent("images/thumbup.jpg", "Game Won!", "You are a Maths Master!", "Play Again", ""));
    //make the modal visible on the page
    showModal();
}

/*
 1. gameOver function is called either when the time runs out or when the user gives
 three incorrect answers consecutively
 2. Purpose of this function is to show the game over modal to the user and then
 navigate the user to the landing screen on the click of Home button
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - gameOver()
 6. Data returned - No data returned
 */

function gameOver() {
    //stops the timer
    clearInterval(timerVar);
    //plays audio for game over
    playGameOverAudio();
    //creates game over modal and appends to the game modal div
    gameModalDiv.appendChild(createModalContent("images/thumbdown.jpg", "Game Over!", "Please try again!", "Home", "loadLevelSelectScreen()"));
    //make the modal visible on the page
    showModal();
}

/*
 1. timer function is called from the function loadLevelData
 2. Purpose of this function is to set interval of the level timer/stopwatch
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - timer()
 6. Data returned - No data returned
 */

//https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
function timer() {

    var min;
    var sec = 0;
    for (var i = 0; i < settings.length; i++) {
        if ("Timer" == settings[i].name) {
            if (settings[i].isDisabled) {
                return;
            }
            min = settings[i].minutes;

            if (difficultyLevelName == "Intermediate" || difficultyLevelName == "Difficult") {
              min = min * 2;
            } else if (difficultyLevelName == "Pro" || difficultyLevelName == "Master") {
              min = min * 4;
            }
        }
    }
    if (min > 0) {
        min--;
        sec = 59;
    }

    var timerPara;

    if (min >= 10) {
        timerPara = createElement("button", min + ":" + sec, "timer-btn", "btnCustom");
    } else {
        timerPara = createElement("button", "0" + min + ":" + sec, "timer-btn", "btnCustom");
    }

    timerPara.classList.add('btnYellow');
    timerVar = setInterval(function () {
        //document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        playTimerAudio();
        if (sec > 9) {
            if (min < 10) {
                timerPara.innerHTML = "0" + min + ":" + sec;
            } else {
                timerPara.innerHTML = min + ":" + sec;
            }
        } else {
            if (min < 10) {
                timerPara.innerHTML = "0" + min + ":0" + sec;
            } else {
                timerPara.innerHTML = min + ":0" + sec;
            }
        }
        sec--;
        if (sec < 0 && min > 0) {
            min--;
            sec = 59;
        } else if (min == 0 && sec == 0) {
            timerPara.innerHTML = min + ":0" + sec;
            gameOver();
            clearInterval(timerVar);
            nextButtonAction();
        }
        //console.log ("Timer " + min + " sec " + sec);
    }, 1000);

    gameDisplayDiv.appendChild(timerPara);
}
