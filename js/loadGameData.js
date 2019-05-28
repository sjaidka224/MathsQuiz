/*----------------------------------------loadGameData.js------------------------------------------*/
/*----loads the landing screen of the game and binds events on different elements of the page------*/

//File Variable Declarations
var gameContainer;
var gameDisplay;
var gameAudio;
var gameModal;

/*
 1. loadHomeScreen function is being called on body onload from index.html
 2. Purpose of this function is to initialise the application and load wrapper divs for various
 elements of the game
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadHomeScreen()
 6. Data returned - No data returned
*/

function loadHomeScreen() {
    //empty the contents of document's body if any
    document.body.innerHTML = "";
    //add class background to the body to load the background image
    addBackground();
    //create wrapper div for the application with class container
    gameContainer = createElement("div", "", "container", "");
    //create wrapper div for the UI of the game
    gameDisplay = createElement("div", "", "game-display-div", "");
    //create wrapper div for the audio elements of the game
    gameAudio = createElement("div", "", "game-audio-div", "");
    //create wrapper div for the modal elements of the game
    gameModal = createElement("div", "", "game-modal-div", "");
    //create landing page UI and append it to the gameDisplay div
    createHomeScreenElements();
    //create audio tags and append them to the gameAudio div
    createAudioElements();
}

/*
 1. createHomeScreenElements function is being called from the function loadHomeScreen
 2. Purpose of this function is to create UI elements of the landing screen and append the elements to
 the document's body.
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadHomeScreen()
 6. Data returned - No data returned
 */

function createHomeScreenElements() {
    var homeScreenDiv = createElement("div", "", "home-screen-div", "");
    homeScreenDiv.appendChild(createHeadingTextAndImageDiv());
    homeScreenDiv.appendChild(createButtonsDiv());
    gameDisplay.appendChild(homeScreenDiv);
    gameContainer.appendChild(gameAudio);
    gameContainer.appendChild(gameDisplay);
    gameContainer.appendChild(gameModal);
}

/*
 1. createAudioElements function is being called from the function loadHomeScreen
 2. Purpose of this function is to create audio elements of the application and append the elements to
 the document's body.
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createAudioElements()
 6. Data returned - No data returned
 */

function createAudioElements() {
    //creates audio tag to be played on button click
    createAudio("sounds/button.wav", "button-audio", "audio/wav");
    //creates audio tag to be played on correct answer event
    createAudio("sounds/right.wav", "button-correct", "audio/wav");
    //creates audio tag to be played on incorrect answer event
    createAudio("sounds/wrong.wav", "button-incorrect", "audio/wav");
    //creates audio tag to be played on level completion event
    createAudio("sounds/level.wav", "button-level", "audio/wav");
    //creates audio tag to be played on game over event
    createAudio("sounds/gameover.wav", "button-game-over", "audio/wav");
    //creates audio tag to be played on timer ticking event
    createAudio("sounds/timer.mp3", "timer-audio", "audio/mp3");
}

/*
 1. createAudio function is being called from the function createAudioElements
 2. Purpose of this function is to create audio tags to be appended to the audio wrapper div
 3. Arguments:
 4. audioSource - refers to the path of the source file of the audio and sets src attribute
 of the source tag inside the audio tag
 5. audioId - sets id attribute of the audio tag
 6. audioType - refers to the type of the audio source file and sets type attribute of the
 source tag inside the audio tag
 7. Usage Example:
 5. Function Call - createAudio("sounds/audioFile.wav","example-audio","audio/wav")
 6. Data returned - No data returned
 */

function createAudio(audioSource, audioId, audioType) {
    var audioTag = createElement("audio", "", audioId, "");
    var audioSourceTag = createElement("source", "", "", "");
    audioSourceTag.setAttribute("src", audioSource);
    audioSourceTag.setAttribute("type", audioType);
    audioTag.appendChild(audioSourceTag);
    gameAudio.appendChild(audioTag)
}

