function setup(){
canvas=createCanvas(640,420)
canvas.center()
objectDetector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="status: detecting objects"
}