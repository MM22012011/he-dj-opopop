Metalica = "";
HW = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

scoreleftWrist = 0;

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

     poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
  
      scoreleftWrist =  results[0].pose.keypoints[9].score;
    

      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
  
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
          
    }
  }
  

function draw()
{
    image(video, 0, 0, 600, 500); 
    
	fill("#FF0000");
	stroke("#FF0000");

    HW.isPlaying()

    if (scoreleftWrist > 0.2)
	{
		circle(leftWristX, leftWristY, 20);

        Metalica.stop()

	}

    if (Metalica == Metalica.stop())
    {
        function play()
        {
            HW.play()
        }
    }
}


