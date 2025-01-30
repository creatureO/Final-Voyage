let bullets=[]
let img;
let enemies=[]
let bigguys=[]
let score=0
let objective=[]
var laser;
let soundtrack;
let HELP;
var crawl, POW, killed, Failure, Eating, breakin;


function preload(){
img = loadImage('Explorer.png');
img2 = loadImage('Marados planet.jpg');
img3 = loadImage('ALIEN.png');
img4 = loadImage('Bigguy.png');
laser = loadSound('laser.wav');
crawl = loadSound('crawly.wav');
POW = loadSound('DEAD.wav');
KILLED = loadSound('KILLED.wav');


}


function setup() {
createCanvas (windowWidth, windowHeight);

  //looping function spawn enemies
  for (let i=0; i<8; i++){
   let enemy={
    x:random(100,width-200),
    y:random(-800,0)
   }
   enemies.push(enemy)
 }
  
    //looping function spawn bigguys
  for (let i=0; i<4; i++){
   let bigguy={
    x:random(100,width/1.03),
    y:random(-800,0)
   }
   bigguys.push(bigguy)
 }
  
  //sound
  beat = createAudio('laser.wav');
  soundtrack= createAudio('last stand.mp3');
  HELP=createAudio('SOS.wav');
Failure=createAudio('Failure.wav');
Eating=createAudio('EATING.mp3');
breakin=createAudio('break in.wav');


}

function draw() {
  background(img2);
  rectMode(CENTER)
  //draw explorer
  image(img, mouseX-27, mouseY-30, 100,120)
     
//draw bullets 
  for (let bullet of bullets){
    ellipse(bullet.x+60, bullet.y, random(10,20),random(40,60))
    fill(225);
    stroke(random(0,100),random(180,225),225);
    strokeWeight(5)
    bullet.y-=40
  }
//draw aliens
  for (let enemy of enemies){
  enemy.y += 2
  enemy.x+=random(4,-4) 
    
  image( img3,enemy.x, enemy.y, random(120,125),random(120,125));
    if (enemy.y>height){
      Eating.play();
       Failure.play();
      breakin.play();
      text("Aliens breached hull. Your crew is eaten :(",width/4,height/2) 
    noLoop()
    }

}
      
  
  //draw bigguys
  for (let bigguy of bigguys){
  bigguy.y += 1
   
    image(img4, bigguy.x, bigguy.y, random(220,225),random(220,230));
    if (bigguy.y>height){

      text("Aliens breached hull. Your crew is eaten :(",width/4,height/2)
    noLoop()
    }
    
}
  
  
  //collisions
for (let enemy of enemies){
  for (let bullet of bullets){
    if (dist(enemy.x,enemy.y, bullet.x,bullet.y)<40){ //HITBOX NUMBER//
      enemies.splice(enemies.indexOf(enemy), 1)
      bullets.splice(bullets.indexOf(enemy), 1)
          KILLED.play();
          KILLED. setVolume (100)
         let newenemy={
    x:random(0,width),
    y:random(-800,0)
           }
   enemies.push(newenemy)   
  score +=1
      }
    }
}//end of collisions
  
  
    //collisions #2
for (let bigguy of bigguys){
  for (let bullet of bullets){
    if (dist(bigguy.x,bigguy.y, bullet.x,bullet.y)<75){ //HITBOX NUMBER//
      bigguys.splice(bigguys.indexOf(bigguy), 1)
      bullets.splice(bullets.indexOf(bigguy), 1)
          POW.play();
          POW. setVolume (90)
         let newbigguy={
    x:random(0,width),
    y:random(-800,0)
             }
   bigguys.push(newbigguy)
  score +=1
      }
    }
}//end of collisions
  
text(score, 50,50);
textSize(45)
  
  
  
fill(255)
stroke(random(0,100),random(180,225),225);
strokeWeight(5)
textSize(30)
text("Crash landed. Defend ship!",width/2,height/1.38)
}


function mousePressed(){
  console.log('Feel lucky, punk?')
  //spawn bullet when user clicks
let bullet={
  x:mouseX,
  y:mouseY
    }
bullets.push(bullet)
laser.play();
  laser. setVolume (25)

      crawl.play();
      crawl. setVolume (90)

  soundtrack.play(); //soundtrack
HELP.play(); //soundtrack
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);}