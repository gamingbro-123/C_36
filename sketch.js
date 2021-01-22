
var database;
var gameState=0;
var playerCount;

var form;
var game;
var player;

function setup(){
    createCanvas(500,500);  

    database = firebase.database();

    game = new Game();
    game.getState()
    game.start();

    


}

function draw(){
    background("white");
  
    drawSprites();
}


  
   


// function readData(DATA)
// {
//     var position = DATA.val();
    
// }


