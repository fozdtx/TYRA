// Copyright (c) ghgltggamer
// Written by ghgltgtgamer

// new DOM object

var doc = Document;
// var con = Console;
var page = Document;

// new DOM object - end 
// import

var gtg_init_font = false;
function GTG_INIT_FONT(){
  gtg_init_font = true;
}
var gtg_init_online_tasks = false;
function GTG_INIT_ONLINE_TASKS(){
  gtg_init_online_tasks = true;
}
var gtg_init_custom_font_installation_location = null;
function GTG_INIT_FONT_INSTALLATION_LOCATION(_ID = 'none'){
  var _ID;
  gtg_init_font_installation_location = _ID;
  if (_ID === 'none'){
    alert("PLEASE DEFINE A ID TO INITALISE THE FONT INSTALLATION LOCATION");
    console.error("PLEASE DEFINE A ID TO INITALISE THE FONT INSTALLATION LOCATION");
  }
  document.getElementById(_ID).innerHTML = "<style>@font-face {font-family: 'console';src: url('https://fozdtx.github.io/foz-dtx-libraries/fonts/console.ttf');}  @font-face {font-family: 'rodex';src: url('https://fozdtx.github.io/foz-dtx-libraries/fonts/RodEX.ttf');}  @font-face {font-family: 'fly';src: url('https://fozdtx.github.io/foz-dtx-libraries/fonts/Fly.ttf');}   @font-face {font-family: 'freely';src: url('https://fozdtx.github.io/foz-dtx-libraries/fonts/FreeLy.ttf');}</style>";
}
/*function GTG_INIT_CUSTOM_FONT_INSTALLATION_LOCATION(_FONT_FILE_NAME, _FONT_F_NAME, _ID){
  var _FONT_FILE_NAME, _ID, _FONT_F_NAME;
  gtg_init_custom_font_installation_location = true;
  document.getElementById(_ID).innerHTML = "<style><style>@font-face {font-family: " + _FONT_F_NAME + ";src: url('" + _FONT_FILE_NAME + "');}</style>";
}*/
var gtg_import_graphics = false;
function GTG_IMPORT_GRAPHICS(){
  gtg_import_graphics = true;
}


var gtg_init_game_development = false;
function GTG_INIT_GAME_DEVELOPMENT(){
  gtg_init_game_development = true;
}

var gtg_init_game_development_kit_inatallation_location = false;
function GTG_INIT_GAME_DEVELOPMENT_KIT_INSTALLATION_LOCATION(_ID){
  document.getElementById(_ID).innerHTML = '<link rel="stylesheet" href="https://api.ghgltggamer.repl.co/css/ghgltggamer.js/game_development_0_2.css">';
  gtg_init_game_development_kit_inatallation_location = true;
}

// import - end

// main

// write function and it's method for writing

const Console = "Console";
const Page = "Page";
const Both = "Both";
function write(_TEXT, _ARG = Both){
  var _TEXT;
  var _ARG;
  if (_ARG === Page) {
    document.write(_TEXT);
    // console.log(_TEXT);
  }
  else if (_ARG === Console) {
    //  document.write(_TEXT);
    console.log(_TEXT);
  }
  else if (_ARG === Both){
    document.write(_TEXT);
    console.log(_TEXT);
  }
  else {
    alert("<" + _ARG + "> is not a valid argument please define a valid argu,emt in write function");
    console.error("<" + _ARG + "> is not a valid argument please define a valid argu,emt in write function");
  }
}

// write function - end

// font functions


// addInbuiltFont();
const RodEx = "RodEx";
const Fly = "Fly";
const FreeLy = "FreeLy";
function addInbuiltFont(_FONT_NAME, _ID){
  var _FONT_NAME, _ID;
  if (gtg_init_font === true){
  if (_FONT_NAME === Console){
    document.getElementById(_ID).style.fontFamily = 'console';
  }
  
  else if (_FONT_NAME === RodEx) {
    document.getElementById(_ID).style.fontFamily = 'rodex';
  }
  
  else if (_FONT_NAME === Fly) {
    document.getElementById(_ID).style.fontFamily = 'fly';
  }
  
  else if (_FONT_NAME === FreeLy) {
    document.getElementById(_ID).style.fontFamily = 'freely';
    }
  else {
    alert("Unable to find any inbuilt font named " + _FONT_NAME + " . Please define a valid font name if you want to know inbuilt font names so use  ' GTG_GET_INBUILT_FONT_NAMES(); ' in your JavaScript code");
    console.error("Unable to find any inbuilt font named " + _FONT_NAME + " . Please define a valid font name if you want to know inbuilt font names so use  ' GTG_GET_INBUILT_FONT_NAMES(); ' in your JavaScript code");
  }
  }
  else {
    alert("PLEASE INITALISE THE FONT");
    console.error("PLEASE INITALISE THE FONT");
  }
}
// addInbuiltFont(); - end
// addCustomFonts();

