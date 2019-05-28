FEED ME NUMBERS
=========================================================================================================

AUTHOR:

Sahil Jaidka - SID217528942
=========================================================================================================

DESCRIPTION:

"Feed me numbers", as the name suggests is a mathematical quiz game. It revolves around solving
some mathematical questions to feed the monkey in the game. It is not a conventional quiz game
which just prompts the user to select an answer and then informs the user about the result. It
has a fun "GAME" element associated with it which makes it recreational and educational, both
at the same time. There are going to be six levels in the game namely - Beginner, Easy, Intermediate,
Difficult, Pro and Master. In each level, there will be multiple questions and by answering each of
them correctly, the score of the player keeps increasing. If the score reaches a certain value, the user
is navigated to next level. There's a timer associated with each level. All the questions of the level
need to be answered within that time limit. There's also an option to skip the question if the user doesn't
know a certain question. The game is lost or gets over in three cases. First, if the
timer gets over and user has not reached the level score. The second case is if the user keeps skipping
questions and visits each question of the level without reaching at the level score. The third case is
if the user gets three incorrect answers in one level, that also calls for losing the game.

=========================================================================================================

MAJOR FEATURES:

1. Difficulty Levels
   The game comprises of six difficulty levels namely beginner, easy, intermediate, difficult, pro
   and master levels. With each increasing level the difficulty of questions keeps increasing and
   the duration of level timer keeps reducing.

2. Timer
   Each level has a timer/stopwatch associated with it which keeps ticking away when the user is
   playing the game. If the timer stops and the user has not reached a certain score, the game is
   considered as over and the user is navigated to the home page after informing the user that the game
   is over.

3. Score
   Each level has a user score which is displayed at the top left corner of the screen. In beginner and
   levels, the score keeps increasing with each correct answer and no points are awarded for incorrect
   answers. As soon as the user reached higher levels, along with points getting awarded with correct
   answers, points are also deducted for incorrect answers. When the user reached a particular score
   (different for each level), the level is considered as completed.

4. About Page
   The landing screen consists of a button called 'About' which takes the user to the page where
   there are two options: Licenses and Tutorial. The licenses page consists of all the legal links
   that have been used in the application. The tutorial page consists of a video that explains the
   working of the game for new users for their ease.

5. Settings
   There's another button settings on the landing screen which shows the user different controls of
   the game that can be controlled at the user level. There are three options Audio, Timer and Tips
   which can be enabled or disabled depending on the user's interest.

=========================================================================================================

MAJOR FUNCTIONS:

1. createElement
   =============
   createElement is a global function which can be called from throughout the application.
   Purpose of this function is to create elements through js and append in document's body.
   It takes four arguments namely typeOfHtmlTag, textString, idOfElement, classOfElement.
   typeOfHtmlTag refers to type of HTML tag we want to create, is a mandatory parameter.
   textString refers to text we want to show in that tag, can be left empty. idOfElement
   sets id of the HTML tag, can be left empty. classOfElement, sets class of the HTML tag,
   can be left empty.
   Example:
   Function Call - createElement("div","I am an Example Div","example-div","");
   Response - <div id="example-div">I am an Example Div</div>

2. loadHomeScreen
   ==============
   loadHomeScreen function is called whenever the landing screen or the home screen needs to be
   loaded. When the application is initialised, at that time also, this function is called i.e.
   on load of the html body. Purpose of this function is to initialise the application and load
   wrapper divs for various elements of the game. It takes no arguments
   Usage Example:
   Function Call - loadHomeScreen()
   Data returned - No data returned

3. clearDisplayDiv
   ===============
   clearDisplayDiv function is called whenever a new screen is loaded. Purpose of this function is
   to clear the contents of the main display div. It takes no arguments.
   Usage Example:
   Function Call - clearDisplayDiv()
   Data returned - No data returned

4. createModalContent
   ==================
   createModalContent function is being called whenever a new modal window has to be loaded.
   Purpose of this function is to create the content of the modal window.
   It takes 5 arguments.
   imgSource - the modal image source that has to be displayed inside the modal
   title - the modal header or title
   text - the modal secondary text or description
    btnText - the text inside the modal button
    btnAction - the action to be performed on the click of modal button
    Usage Example:
    Function Call - createModalContent("images/bulb.gif", "Header", "Modal Text", "OK", "")
    Data returned - <div id="game-modal" class="modal">.....</div>

5. timer
   =====
   timer function is called from the function loadLevelData. Purpose of this function is to set
   interval of the level timer/stopwatch
   It takes no arguments.
   Usage Example:
   Function Call - timer()
   Data returned - No data returned


======================================================================================================

MAJOR DATA STRUCTURES:

1. gameQuestions
   =============
   An array question objects.
   Structure - [{},{},{},....]
   Example:
   window.gameBeginnerLevelQuestions = [
       {
           question: "1 + 2 = 3",
           answerArray: ["Yes", "No"],
           matchedValue: "Yes",
           correctAnswer: 3,
           isVisited: 0
       },
       {
           question: "3 + 4 = 8",
           answerArray: ["Yes", "No"],
           matchedValue: "No",
           correctAnswer: 7,
           isVisited: 0
       },
   ]

2. numberOfLevels
   ==============
   An array of levels of the game.
   Structure - [{},{},{},....]
   Example:
   window.numberOfLevels = [
     {
       name : "Beginner",
       id : 0,
       isActive : true
     },
     {
       name : "Easy",
       id : 1,
       isActive : true
     }
   ]

3. settings
   ========
   An array of settings objects of the game.
   Structure - [{},{},{},....]
   Example:
   window.settings = [

     {
       name : "Audio",
       id : 1,
       isDisabled : false
     },
     {
       name : "Timer",
       id : 0,
       isDisabled : false,
       minutes : 2
    },
     {
       name : "Tips",
       id : 1,
       isDisabled : false
     }
   ];
