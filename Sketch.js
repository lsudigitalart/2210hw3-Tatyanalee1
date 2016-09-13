function setup() {
  createCanvas(500, 500);
}

function draw() {
  //lght turquoise background(204, 226, 225)
  //dark blue background(0, 26, 51)
  background (0, 89, 56);
  for (var y = 10; y <= height-20; y += 10) {
    for (var x = 10; x <= width-20; x += 10)
  {
    fill(200, 0, 150);
    ellipse(x, y, x + 40, y/50);

    fill(0, 0, 150);
    line(x - y, y/50, x, y);

    fill(255);
    line(x, y, 250, 250);
    }
  }
}
