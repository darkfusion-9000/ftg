status = "";


function setup() {
    createCanvas(480,380);
    canvas.centre();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
    document.getElementById(SIKE).value = input;
   }

function modelLoaded() {
console.log("modelLoaded!");
status = true;
}

function draw() {
    image(video,0,0,380,380);
}