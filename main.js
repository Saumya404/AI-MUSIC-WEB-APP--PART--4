Peter_pan_song="";
Harry_potter_theme_song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;

function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(689,250);


    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on ('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}


function gotPoses (results){

if(results.length > 0){ 
console.log(results);

scoreleftwrist=results[0].pose.keypoints[9].score;
console.log(scoreleftwrist);

leftWrist_x =results[0].pose.leftWrist.x;
leftWrist_y= results[0].pose.leftWrist.y;
console.log("leftWrist_x="+leftWristX+" leftWrist_y="+leftWrist_y);

rightWrist_x= results[0].pose.rightWrist.x;
rightWrist_y =results[0].pose.rightWrist.y;

console.log("rightWrist_x= "+rightWrist_x+" rightWrist_y="+rightWrist_y);
}}


function draw(){

    image (video,0,0,600,530);
    fill("#37ff00"); 
    stroke("#ff0000");

    song_Peter_pan=Peter_pan_song.play();
    console.log(song_Peter_pan);
    if(scoreleftWrist > 0.2){
    circle(leftWrist_x, leftWrist_y, 20);
    Harry_potter_theme_song.stop(); if(song_Peter_pan == false) {
    }
    else{
    Peter_pan_song.play();
    document.getElementById("song_id").innerHTML = "Song Name: Peter Pan Song";
    }}}

function play(){
    Harry_potter_theme_song.play();
}