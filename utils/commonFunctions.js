/*----------------------------------------commonFunctions.js-----------------------------------*/
/*-------------------contains the common functions used in the application---------------------*/

//File Variable Declarations
var gameDisplayDiv;

/*
 1. clearDisplayDiv function is called whenever a new screen is loaded
 2. Purpose of this function is to clear the contents of the main display div
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - clearDisplayDiv()
 6. Data returned - No data returned
 */

window.clearDisplayDiv = function () {
  // Clears home-screen-div and removes it's background to show a different screen
    gameDisplayDiv = document.getElementById('game-display-div');
    gameDisplayDiv.innerHTML = '';

}

/*
 1. removeBackground function is called when the licenses page is loaded
 2. Purpose of this function is to remove the game's background
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - removeBackground()
 6. Data returned - No data returned
 */

function removeBackground(){
    document.body.classList.remove('background');
}

/*
 1. addBackground function is called whenever any page with background is loaded
 2. Purpose of this function is to show the game's background
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - addBackground()
 6. Data returned - No data returned
 */

function addBackground(){
    document.body.classList.add('background');
}

/*
 1. createBackButton function is called to load the back button on any page
 2. Purpose of this function is to create the UI of the back button
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createBackButton()
 6. Data returned - <button id="back-button" class="btnCustom btnBlueGreen">Go back</button>
 */

function createBackButton () {

  // Create a back button which will be used in every screen.
  var backButton = createElement ("button", "Go back", "back-button", "btnCustom");
  backButton.classList.add('btnBlueGreen');
  return backButton;

}

/*
 1. destroyBackButton function is called to destroy the back button on any page
 2. Purpose of this function is to remove the UI of the back button from the screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - destroyBackButton()
 6. Data returned - No data returned
*/

function destroyBackButton () {

  // Remove back button from div.
  if (document.getElementById("back-button")){
    document.getElementById("back-button").remove();
  }

}

/*
 1. playButtonAudio function is called whenever a button is clicked
 2. Purpose of this function is to play the button audio
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - playButtonAudio()
 6. Data returned - No data returned
 */

function playButtonAudio(){
    //checks whether the audio settings are enabled or disabled
    if (!checkAudioSettings()){
        //gets button audio div element
        var buttonAudio = document.getElementById("button-audio");
        //sets its source as the button audio file
        buttonAudio.setAttribute("src","sounds/button.wav");
        //pauses any previously played audios
        buttonAudio.pause();
        //plays the audio
        buttonAudio.play();
    }
}

/*
 1. playCorrectAnswerAudio function is called whenever a question is correctly
    answered
 2. Purpose of this function is to play the correct answer audio
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - playCorrectAnswerAudio()
 6. Data returned - No data returned
 */

function playCorrectAnswerAudio(){
    //checks whether the audio settings are enabled or disabled
    if (!checkAudioSettings()) {
        //gets correct answer audio div element
        var correctAnswerAudio = document.getElementById("button-correct");
        //sets its source as correct answer audio file
        correctAnswerAudio.setAttribute("src", "sounds/right.wav");
        //pauses any previously played audios
        correctAnswerAudio.pause();
        //plays the audio
        correctAnswerAudio.play();
    }
}

/*
 1. playIncorrectAnswerAudio function is called whenever a question is incorrectly
 answered
 2. Purpose of this function is to play the incorrect answer audio
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - playIncorrectAnswerAudio()
 6. Data returned - No data returned
 */

function playIncorrectAnswerAudio(){
    //checks whether the audio settings are enabled or disabled
    if (!checkAudioSettings()) {
        //gets incorrect answer audio div element
        var incorrectAnswerAudio = document.getElementById("button-incorrect");
        //sets its source as the incorrect answer audio file
        incorrectAnswerAudio.setAttribute("src", "sounds/wrong.wav");
        //pauses any previously played audios
        incorrectAnswerAudio.pause();
        //plays the audio
        incorrectAnswerAudio.play();
    }
}

/*
 1. playLevelCompleteAudio function is called whenever a level is completed
 2. Purpose of this function is to play the level completion audio
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - playLevelCompleteAudio()
 6. Data returned - No data returned
 */

function playLevelCompleteAudio(){
    //checks whether the audio settings are enabled or disabled
    if (!checkAudioSettings()) {
        //gets level completion audio div element
        var levelCompleteAudio = document.getElementById("button-level");
        //sets its source as the level completion audio file
        levelCompleteAudio.setAttribute("src", "sounds/level.wav");
        //pauses any previously played audios
        levelCompleteAudio.pause();
        //plays the audio
        levelCompleteAudio.play();
    }
}

/*
 1. playGameOverAudio function is called whenever the game gets over
 2. Purpose of this function is to play the game over audio
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - playGameOverAudio()
 6. Data returned - No data returned
 */

