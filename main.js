function preload(){

}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    
    camera = createCapture(VIDEO);
    camera.size(300,300);
    camera.hide();

    posen= ml5.poseNet(camera,modelLoaded);
    posen.on('key',gotPoses);
}

function modelLoaded(){
    console.log("Model loaded");
    
 }
 
 function gotPoses(results)
 {
     if(results.length >0){
         console.log(results);
         console.log("nosex = " +results[0].pose.nose.x);
         console.log("nosey = " +results[0].pose.nose.y);
     }
 
 }
 
function draw()
{
    image(camera,0,0,300,300);
}

function save_pic(){
    save('mypicture_jpg');
}