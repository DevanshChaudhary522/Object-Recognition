Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="final" src="'+data_uri+'"/>';
        
    });

};

console.log('ml5version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YWHezoiAT/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');

}
function check(){
    img=document.getElementById('final');
    classifier.classify(img,gotResult);             



}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_Object").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}
