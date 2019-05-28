/*----------------------------------------settingsScreen.js-----------------------------------*/
/*-----loads the settings screen data and binds events on different elements of the page------*/

//File Variable Declarations
var disableButtonsDiv;
var gameDisplayDiv;

/*
 1. loadSettingsScreen function is being called on the click of Settings option on the landing 
    screen
 2. Purpose of this function is to load the complete UI of the setting screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadSettingsScreen()
 6. Data returned - No data returned
*/

window.loadSettingsScreen = function () {
    //destroy previous page's back button, if any
    destroyBackButton();

    //empties the contents of game-display-div which is the wrapper div of the game UI
    clearDisplayDiv();
    
    //adds background class to the body
    addBackground();

    //assigns the element with id 'game-display-div' to the file variable for further use
    gameDisplayDiv = document.getElementById("game-display-div");

    //creates UI of the settings screen
    createSettingsOptions();

    //creates back button and binds functions on its click
    loadSettingsBackButton();
};

/*
 1. loadBackButton function is being called from loadSettingsScreen function.
 2. Purpose of this function is to create back button on the page which navigates the user to the 
    previous screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadBackButton()
 6. Data returned - No data returned
*/

function loadSettingsBackButton() {
    /*calls createBackButton function which creates the UI of the back button and return the element 
      which gets stored in the backButton variable*/
    var backButton = createBackButton();

    //binds loadHomeScreen function and playButtonAudio function on back button's click
    backButton.onclick = function () {
        console.log('clicked');
        loadHomeScreen();
        playButtonAudio();
    }
}

/*
 1. createSettingsOptions function is a local function which is being called from loadSettingsScreen function
 2. Purpose of this function is to create the labels of the settings and the corresponding toggle buttons for 
    disabling or enabling the options
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createSettingsOptions()
 6. Data returned - No data returned
*/

function createSettingsOptions() {

    //creates a wrapper div for adding settings options inot it
    disableButtonsDiv = createElement("div", "", "disable-buttons-div", "");

    //creates a label button and a corresponding toggle button for disabling/enabling different options
    for (var count = 0; count < settings.length; count++) {
        var settingsSpan = createElement("button", settings[count].name, "", "btnCustom");
        settingsSpan.classList.add('btnYellow');
        settingsSpan.classList.add('btnSettings');
        var settingsOption = createElement("input", "", "", "");
        var settingsOptionLabel = createElement("label", "", "", "switch");
        var settingsSlider = createElement("span", "", "", "slider");
        var settingsDivider = createElement("p", "", "", "");
        settingsSpan.style.float = "left";
        settingsOption.type = "checkbox";
        settingsOption.id = settings[count].name;
        settingsOption.value = settings[count].id;
        settingsOption.checked = !settings[count].isDisabled;
        //binds function on click of toggle button to set its value as enabled or disabled
        settingsOption.onclick = setToggleButtonValues;
        settingsSlider.classList.add('round');
        settingsDivider.style.clear = "both";
        settingsOptionLabel.appendChild(settingsOption);
        settingsOptionLabel.appendChild(settingsSlider);
        disableButtonsDiv.appendChild(settingsSpan);
        disableButtonsDiv.appendChild(settingsOptionLabel);
        disableButtonsDiv.appendChild(settingsDivider);
    }
    
    //append the whole settings UI to the main wrapper div gameDisplayDiv
    gameDisplayDiv.appendChild(disableButtonsDiv);
}

/*
 1. setToggleButtonValues function is being called from createSettingsOptions
 2. Purpose of this function is to enable or disable the settings option on the toggle button click
 3. It takes event object as its argument
 7. Usage Example:
 8. Function Call - setToggleButtonValues(event)
 9. Data returned - No data returned
*/

function setToggleButtonValues(event) {
    //iterates through each element in global settings array
    for (var count = 0; count < settings.length; count++) {
        //if id of clicked element matches with the name of the settings option
        if (event.target.id == settings[count].name) {
            //enable or disable the option
            settings[count].isDisabled = !event.target.checked;
            break;
        }
    }
}
