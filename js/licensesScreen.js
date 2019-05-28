/*----------------------------------------licensesScreen.js-----------------------------------*/
/*-----loads the licenses screen data and binds events on different elements of the page------*/

//File Variable Declarations
var disableButtonsDiv;
var gameDisplayDiv;

/*
 1. loadLicensesData function is being called on the click of Licenses button on the About
    screen
 2. Purpose of this function is to load the complete UI of the licenses screen
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - loadSettingsScreen()
 6. Data returned - No data returned
*/

window.loadLicensesData = function () {
    //empties the contents of game-display-div which is the wrapper div of the game UI
    clearDisplayDiv();

    //remove background class from body
    removeBackground();

    //assigns the element with id 'game-display-div' to the file variable for further use
    gameDisplayDiv = document.getElementById("game-display-div");

    //creates UI of the settings screen
    createLicensesData();

    //creates back button and binds functions on its click
    loadBackButton();
};

/*
 1. loadBackButton function is being called from loadLicensesData function.
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

    //binds loadAboutData function and playButtonAudio function on back button's click
    backButton.onclick = function () {
        console.log('click');
        loadAboutScreen();
        playButtonAudio();
    }
}

/*
 1. createLicensesData function is a local function which is being called from loadSettingsScreen function
 2. Purpose of this function is to create the labels of the settings and the corresponding toggle buttons for
    disabling or enabling the options
 3. It takes no arguments
 4. Usage Example:
 5. Function Call - createSettingsOptions()
 6. Data returned - No data returned
*/

function createLicensesData() {

    //creates a wrapper div for adding licenses data into it
    var licensesDiv = createElement("div", "", "licenses-div", "");

    for (var i = 0; i < licenses.length; i++) {
        var licensesContentList = createElement("ul","","","");
        Object.keys(licenses[i]).forEach(function(key,index) {
            if (key == "source"){
                var colContent = createElement("a",licenses[i][key],"","");
                colContent.setAttribute("target","_blank");
                colContent.setAttribute("href",licenses[i][key]);
                var colKey = createElement("span",key+ " - ","","license-labels");
            }
            else {
                var colContent = createElement("span",licenses[i][key],"","");
                var colKey = createElement("span",key+ " - ","","license-labels");
            }
            var licenseContentEl = createElement("li","","","");
            licenseContentEl.appendChild(colKey);
            licenseContentEl.appendChild(colContent);
            licensesContentList.appendChild(licenseContentEl);
        });
        licensesDiv.appendChild(licensesContentList);
    }

    // licensesTable.appendChild(licensesTableBody);
    // licensesDiv.appendChild(licensesTable);
    //append the whole licenses UI to the main wrapper div gameDisplayDiv
    gameDisplayDiv.appendChild(licensesDiv);
}
