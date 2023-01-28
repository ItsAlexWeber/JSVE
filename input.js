var c = document.getElementById("test-canvas");
var ctx = c.getContext("2d");
document.addEventListener("keydown", function(event) {
if (event.code === "ArrowLeft") {
x -= 10;
clearCanvas();
draw();
} else if (event.code === "ArrowRight") {
x += 10;
clearCanvas();
draw();
}
});

function draw() {
ctx.fillRect(x, 0, 50, 50);
}

function clearCanvas() {
ctx.clearRect(0, 0, c.width, c.height);
}
