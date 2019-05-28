/*----------------------------------------tutorialScreen.js-----------------------------------*/
/*------------------------------loads the tutorial screen data--------------------------------*/

//File Variable Declarations
var gameDisplayDiv;

/*
 1. loadTutorialData function is being called on the click of tutorial button on the About 
    screen
 2. Purpose of this function is to load the complete UI of the tutorial screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadTutorialData()
 6. Data returned - No data returned
*/

window.loadTutorialData = function () {
    //empties the contents of game-display-div which is the wrapper div of the game UI
    clearDisplayDiv();
    
    //adds background class to the body
    addBackground();

    //assigns the element with id 'game-display-div' to the file variable for further use
    gameDisplayDiv = document.getElementById("game-display-div");

    //creates UI of the tutorial screen
    createTutorialUI();

    //creates back button and binds functions on its click
    loadBackButton();
};

/*
 1. loadBackButton function is being called from loadTutorialData function.
 2. Purpose of this function is to create back button on the page which navigates the user to the 
    previous screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadBackButton()
 6. Data returned - No data returned
*/

function loadBackButton() {
    /*calls createBackButton function which creates the UI of the back button and return the element 
      which gets stored in the backButton variable*/
    var backButton = createBackButton();

    //binds loadAboutScreen function and playButtonAudio function on back button's click
    backButton.onclick = function () {
        loadAboutScreen();
        playButtonAudio();
    }
}

/*
 1. createTutorialUI function is a local function which is being called from loadTutorialData function
 2. Purpose of this function is to create the UI of tutorial screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createTutorialUI()
 6. Data returned - No data returned
*/

function createTutorialUI() {
    console.log('tut');
    //creates wrapper div for tutorial
    var tutorialDivWrapper = createElement("div","","tutorial-div","");
    //creates video tag for adding a video
    var tutorialVideo = createElement("video","","","");
    tutorialVideo.setAttribute("controls","");
    tutorialVideo.setAttribute("width","295");
    tutorialVideo.setAttribute("height","240");
    //creates source tag
    var tutorialVideoSource = createElement("source","","","");
    tutorialVideoSource.setAttribute("src","Demonstration.mp4");
    tutorialVideoSource.setAttribute("type","video/mp4");
    tutorialVideo.appendChild(tutorialVideoSource);
    tutorialDivWrapper.appendChild(tutorialVideo);
    //appends the video tutorial div to the main display div
    gameDisplayDiv.appendChild(tutorialDivWrapper);
}
