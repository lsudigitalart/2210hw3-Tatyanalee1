function setup() {
  createCanvas(500, 500);
  stroke(102);
}

function draw() {
  //lght turquoise background(204, 226, 225)
  //dark blue background(0, 26, 51)
  background(204, 226, 225);
  for (var y = 20; y <= height-20; y += 10) {
    for (var x = 20; x <= width-20; x += 10)
  {
    fill(0, 26, 51);
    ellipse(x, y, 4, 4);
    line(x, y, 300, 300);
  }
  }
}
