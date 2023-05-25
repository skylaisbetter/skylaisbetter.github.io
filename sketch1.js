function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 300);
  
  if (mouseX > 0 && mouseX <= 100) {
    background(0,255,255);
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
    text("Araceli", mouseX-50, mouseY-50, 40,40);
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    background(0, 0, 255);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
    text("is",mouseX-50, mouseY-50, 40,40);
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    background(255, 0, 0);
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 40, 40);
    text("super",mouseX-50, mouseY-50, 40,40);
  }
  else if (mouseX > 300 && mouseX <= 400) {
    background(0, 225, 0);
    fill(0, 255, 255);
    ellipse(mouseX, mouseY, 40, 40);
    text("duper",mouseX-50, mouseY-50, 40,40);
  }
  else if (mouseX > 400 && mouseX <= 500) {
    background(255, 225, 0);
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
    text("SHORT",mouseX-50, mouseY-50, 40,40);
  }
}







