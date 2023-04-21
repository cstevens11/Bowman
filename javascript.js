var theVideo = document.getElementById("vid"); 
var button = document.getElementById("btn")

function Unmute() { 
    theVideo.muted = false;
    button.style.visibility = "hidden";
}