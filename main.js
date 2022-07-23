Webcam.set({
 width: 350, 
 Height: 300,
 image_format: 'png',
 png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<ing id="captured_image"src="'+data_uri+'"/>'; 
    });
} 

console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lW6FOteqO/',modelLoaded);

function modelLoaded()
{
    console.log('model loaded');
}

function check()
{
    var img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult()
{
    if(error)
    {
       consolr.error(error);
    }
    else
    {
       console.log(result);
       document.getElementById("result_object_name").innerHTML=results[0].label;
       document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}