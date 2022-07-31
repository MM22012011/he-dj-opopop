Metalica = "";
HW = "";

function preload()
{
    Metalica = loadSound("MasterOfPuppets.mp3");
    HW = loadSound("Heat Waves.mp3");
}


function setup()
{
     canvas = createCanvas(600, 500);
     canvas.center();
     video = createCapture(VIDEO);
     video.hide();
}


function draw()
{
    image(video, 0, 0, 600, 500); 
}
