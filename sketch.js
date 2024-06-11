function setup() {
    createCanvas(600, 600);
    background("black");
  }  
  
  function draw() {
    stroke("gold");
    fill("purple");
    
   if(mouseIsPressed) {
    rect(mouseX,mouseY,20,20);
    }
  }