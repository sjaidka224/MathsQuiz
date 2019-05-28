/*------------------------------------------aboutScreen.js--------------------------------------------*/
/*-------loads the about screen of the game and binds events on different elements of the page-------*/

//File Variable Declarations
var gameDisplayDiv;

/*
 1. loadAboutScreen function is being called from the about button click on the landing screen
 2. Purpose of this function is to initialise the about screen and load various elements of the
    screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadAboutScreen()
 6. Data returned - No data returned
 */

function loadAboutScreen() {
    //add background class to body
    addBackground();
    //destroy previous page's back button, if any
    destroyBackButton();
    //empties the contents of game-display-div which is the wrapper div of the game UI
    clearDisplayDiv();
    //assigns the element with id 'game-display-div' to the file variable for further use
    gameDisplayDiv = document.getElementById("game-display-div");
    //creates UI of the about screen
    createAboutScreenButtons();
}

/*
 1. createMainMenuButton function is being called from the function createAboutScreenButtons
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
 1. createAboutScreenButtons function is being called from the function loadAboutScreen
 2. Purpose of this function is to create UI of the about screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createAboutScreenButtons()
 6. Data returned - No data returned
 */

function createAboutScreenButtons() {

    //creates a wrapper div and assign an id to it
    var aboutButtonDiv = createElement("div", "", "level-btn-div", "");
    //creates main menu button
    var homeButton = createMainMenuButton();
    homeButton.classList.add('btnLevels');
    aboutButtonDiv.appendChild(homeButton);

    //iterates over aboutTabs array and creates button for the corresponding tab
    for (var index = 0; index < aboutTabs.length; index++) {

        //checks if tab is active or not
        if (aboutTabs[index].isActive) {

            //creates a button for each tab with the tab name as a label on the button
            var aboutButton = createElement("button", aboutTabs[index].name, "", "btnCustom");
            aboutButton.classList.add('btnYellow');
            aboutButton.classList.add('btnLevels');
            aboutButton.onclick = loadAboutData(aboutTabs[index].name);
            aboutButtonDiv.appendChild(aboutButton);
            var breakEl = createElement('br', "", "", "");
            aboutButtonDiv.appendChild(breakEl);
        }
    }
    //appends the about buttons div to the main display div
    gameDisplayDiv.appendChild(aboutButtonDiv);

}

/*
 1. loadAboutData function is being called on click of about buttons
 2. Purpose of this function is to load the relevant data according to the about tab
    selected by the user
 3. Arguments:
 4. tabName - it is the name of the about tab which is selected by the user
 5. Usage Example:
 6. Function Call - loadAboutData('Tutorial')
 7. Data returned - No data returned
*/

function loadAboutData(tabName) {
    return function () {
        switch (tabName) {
            
            case "Licenses":
                loadLicensesData();
                playButtonAudio();
                break;

            case "Tutorial":
                loadTutorialData();
                playButtonAudio();
                break;

            default:
                console.log("levelSelectScreen : buttonClickAction : Default");
        }
    }
}
