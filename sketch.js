var ball;
var database;
var position;
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
var ballPosition=database.ref('ball/positions')
ballPosition.on("value",readPosition) 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref('ball/positions').set({
       x:position.x+x,y:position.y+y
   })
}
function readPosition(data){
    position=data.val()
ball.x=position.x;
ball.y=position.y;
}