function addCustomFonts(_FONT_NAME = 'name', _ID = 'undef'){
  alert("Please use inbuilt fonts yet because there are too many errors in our addCustomFont(); function and GTG_INIT_CUSTOM_FONT_INSTALLATION_LOCATION(); function we are trying to fix these errors as soon as possible");
 /* var _FONT_NAME;
  var _ID;
  
if (gtg_init_font === true){
  
if (gtg_init_custom_font_installation_location === true){
  if (_FONT_NAME === 'name') {
    alert('Please enter your font name for add');
  }
  else if (_ID === 'undef') {
    alert('Please defane the id of element after adding your font name like " addCustomFonts(' + _FONT_NAME + ', your_element_id); "');
    console.error('Please defane the id of element after adding your font name like " addCustomFonts(' + _FONT_NAME + ', your_element_id); "');
  }
  else {
  document.getElementById(_ID).style.fontFamily = _FONT_NAME;
  }
}
else {
  alert("Custom font installation location is not initalised for initalise them use 'GTG_INIT_CUSTOM_FONT_INSTALLATION_LOCATION();' in your code");
  console.error("Custom font installation location is not initalised for initalise them use 'GTG_INIT_CUSTOM_FONT_INSTALLATION_LOCATION();' in your code");
}
}
else {
  alert("PLEASE INITALISE THE FONT");
  console.error("PLEASE INITALISE THE FONT");
}*/


}

// addCustomFonts(); - end


// info functions

function GTG_GET_INBUILT_FONT_NAMES(){
 alert("There are currently 4 inbuilt fonts they are :- Console, RodEx, Fly, FreeLy");
 console.log("There are currently 4 inbuilt fonts they are :- Console, RodEx, Fly, FreeLy");
}

// info functions - end
// font functions - end

// play function and its artguments
/*const BackgroundMusic = "BackgroundMusic";
var BackgroundMusicName;
function Play(_TYPE, _ID = '#undef'){
  if (_TYPE === BackgroundMusic){
    if (_ID === "#undef"){
      alert("Please define a id for play the music");
      console.error("Please define a id for play the music");
    }
    else {
      document.getElementById(_ID).innerHTML = "<button id='play_id_elm_def'>Playing BGM </button>"
      const bgm = new Audio(BackgroundMusicName);
      function play_a(){
        bgm.play();
      }
      document.getElementById('play_id_elm_def').addEventListener("click" play_a()));
      
    }
  }
}*/
// play - end

// borwse

const Google = "google";
const Bing = "bing";
var search_engine = Google;
function browse(_INPUT_ID){
  var _INPUT_ID;
  var inp_get = document.getElementById(_INPUT_ID).value;
  window.open("https:" + "//" + search_engine + ".com/search?q=" + inp_get);
}

// browse - end

// fill function

var TimeOut = 0000;
var ImageHeight = 100;
var ImageWidth = 100;
const Image = "Image";
const Text = "Text";
const Audio = "Audio";
const Video = "Video";
function fill(_TYPE, _ID, _VALUE){
  var _TYPE, _ID, _VALUE;
setTimeout(function(){
  if (_TYPE === Image){
    document.getElementById(_ID).innerHTML = "<img src='" + _VALUE + "' height='" + ImageHeight + "' width='" + ImageWidth + "'>";
  }
  
  else if (_TYPE === Audio) {
    document.getElementById(_ID).innerHTML = "<audio src='" + _VALUE + "' loop autoplay></audio>";
  }
  
  else if (_TYPE === Video) {
    document.getElementById(_ID).innerHTML = "<video src='" + _VALUE + "' loop autoplay></video>";
  }
  else if (_TYPE === Audio) {
    document.getElementById(_ID).innerHTML = _VALUE;
  }
  else {
      alert("Please define a vaild type");
      console.log("Please define a vaild type");
  }
}, TimeOut);
}
// fill - end

// texture

/*const Add = "Add";
const Remove = "Remove";
function texture(_ARG, _ID, _VALUE){
  var _ARG, _ID, _VALUE;
  var bg_image1 = "url('";
  var bg_image2 = "');";
  var texture_create = bg_image1 + _VALUE + bg_image2;
  if (_ARG === Add){
    document.getElementById(_ID).style.backgroundImage = _VALUE;
  }
  else if (_ARG === Remove) {
    document.getElementById(_ID).style.backgroundImage = "url('https://api.ghgltggamer.repl.co/trans_1080x.png');";
  }
  else {
    alert("ERROR(404): UNABLE TO SET THE TEXTURE");
  }
}*/

// texture - end

// print page

function printPage(){
  print();
}

// print page - end

// addAnimation function

