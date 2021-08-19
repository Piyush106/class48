var hero,heroImg,vill,villImg,bg;

var score=0;
var score1=0;
var gameState="play";


function preload(){
  //alert("Hello user welcome to the My Game");

bg=loadImage("bg.jpg");

herostanding=loadImage("hero5.png");
heroS=loadImage("hero5.png");

herok=loadAnimation("hero9.png","hero2.png");
herop=loadAnimation("hero5.png","hero1.png");
hero=loadAnimation("hero3.png","hero8.png");
herod=loadAnimation("hero5.png","hero7.png");

thanosstanding=loadImage("thanos2.png");
thanosp=loadAnimation("thanos5.png","thanos3.png");
thanosj=loadAnimation("thanos6.png","thanos7.png");
thanosb=loadImage("thanos4.png");

}

function setup() {
  createCanvas(1600,750);
  hero=createSprite(200,510);
  hero.addImage(herostanding);
  hero.scale=4;

 thanos=createSprite(1300,500);
 thanos.addImage(thanosstanding);
 thanos.scale=3.1;

}



function draw() {
  background(bg);  
 
for (var i = 130; i < 750; i=i+20) {
  line(800,i,800,i+10);
}

  fill ("YELLOW");
  textSize(35);
  text("MY MULTIPLAYER GAME ",600,100);
  textSize(15);
  text("**use left/right to move hero 1** ",200,70);
  text("**use A/D to move hero 2** ",1200,70);
  fill ("white");
  textSize(35);
  text("HERO1 SCORE: "+score,200,50)
 
  text("HERO2 SCORE: "+score1,1200,50)

  if (keyDown("a")){
    thanos.x-=5;
    thanos.addAnimation("kicking",thanosp);
thanos.changeAnimation("kicking");
  }


  if (keyDown("d")){
    thanos.x+=5;
    thanos.addAnimation("punching",thanosb);
    thanos.changeAnimation("punching");
  }


  if (keyDown("w")){
    thanos.addAnimation("jumping",thanosj);
    thanos.changeAnimation("jumping");
  }


  if (keyDown("left")){
hero.x-=5;
hero.addAnimation("kicking",herok);
hero.changeAnimation("kicking");
  }


  if (keyDown("space")){
    thanos.addAnimation("standing",thanosstanding);
    thanos.changeAnimation("standing");
     hero.addAnimation("standing",herostanding);
     hero.changeAnimation("standing");
  }

  if (keyDown("right")){
    
    hero.x+=5;
  

    hero.addAnimation("punching",herop);
hero.changeAnimation("punching");
 
}


if(gameState==="play"){


if(hero.x>200&&hero.x<700){
  if(thanos.isTouching(hero)){
    score1+=1;
  }
 


}
if(thanos.x>800&&thanos.x<1400){
  if(hero.isTouching(thanos)){
  score+=1;
}
}}

if(score===100){
  gameState="end"
  hero.setVelocity(0,0);
  thanos.setVelocity(0,0);
  textSize(35);
  fill("white");
  text("🎉🎉HERO 1 WON🎉🎉",200,00);

}
// if(score1===100){
//   gameState="stop"
//   hero.setVelocity(0,0);
//   thanos.setVelocity(0,0);
//   textSize(45);
//   fill("white");
//   text("🎉🎉HERO 2 WON🎉🎉",1000,00);

// }

  drawSprites();

}