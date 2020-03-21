import * as drawContext from "./drawContext.js";
import * as toolManager from "./toolManager.js";
import * as userInterface from "./userInterface.js";




//---------------------------------------------------------------




const canvas = document.getElementById("MainCanvas");

toolManager.initializeMenager();
drawContext.initializeContext(canvas);
