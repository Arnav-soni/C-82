canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouse_event = "empty";
var last_x, last_y;

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    mouse_event = "mousedown";
    console.log("i click the mouse")
}
canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
 current_x=e.clientX-canvas.offsetLeft;
 current_y=e.clientY-canvas.offsetTop;

 if(mouse_event="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    
    console.log("last position of X and Y coordinates = ");
    console.log("x = " + last_x + "y = "+ last_y)

    
    ctx.moveTo(last_x,last_y);

    console.log("current position of X and Y coordinates = ");
    console.log("x = " + current_x + "y = "+ current_y)

    ctx.lineTo(current_x,current_y)
    ctx.stroke();
 }
 last_x=current_x;
 last_y=current_y;
}