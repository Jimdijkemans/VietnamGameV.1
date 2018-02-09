//Variables

var enemy;
var backgroundimage;
var gunshot;
var letsgo;
var cross;
var ammo = 20;
var click;
var reload;
var song;
var kills = 0;
var health = 100;
var arnold;
var bullethole;
var gun;
var reloading;
var gunposY = 350;

function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('data/song3.mp3');
  click = loadSound('data/click.mp3');
  gun = loadImage("data/fpsgun.png");
  reloading = loadImage("data/reloading.png");
  bullethole = loadImage('data/bullethole.png');
  reload = loadSound('data/reload.mp3');
  gunshot = loadSound('data/gunshot2.mp3');
  backgroundimage = loadImage("data/background.jpg");
  cross = loadImage("data/cross.png");
  letsgo = loadSound('data/letsgo.mp3');
  enemy = loadImage("data/enemy.png");
  arnold = loadImage("data/arnold.jpg");
}


function setup() {
  createCanvas(1400, 700);
  
  gunshot.setVolume(1);
  song.setVolume(0.5);
  letsgo.setVolume(1);
  reload.setVolume(2);
  click.setVolume(2);
  letsgo.play();
  print('Game Started up');
  song.loop();
}

function draw() {
  background(0, 0, 0);
  image(backgroundimage, 0, 0);
  backgroundimage.resize(1000, 700);
  
  
  
  
  //fpsgun
  image(enemy, 375, 275);
  image(gun, mouseX -150, gunposY);

  
  
  
  //ammo counter
  textSize(32);
  fill(255, 255, 0);
  text("Ammo: " + ammo + " rounds", 1010 , 50);
  
  //score counter
  fill(0, 255, 0);
  textSize(32);
  text("Score: " + kills + " kills", 1010 , 100);
  
  //health counter
  fill(255, 0, 0);
  textSize(32);
  text("Health: " + health, 1010 , 150);
  
  
  image(arnold, 1020, 280);
  
  //crosshair
  image(cross, mouseX -25, mouseY -25);
  cross.resize(50, 50);
  
  
  //dieing
  if(health == 0){
	  print("You Died");
  }

  
  if(ammo > 20){ //max ammo
	ammo = 20;
  }
}






//shoot

function mousePressed(){
  if(ammo > 0){
    ammo -= 1;
    print(ammo + " Rounds in mag");
    gunshot.play();
	
  }else
  {
    click.play();
	print("Out of ammo!");

  }
}

function keyPressed() {

} 	

//keyboard usage
function keyPressed() {	//m16
	if (keyCode === 49){
		gun = loadImage("data/fpsgun.png");
		gunshot = loadSound("data/gunshot.mp3");
		gunposY = 350;
		reload = loadSound("data/reload.mp3")
		
	}
	
	if (keyCode === 82){ //reloading
	reload.play();
	print("Reloading!");	
	ammo += 20;
	}

	if (keyCode === 50){
		gun = loadImage("data/m14.png"); //pistol
		gunshot = loadSound("data/pistol.mp3");
		gunposY = 350;
	}
	
	if (keyCode === 51){
		gun = loadImage("data/shotgun.png");	//shotgun
		gunshot = loadSound("data/shotgun.mp3");
		reload = loadSound("data/shotgunreload.mp3")
		gunposY = 350;
	}
	
	if (keyCode === 52){
		gun = loadImage("data/flame.png");	//flamethrower
		gunshot = loadSound("data/flame.mp3");
		gunposY = 350;
	}
}