const Jump = "Jump";
const Left = "Left";
const Right = "Right";
const Up = "Up";
const Down = "Down";
function addAnimation(_ID, _ANM_NAME){
if (gtg_init_game_development === true){
if (gtg_init_game_development_kit_inatallation_location = true){
  var _ID, _ANM_NAME;
  if (_ANM_NAME === Jump){
  document.getElementById(_ID).classList.add("jump-1");
  }
  else if (_ANM_NAME === Left) {
    document.getElementById(_ID).classList.add("left");
  }
  else if (_ANM_NAME === Right) {
    document.getElementById(_ID).classList.add("right");
  }
  else if (_ANM_NAME === Up) {
    document.getElementById(_ID).classList.add("up");
  }
  else if (_ANM_NAME === Down) {
    document.getElementById(_ID).classList.add("down");
  }
  else {
    alert("ERROR : UNABLE TO ADD ANIMATION . PLEASE DEFINE A VALID ANIMATION NAME");
    console.error("ERROR : UNABLE TO ADD ANIMATION . PLEASE DEFINE A VALID ANIMATION NAME");
  }
}
else {
  alert("ERROR: PLEASE INITALISE THE GAME DEVELOPMENT KIT INATALLATION LOCATION FOR CONTINUE ACCESS ANIMATIONS");
  console.error("ERROR: PLEASE INITALISE THE GAME DEVELOPMENT KIT INATALLATION LOCATION FOR CONTINUE ACCESS ANIMATIONS");
}
}
else {
  alert("PLEASE INITALISE THE GAME DEVELOPMENT FOR ACCESS TO ANIMATION");
  console.error("PLEASE INITALISE THE GAME DEVELOPMENT FOR ACCESS TO ANIMATION");
}
}

// addAnimation - end

// remove animation

function removeAnimation(_ID, _ANM_NAME){
  if (gtg_init_game_development === true) {
    if (gtg_init_game_development_kit_inatallation_location = true) {
      var _ID, _ANM_NAME;
      if (_ANM_NAME === Jump) {
        document.getElementById(_ID).classList.remove("jump-1");
      }
      else if (_ANM_NAME === Left) {
        document.getElementById(_ID).classList.remove("left");
      }
      else if (_ANM_NAME === Right) {
        document.getElementById(_ID).classList.remove("right");
      }
      else if (_ANM_NAME === Up) {
        document.getElementById(_ID).classList.remove("up");
      }
      else if (_ANM_NAME === Down) {
        document.getElementById(_ID).classList.remove("down");
      }
      else {
        alert("ERROR : UNABLE TO ADD ANIMATION . PLEASE DEFINE A VALID ANIMATION NAME");
        console.error("ERROR : UNABLE TO ADD ANIMATION . PLEASE DEFINE A VALID ANIMATION NAME");
      }
    }
    else {
      alert("ERROR: PLEASE INITALISE THE GAME DEVELOPMENT KIT INATALLATION LOCATION FOR CONTINUE ACCESS ANIMATIONS");
      console.error("ERROR: PLEASE INITALISE THE GAME DEVELOPMENT KIT INATALLATION LOCATION FOR CONTINUE ACCESS ANIMATIONS");
    }
  }
  
  
  else {
    alert("PLEASE INITALISE THE GAME DEVELOPMENT FOR ACCESS TO ANIMATION");
    console.error("PLEASE INITALISE THE GAME DEVELOPMENT FOR ACCESS TO ANIMATION");
  }
}

// remove animation - end

// click

function Click(_ID){
  var _ID;
  document.getElementById(_ID).click();
}

// click


// download 

function download(_ID, _ITEM){
  fill(_TEXT, _ID, '<a href="' + _ITEM + '" download id="download0272">downloading...</a>');
  setTimeout(function(){
    Click("download0272");
  }, 0001);
  setTimeout(function() {
    fill(_ID, " ");
  }, 0002);
}

// download - end



// window

var Window_Height = 100;
var Window_Width = 100;
var Window_Text_Color = "White";
var Window_Background_Color = "black";
var Window_Title_Background_Color = "silver";
var Window_Title = "New Window";
var Window_Title_Text_Color = "Black";
var Window_Title_Height = 50;
var Window_HTML = " ";
var Window_Title_Scale = 10;
const Destroy = "Destroy";
const Create = "Create";
function Window(args, nameWin, idElm){
  var args;
  var nameWin;
  var idElm;
  
  if (args === "Create"){
    document.getElementById(idElm).innerHTML = '<div id="' + nameWin + '"><div style="user-select: none;background-color: ' + Window_Title_Background_Color + ';padding: ' + Window_Title_Scale + 'px;width: ' + Window_Width + 'px;color: ' + Window_Title_Text_Color + ';">' + Window_Title + '</div><div style="overflow: scroll;box-shadow: 5px 5px 10px black;height:  ' + Window_Height + 'px;width: ' + Window_Width + 'px;background-color: ' + Window_Background_Color + ';padding: ' + Window_Title_Scale + 'px;color: ' + Window_Text_Color + ';">' + Window_HTML + '</div></div></div>';
    console.log("Window has been created");
    console.log("Window name : " + nameWin);
  }
  else if (args === "Destroy") {
    document.getElementById(idElm).innerHTML = ' ';
    console.log("Window has been destroyed");
  }
}

// window - end

// main - end