var fish;
var poisson;
var steve;
var number = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    fish = loadImage('steve.png');
    poisson = createVideo('le_poisson_steve.mp4');
    poisson.hide();
    poisson.volume(0);
    steve = createAudio('poisson.mp3');
}

function draw() {
    background('orange');
    // image(poisson, windowWidth/2, windowHeight/2, 200, 350);
    imageMode(CORNER);
    for(var x = 0; x < number; x++) {
        for(var y = 0; y < number; y++) {
            push();
            translate(x * width/number, y * height/number*2.1);
            rotate(frameCount / 50);
            image(poisson, 0, 0, 200, 350);
            pop();
        }
    }
    imageMode(CENTER);
    push();
    translate(mouseX, mouseY);
    rotate(frameCount / 50);
    image(fish, 0, 0, 100, 50);
    pop();
}

function mousePressed() {
    poisson.play();
    steve.play();
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}