function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    //sky
    drawSkyAt(ctx, 0, 0, 300, 300);
    //grass
    drawGrassAt(ctx, 0, 200, 100, 300);
    //sun
    drawSunAt(ctx, 250, 20, 20, 10, 30);
    //trees
    drawTreeAt(ctx, 250, 200, 10, 30);
    drawTreeAt(ctx, 50, 200, 10, 30);
    //house
    drawHouseAt(ctx, 110, 150, 100, 100);
    // Caption
    ctx.fillStyle = "white";
    ctx.font = "20px serif";
    ctx.fillText("My home", 125, 90);
    ctx.restore();
  }
}
//tree
function drawTreeAt(ctx, x, y, width, height) {
  let base = 25;
  // trunk
  ctx.fillStyle = "rgb(117,59,16)";
  ctx.fillRect(x, y, width, height);

  // leaves
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y - base * i);
    ctx.lineTo(x + base + base / 4, y - base * i);
    ctx.lineTo(x + base / 4, y - base * i - base * 1.5);
    ctx.lineTo(x - base, y - base * i);
    ctx.lineTo(x, y - base * i);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
  }
}
//sky
function drawSkyAt(ctx, x, y, height, width) {
  ctx.fillStyle = "rgb(135, 206, 235)";
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fill();
}
//grass
function drawGrassAt(ctx, x, y, height, width) {
  ctx.fillStyle = "rgb(50, 205, 50)";
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fill();
}
//sun
function drawSunAt(ctx, x, y, height, width, radius) {
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(x + width / 2, y + height, radius, 0, 2 * Math.PI);
  ctx.fill();
}
//house
function drawHouseAt(ctx, x, y, height, width) {
  //body
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fill();

  //roof
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width / 2, y - height / 2);
  ctx.lineTo(x + width, y);
  ctx.fill();

  //door
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.rect(x + 40, y + height / 2, width / 4, height / 2);
  ctx.fill();

  //leftbottomwindow
  ctx.fillStyle = "rgb(168,255,256)";
  ctx.beginPath();
  ctx.rect(x + 10, y + 60, width / 4, height / 4);
  ctx.fill();

  //lefttopwindow
  ctx.fillStyle = "rgb(168,255,256)";
  ctx.beginPath();
  ctx.rect(x + 10, y + 10, width / 4, height / 4);
  ctx.fill();

  //rightbottomwindow
  ctx.fillStyle = "rgb(168,255,256)";
  ctx.beginPath();
  ctx.rect(x + width - 30, y + 60, width / 4, height / 4);
  ctx.fill();

  //righttopwindow
  ctx.fillStyle = "rgb(168,255,256)";
  ctx.beginPath();
  ctx.rect(x + width - 30, y + 10, width / 4, height / 4);
  ctx.fill();
}
