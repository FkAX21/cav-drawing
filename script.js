// // Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 620;

// Sky
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 500, 600);

// floor
ctx.fillStyle = "black";
ctx.fillRect(0, 500, 600, 600);

// door
ctx.fillStyle = "  grey";
ctx.fillRect(40, 255, 110, 245);
ctx.fillRect(190, 100, 110, 400);
ctx.fillRect(370, 150, 110, 350);

// // sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(75, 75, 20, 0, 2 * Math.PI);
ctx.fill();

// // Fill text
ctx.fillStyle = "Rgb(10,20,86)";
ctx.font = "20px Arial";
ctx.fillText("NYC Skyscrapers", 20, 20);

// Cloud
let cloud = document.getElementById("cloud-img");
ctx.drawImage(cloud, 50, 60, 85, 60);

// Road

ctx.lineWidth = 4;
ctx.strokeStyle = "yellow";
ctx.beginPath();
ctx.moveTo(400, 550);
ctx.moveTo(500, 550);
ctx.lineTo(1, 550);
ctx.stroke();
// floor
ctx.fillStyle = "grey";
ctx.fillRect(0, 590, 600, 600);
