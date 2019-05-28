/*-------------------------------------Game Settings-----------------------------*/
/*-------------------------------------------------------------------------------*/

/*Data for Settings Page*/
window.maxScore = 20;

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

/*Data for Game Levels*/
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
  },
  {
    name : "Intermediate",
    id : 2,
    isActive : true
  },
  {
    name : "Difficult",
    id : 3,
    isActive : true
  },
  {
    name : "Pro",
    id : 4,
    isActive : true
  },
  {
    name : "Master",
    id : 5,
    isActive : true
  }
];

/*Data for About Page*/
window.aboutTabs = [
  {
    name : "Licenses",
    id : 0,
    isActive : true
  },
  {
    name : "Tutorial",
    id : 1,
    isActive : true
  }
];
