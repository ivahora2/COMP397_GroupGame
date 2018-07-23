var stage = new createjs.Stage(document.getElementById('canvas'));
var direction = 1;
var velocity = 10;

halfHeightPlatform= 5 ;
halfHeightCircle= 5;

var circle = new createjs.Shape();
circle.graphics.beginStroke('#000');
circle.graphics.beginFill('#0000ff');
circle.graphics.drawCircle(0, 0, 10);

circle.x = 300;
circle.y = 275;

var imgPlatform = createRectangle();
var imgPlatform_l = createRectangle();
var imgPlatform_r = createRectangle();
//var imgPlatform_rr = createRectangle();
//var imgPlatform_ll = createRectangle();

stage.addChild(circle);

createjs.Ticker.addEventListener("tick", tick);
createjs.Ticker.setFPS(10);

imgPlatform.x = 400;
imgPlatform_l.x = imgPlatform.x + 150;
imgPlatform_r.x = imgPlatform.x - 150;
/*imgPlatform_rr.x = imgPlatform.x - 250;
imgPlatform_ll.x = imgPlatform.x + 250;*/

imgPlatform_l.y = imgPlatform.y = imgPlatform_r.y = 285;
imgPlatform.width = 50;

this.stage.on('stgemousedown',function(){
    circle.jump();
})

function updatePlatfrom() {
    var nextXX = imgPlatform.x + (velocity);
    if (nextXX > stage.canvas.width - imgPlatform.width) {
        nextXX = 0;
    }
    else if (nextXX < imgPlatform.width) {
        nextXX = imgPlatform.width;
    }

    imgPlatform.nextXX = nextXX;
}
function renderPlatform() {
    imgPlatform.x = imgPlatform.nextXX;
}
function updatePlatfrom_l() {
    var next_lX = imgPlatform_l.x + (velocity);
    if (next_lX > stage.canvas.width - imgPlatform.width) {
        next_lX = 0;
    }
    else if (next_lX < imgPlatform.width) {
        next_lX = imgPlatform.width;
    }
    imgPlatform_l.next_lX = next_lX;
}
function renderPlatform_l() {
    imgPlatform_l.x = imgPlatform_l.next_lX;
}
function updatePlatfrom_r() {
    var next_rX = imgPlatform_r.x + (velocity);
    if (next_rX > stage.canvas.width - imgPlatform.width) {
        next_rX = 0;
    }
    else if (next_rX < imgPlatform.width) {
        next_rX = imgPlatform.width
    }
    imgPlatform_r.next_rX = next_rX;
}
function renderPlatform_r() {
    imgPlatform_r.x = imgPlatform_r.next_rX;
}

/*function updatePlatfrom_ll() {
    var next_llX = imgPlatform_ll.x + (velocity);
    if (next_llX > stage.canvas.width - imgPlatform_l.width) {
        next_llX = 0;
    }
    else if (next_llX < imgPlatform_l.width) {
        next_llX = imgPlatform_l.width;
    }
    imgPlatform_ll.next_llX = next_llX;
}

function renderPlatform_ll() {
    imgPlatform_l.x = imgPlatform_l.next_lX;
}

function updatePlatfrom_rr() {
    var next_rrX = imgPlatform_rr.x + (velocity);
    if (next_rrX > stage.canvas.width - imgPlatform_r.width) {
        next_rrX = 0;
    }
    else if (next_rrX < imgPlatform_r.width) {
        next_rrX = imgPlatform_r.width
    }
    imgPlatform_rr.next_rrX = next_rrX;
}

function renderPlatform_rr() {
    imgPlatform_rr.x = imgPlatform_rr.next_rrX;
}*/

function tick(e) {

    updatePlatfrom();
    renderPlatform();
    updatePlatfrom_l();
    renderPlatform_l();
    updatePlatfrom_r();
    renderPlatform_r();
    
    /*updatePlatfrom_ll();
    renderPlatform_ll();
    updatePlatfrom_rr();
    renderPlatfrom_rr();*/
    stage.update();
}

function createRectangle() {
    var rectangle = new createjs.Shape();
    rectangle.graphics.beginStroke('#000');
    rectangle.graphics.beginFill('#FF0000');
    rectangle.graphics.drawRect(0, 0, 100, 10);
    rectangle.x = rectangle.y = 20;
    stage.addChild(rectangle);
    return rectangle;
}

function jump()
{
var currentX= circle.x;
var currentY= circle.y;

console.log("jump");
   
    createjs.Tween.get(circle).to({y:100}, 200, createjs.Ease.quadOut).call(gravity);
}

function gravity()
{
    console.log("in gravity");
    createjs.Tween.get(circle).to({y:275}, 200, createjs.Ease.quadOut);
    collisionImageplatform();
}

this.stage.on('stagemousedown',function()
{
    jump();
})

function collisionImageplatform ()
{
   Collision(circle,imgPlatform); 
}

function Collision(object1,object2) {

    console.log("calculating collision distance");
       var part1=  Vec1(circle.x,imgPlatform.x);
       console.log(part1);
       
        var part2= Vec2(circle.y,imgPlatform.y);
        console.log(part2);
        
        var distance= Vec(part1,part2);
        console.log(distance);
        
        
        /*if(math.Vec1.distance(part1,part2)<(circle.))
        {
            console.log("Collision");
            console.log("Part1"+part1);
            console.log("Part2"+part2);
            console.log("Distance"+distance);
        }*/
     
};



function Vec(P1, P2){
    return Math.floor(Math.sqrt(Math.pow(P1, 2) + Math.pow(P2, 2)));
}

function Vec1(x1,x2)
{
    return x2-x1;
}

function Vec2(y1,y2)
{
    return y2-y1;
}

function drop()
{
    
}

