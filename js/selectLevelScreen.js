/*----------------------------------------selectLevelScreen.js------------------------------------------*/
/*----loads the level menu screen of the game and binds events on different elements of the page------*/

//File Variable Declarations
var gameDisplayDiv;

/*
 1. loadLevelSelectScreen function is being called from the play button click on the landing screen
 2. Purpose of this function is to initialise the select level screen and load various elements of the
    screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadLevelSelectScreen()
 6. Data returned - No data returned
 */

function loadLevelSelectScreen() {
    //destroy previous page's back button, if any
    destroyBackButton();
    //empties the contents of game-display-div which is the wrapper div of the game UI
    clearDisplayDiv();
    //adds background class to the body
    addBackground();
    //assigns the element with id 'game-display-div' to the file variable for further use
    gameDisplayDiv = document.getElementById("game-display-div");
    //creates UI of the select level screen
    createDifferentLevelButtons();
}

/*
 1. createMainMenuButton function is being called from the function createDifferentLevelButtons
 2. Purpose of this function is to create the main menu button and bind click events on it
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createMainMenuButton()
 6. Data returned - <button class="btnCustom btnGreen">Main Menu</button>
 */

function createMainMenuButton() {
    var menuButton = createElement("button", "Main Menu", "", "btnCustom");
    menuButton.classList.add('btnGreen');
    menuButton.onclick = mainMenuClick;
    return menuButton;
}

/*
 1. mainMenuClick function is being called on the click of Main Menu button
 2. Purpose of this function is to load the landing screen page
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - mainMenuClick()
 6. Data returned - No data returned
 */

function mainMenuClick() {
    //load landing screen of the game
    loadHomeScreen();
    //play button audio sound
    playButtonAudio();
}

/*
 1. createDifferentLevelButtons function is being called from the function loadLevelSelectScreen
 2. Purpose of this function is to create UI of the level select screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createDifferentLevelButtons()
 6. Data returned - No data returned
 */

function createDifferentLevelButtons() {

    //creates a wrapper div and assign an id to it
    var levelButtonDiv = createElement("div", "", "level-btn-div", "");
    //creates main menu button
    var homeButton = createMainMenuButton();
    homeButton.classList.add('btnLevels');
    levelButtonDiv.appendChild(homeButton);

    //iterates over numberOfLevels array and creates button for the corresponding level
    for (var index = 0; index < numberOfLevels.length; index++) {

        //checks if level is active or not
        if (numberOfLevels[index].isActive) {

            //creates a button for each level with the level name as a label on the button
            var levelButton = createElement("button", numberOfLevels[index].name, "", "btnCustom");
            levelButton.classList.add('btnYellow');
            levelButton.classList.add('btnLevels');
            levelButton.onclick = selectNewLevel(numberOfLevels[index].name);
            levelButtonDiv.appendChild(levelButton);
            var breakEl = createElement('br', "", "", "");
            levelButtonDiv.appendChild(breakEl);
        }
    }
    //appends the level buttons div to the main display div
    gameDisplayDiv.appendChild(levelButtonDiv);

}

/*
 1. selectNewLevel function is being called on click of level select buttons
 2. Purpose of this function is to load the relevant questions data according to the level
    selected by the user
 3. Arguments:
 4. levelName - it is the name of the level which is selected by the user
 5. Usage Example:
 6. Function Call - selectNewLevel('Easy')
 7. Data returned - No data returned
*/

function selectNewLevel(levelName) {
    return function () {
        switch (levelName) {

            case "Beginner":
                loadLevelData(gameBeginnerLevelQuestions, "Beginner");
                playButtonAudio();
                break;

            case "Easy":
                loadLevelData(gameEasyLevelQuestions, "Easy");
                playButtonAudio();
                break;

            case "Intermediate":
                loadLevelData(gameIntermediateLevelQuestions, "Intermediate");
                playButtonAudio();
                break;

            case "Difficult":
                loadLevelData(gameDifficultLevelQuestions, "Difficult");
                playButtonAudio();
                break;

            case "Pro":
                loadLevelData(gameProLevelQuestions, "Pro");
                playButtonAudio();
                break;

            case "Master":
                loadLevelData(gameMasterLevelQuestions, "Master");
                playButtonAudio();
                break;

            default:
                console.log("levelSelectScreen : selectNewLevel : Default");
        }
    }
}