function playGameOverAudio(){
    //checks whether the audio settings are enabled or disabled
    if (!checkAudioSettings()) {
        //gets game over audio div element
        var levelGameOverAudio = document.getElementById("button-game-over");
        //sets its source as the game over audio file
        levelGameOverAudio.setAttribute("src", "sounds/gameover.wav");
        //pauses any previously played audios
        levelGameOverAudio.pause();
        //plays the audio
        levelGameOverAudio.play();
    }
}

/*
 1. playTimerAudio function is called whenever the timer starts
 2. Purpose of this function is to play the timer audio
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - playTimerAudio()
 6. Data returned - No data returned
 */

function playTimerAudio(){
    //checks whether the audio settings are enabled or disabled
    if (!checkAudioSettings()) {
        //gets timer audio div element
        var timerAudio = document.getElementById("timer-audio");
        //sets its source as the timer audio file
        timerAudio.setAttribute("src", "sounds/timer.mp3");
        //pauses any previously played audios
        timerAudio.pause();
        //plays the audio
        timerAudio.play();
    }
}

/*
 1. checkAudioSettings function is being called whenever an audio has to be played
 2. Purpose of this function is to check whether the game's audio settings are enabled
    or disabled
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - checkAudioSettings()
 6. Data returned - No data returned
 */

function checkAudioSettings(){
    for (var i = 0; i < settings.length; i++) {
        if ("Audio" == settings[i].name) {
            return settings[i].isDisabled;
        }
    }
}

/*
 1. createModalContent function is being called whenever a new modal window has to be loaded
 2. Purpose of this function is to create the content of the modal window
 3. Arguments:
 4. imgSource - the modal image source that has to be displayed inside the modal
 5. title - the modal header or title
 6. text - the modal secondary text or description
 7. btnText - the text inside the modal button
 8. btnAction - the action to be performed on the click of modal button
 9. Usage Example:
 10. Function Call - createModalContent("images/bulb.gif", "Header", "Modal Text", "OK", "")
 11. Data returned - <div id="game-modal" class="modal">.....</div>
 */

function createModalContent(imgSource, title, text, btnText, btnAction){
    var modalDiv = createElement("div","","game-modal","modal");
    if (imgSource != ""){
        var modalImageDiv =  createElement("img","","","");
        modalImageDiv.src = imgSource;
        if (imgSource == "images/bulb.gif"){
            modalImageDiv.style.marginLeft = -40;
        }
        modalDiv.appendChild(modalImageDiv);
    }
    if (title != ""){
        var modalTitleDiv = createElement("p",text,"","modal-title");
        modalTitleDiv.innerHTML = title;
        modalDiv.appendChild(modalTitleDiv);
    }
    if (text != ""){
        var modalTextDiv = createElement("p",text,"","modal-content");
        modalTextDiv.innerHTML = text;
        modalDiv.appendChild(modalTextDiv);
    }
    if (btnText != ""){
        var modalButton = createElement ("button", btnText, "", "btnCustom");
        modalButton.classList.add('btnLightBlue');
        console.log(btnText);
        if (btnText == "Next Level") {
            modalButton.onclick = checkForTips;
        }
        if (btnText == "Skip") {
            modalButton.onclick = loadNextLevelData;
        }
        if (btnText == "Home") {
            modalButton.onclick = loadHomeScreen;
        }
        modalDiv.appendChild(modalButton);
    }
    return modalDiv;
}

/*
 1. checkForTips function is being called from createModalContent
 2. Purpose of this function is to check if tips settings of the game is enabled
    and display the tips modal
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - checkForTips()
 6. Data returned - No data returned
 */

function checkForTips(){
    //checks whether the tips settings are enabled or not
    var showTips = false;
    for (var i = 0; i < settings.length; i++) {
        if ("Tips" == settings[i].name && !settings[i].isDisabled) {
            showTips = true;
        }
    }
    if (showTips){//show tips modal if tips are enabled
        showTipsModal();
    }
    else {//load next level data if tips are disabled
        loadNextLevelData();
    }
}

/*
 1. showModal function is being called whenever the created modal content has to be
    displayed on the game screen
 2. Purpose of this function is to show the modal window
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - showModal()
 6. Data returned - No data returned
 */

function showModal(){
    document.getElementById('game-modal').style.display = "block";
    var fadeDiv = createElement("div","","fade","");
    // fadeDiv.onclick = hideModal;
    document.body.appendChild(fadeDiv);
}

/*
 1. hideModal function is being called whenever the displayed modal content has to be
 hidden from the game screen
 2. Purpose of this function is to hide the modal window
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - hideModal()
 6. Data returned - No data returned
 */

function hideModal(){
    document.getElementById('game-modal-div').innerHTML = "";
    var fadeDiv = document.getElementById("fade");
    if (fadeDiv) fadeDiv.remove();
}

