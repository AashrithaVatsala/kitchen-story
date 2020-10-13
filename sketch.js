var database;
var player;
var form;
var game;
var PlayerCount = 0;
var gameState = 0;
var chefImage;
var arrowImage;
var grandmaImage;
var grandmaTime = 0;
var backgroundImg;
var speechImage;
var coffeemachineImage;
var custumer1Image, custumer2Image;
var custumer3Image;
var dish1Image;
var dish2Image;
var dish3Image;
var steamerImage;
var cookieDoughImage;
var coinImage;
var kitchenImage, coffeemachine, coffee, chef;

function preload(){

  chefImage = loadImage("images/chef.png");
  arrowImage = loadImage("images/arrow.png");
  backgroundImg = loadImage("images/background.png");
  coffeemachineImage = loadImage("images/coffeemachine.png");
  custumer1Image = loadImage("images/custumer1.png"); 
  custumer2Image = loadImage("images/custumer2.png");
  custumer3Image = loadImage("images/custumer3.png");
  dish1Image = loadImage("images/dish1.png");
  dish2Image = loadImage("images/dish2.png");
  dish3Image = loadImage("images/dish3.png")
  grandmaImage = loadImage("images/grandma.png");
  speechImage = loadImage("images/speech.png");
  steamerImage = loadImage("images/steamer.png");
  cookieDoughImage = loadImage("images/cookiedough.png");
  coinImage = loadImage("images/money.png");
  kitchenImage = loadImage("images/Background2.jpg");

}

function setup() {
  createCanvas(800,700);
  
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(255,255,255);  

  if(PlayerCount === 1) {
      gameState = 1;
  }
   
  if (gameState === 1) {
    game.play();
  }

  text(mouseX + "," + mouseY , mouseX, mouseY);

}