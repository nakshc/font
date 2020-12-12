noseX= 0
noseY= 0
difference= 0
leftArmWristX= 0
RightArmWristX= 0






function preload() {



}



function setup()   {

video= createCapture(VIDEO);
video.size(550,550);


canvas = createCanvas(550,550);
canvas.position(560 , 150);

poseNet= ml5.poseNet(video , modelLoaded)
poseNet.on('pose', gotPoses)
}


function modelLoaded() {

console.log('Model is Initialized')

}






function gotPoses (results)  {

if (results.length > 0) {

console.log(results)

noseX= results[0].pose.nose.x;

noseY= results[0].pose.nose.y;

console.log(noseX   + "noseY" + noseY + "noseX");


RightArmWristX= results[0].pose.rightWrist.x;
leftArmWristX= results[0].pose.leftWrist.x;
difference= floor(leftArmWristX - RightArmWristX)
}



}

function draw()  {

    background('#0a0a0a')
    
    
    document.getElementById("square_side").innerHTML="Width and Height of Square is" + difference + "px"
    
    fill('#4287f5')
    stroke('black')
    
    
    
    square(noseX, noseY , difference)
    
    }