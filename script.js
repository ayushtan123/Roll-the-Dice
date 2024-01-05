var random1=Math.round(Math.random()*5 +1);
var random2=Math.round(Math.random()*5 +1);

var image1="images/dice"+random1+".png";
var image2="images/dice"+random2+".png";

document.querySelector(".dice .img1").setAttribute("src",image1);
document.querySelector(".dice .img2").setAttribute("src",image2);

if(random1>random2){
document.querySelector("h1").innerHTML="🚩Player 1 Wins!";}

else if(random1<random2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";}

else{
    document.querySelector("h1").innerHTML="Draw!";}

function loadExternalScript() {
        // Create a new script element
        var script = document.createElement("script");
    
        // Set the source attribute to the URL of the external JavaScript file
        script.src = "script.js"; // Replace "script.js" with the actual URL of your external script
    
        // Append the script element to the document's <head> section
        
        document.head.appendChild(script);
}