/*
 1. crateHeadingTextAndImageDiv function is being called from the function createHomeScreenElements
 2. Purpose of this function is to create the main heading and images of the landing page
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createHeadingTextAndImageDiv()
 6. Data returned - <div id="heading-text-div">...</div>
 */

function createHeadingTextAndImageDiv() {
    //create main heading
    var headingTextDiv = createElement("div", "", "heading-text-div", "");
    var headingParagraph = createElement("p", "Feed me NUMBERS", "", "");
    headingTextDiv.appendChild(headingParagraph);
    //create image div
    var imageDiv = createElement("div", "", "img-div", "");
    var image = createElement("img", "", "", "");
    image.setAttribute("src", "images/monkey.gif");
    imageDiv.appendChild(image);
    headingTextDiv.appendChild(imageDiv);
    //return elements created to be appended to the main display div
    return headingTextDiv;
}

/*
 1. createButtonsDiv function is being called from the function loadHomeScreen
 2. Purpose of this function is to create circular buttons of the landing screen and bind relevant events
    on their click
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createButtonsDiv()
 6. Data returned - <div id="home-btns-div">...</div>
 */

function createButtonsDiv() {
    //create wrapper div
    var homeButtonsContainer = createElement("div", "", "home-btns-div", "");
    //create play button
    var playButtonDiv = createSingleButton("btn-divs btn-play", "Play");
    playButtonDiv.onclick = onPlayButtonClick;
    //create settings button
    var settingsButtonDiv = createSingleButton("btn-divs btn-settings", "Settings");
    settingsButtonDiv.onclick = onSettingsButtonClick;
    //create about button
    var aboutButtonDiv = createSingleButton("btn-divs btn-about", "About");
    aboutButtonDiv.onclick = onAboutButtonClick;
    //append created button elements to the wrapper div
    homeButtonsContainer.appendChild(playButtonDiv);
    homeButtonsContainer.appendChild(settingsButtonDiv);
    homeButtonsContainer.appendChild(aboutButtonDiv);
    //return wrapper div to be appended to the main display div
    return homeButtonsContainer;
}

/*
 1. createSingleButton function is being called from the function createButtonsDiv
 2. Purpose of this function is to create each button of the landing screen
 3. Arguments:
 4. classOfDiv - class name to be assigned to the button div
 5. textDiv - text/label to be displayed inside the button div
 6. Usage Example:
 7. Function Call - createSingleButton("example-class","Example Text")
 8. Data returned - <div class="example-class">Example Text</div>
*/

function createSingleButton(classOfDiv, textDiv) {
    //create div to be displayed in the form of a circular button
    var buttonDiv = createElement("div", "", "", classOfDiv);
    //set text/label inside the div
    var buttonTextPara = createElement("p", textDiv, "", "");
    //append text/label to the outer div element
    buttonDiv.appendChild(buttonTextPara);
    //return outer div element to be appended to the main buttons div
    return buttonDiv;

}

/*
 1. onPlayButtonClick function is being called from the function createButtonsDiv
 2. Purpose of this function is to bind events to the play button div
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - onPlayButtonClick()
 6. Data returned - No data returned
 */

function onPlayButtonClick() {
    //load level menu screen in which the level to be played can be selected
    loadLevelSelectScreen();
    //play button audio sound
    playButtonAudio();

}
/*
 1. onSettingsButtonClick function is being called from the function createButtonsDiv
 2. Purpose of this function is to bind events to the settings button div
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - onSettingsButtonClick()
 6. Data returned - No data returned
 */

function onSettingsButtonClick() {
    //load settings screen
    loadSettingsScreen();
    //play button audio sound
    playButtonAudio();

}

/*
 1. onAboutButtonClick function is being called from the function createButtonsDiv
 2. Purpose of this function is to bind events to the about button div
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - onAboutButtonClick()
 6. Data returned - No data returned
 */

function onAboutButtonClick() {
    //load About Screen
    loadAboutScreen();
    //play button audio sound
    playButtonAudio();
}
