
var c = document.getElementById("test-canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(20, 0);
ctx.lineTo(20, 40)
ctx.lineTo(0, 40)
ctx.lineTo(0, 0)
ctx.stroke();
