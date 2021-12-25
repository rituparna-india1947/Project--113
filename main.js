function preload() {
};

function setup() {
    canvas = createCanvas(700, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,70,70,550,400);

    stroke("#3e8c16");
    fill("#3e8c16");
    rect(27,30,55,450);
    rect(607,30,55,450);
    rect(55,25,570,55);
    rect(55,460,570,55);

    stroke(255,0,0);
    fill(255,0,0);
    circle(55,50,85);
    circle(635,50,85);
    circle(635,490,85);
    circle(55,490,85);
}

function take_snapshot() {
    save("Rituparna_Das.png");
}