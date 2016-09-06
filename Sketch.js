var x;

function setup(){
  createCanvas(150, 300);
  x = 20;
  println("my awesome variable=" , x,"width = ")
  line(10, 10, width-5, height-5);
  ellipse(10,10, 10);
  ellipse(10, 10, x);
  ellipse(width-5, height-5, x);
}
function draw(){
  background(150);

  for(varn = 0; n <1000){
    line(10, 10, 5, 5);
    ellipse(10, 10, x);
    ellipse(width-5, height-5, x);
    }
}
