

function preload() {
  Gobold = loadFont ('data/GoboldBold.otf');
}

function setup() {
createCanvas(windowWidth,windowHeight);
  background('0');
 fill('black');
  text('type a to z please',50,50);
  text('press mouse to refresh',50,150);
  textSize(50);
  //rect(250,250,250,250);
}


function draw() {
  //text("Press any key to display it on the screen", 10, 20); 
  //text("Any of the action keys would not be recognized", 10, 40); 
  //fill('green');

}

function mousePressed(){
createCanvas(windowWidth,windowHeight);
  background('pink');
  fill('black');
  text('type a to z please',50,50);
  text('press mouse to refresh',50,150);
  textSize(50);

}
function keyTyped() {
 
  if (key === 'a') {
    fill('red');
    textSize(60);
    text(key = 'with Generative Design',150,100);

     }

     else if (key === 'b') {
       fill('purple');
       textSize(32);
    text(key = 'Building to Growing',350,300);
   
     }
     
 else if (key === 'c') {
   fill('purple');
       textSize(40);
    text(key = 'Hello How are you',550,500);
   
}

else if (key === 'd') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',310,400);
   
}

else if (key === 'e') {
   fill('red');
       textSize(13);
    text(key = 'Sculpting to Breeding',310,450);
   
}

else if (key === 'f') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',600,600);
}

else if (key === 'g') {
   fill('red');
       textSize(13);
    text(key = 'Gardeners on the other',310,500);
}

else if (key === 'h') {
   fill('purple');
       textSize(13);
    text(key = 'humans have preconceived notions about how things should look and perform.',310,550);
}

else if (key === 'i') {
   fill('purple');
       textSize(13);
    text(key = '"It’s quite hard to design your own algorithm, so it’s easier to replicate someone else’s."',310,600);
}

else if (key === 'j') {
   fill('yellow');
       textSize(13);
    text(key = 'analyzing them ex­post to understand their fitness.',310,650);
}

else if (key === 'k') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',310,700);
}

else if (key === 'l') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',310,750);
}

else if (key === 'm') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',310,800);
}

else if (key === 'n') {
   fill('green');
       textSize(13);
    text(key = 'generative design is changing and will continue to change the role of the designer',500,300);
}

else if (key === 'o') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',500,350);
}

else if (key === 'p') {
   fill('red');
       textSize(13);
    text(key = 'a shift from Building to growing',500,400);
}

else if (key === 'q') {
   fill('yellow');
       textSize(13);
    text(key = '“Traditionally, designers operate creating a limited number of options,',500,450);
    
}

else if (key === 'r') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',500,500);
    
}

else if (key === 's') {
   fill('Red');
       textSize(13);
    text(key = 'Scientists on one hand',1000,300);
    
}

else if (key === 't') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',500,600);
    
}

else if (key === 'u') {
   fill('green');
       textSize(13);
    text(key = 'into something far more fluid: a combination of designer, programmer, producer and curator.',500,650);
    
}

else if (key === 'v') {
   fill('purple');
       textSize(13);
    text(key = 'visual homogeneity.',500,700);
    
}

else if (key === 'w') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',500,750);
    
}

else if (key === 'x') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',500,100);
    
}

else if (key === 'y') {
   fill('purple');
       textSize(13);
    text(key = 'Yolanda Zappaterra',500,150);
    
}

else if (key === 'z') {
   fill('purple');
       textSize(13);
    text(key = 'Hello How are you',500,50);
    
}
}
