
var canvas= document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(250, 200);
ctx.lineTo(120, 250);
ctx.closePath();
ctx.stroke();
var canvas_rec= document.getElementById("mycanvas2");
var ctx2 = canvas_rec.getContext('2d');
ctx2.beginPath();
ctx2.rect(100,50,150,100);
ctx2.stroke();
var canvas_arc= document.getElementById("mycanvas3");
var ctx3 = canvas_arc.getContext('2d');
ctx3.beginPath();
ctx3.arc(100,100,70,0,Math.PI*2,false);
ctx3.stroke();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(50,50);
/*ctx.lineTo(150,100);
ctx.lineTo(250,50);
ctx.lineTo(350,150);*/
/*ctx.arcTo(150,100,250,50,70);
ctx.arcTo(250,50,350,150,70);*/
ctx.rect(100,300,120,100);
ctx.lineWidth = 15;
ctx.lineCap = "butt"; //round_square
ctx.lineJoin = "round"; //miter_bevel
ctx.fillStyle = "#125624";
ctx.fill();
ctx.strokeStyle = "#922";
ctx.stroke();

var img = document.getElementById('img');
img.onload = function () {
    ctx.drawImage(img,0,0,150,150);
};
ctx.beginPath();
ctx.moveTo(50,50);
ctx.arcTo(150,100,250,50,70);
ctx.arcTo(250,50,350,150,70);
ctx.stroke();

var can = document.getElementById('can');
var c = can.getContext('2d');
var img = document.getElementById('img');
img.onload = function () {
    c.drawImage(img,0,0,150,150);
};















