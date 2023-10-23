//crie as variaveis dos seus personagens aqui
var box;


function preload() {
  //carregue as imagens dos personagens aqui
}

function setup() {
  createCanvas(800, 400);
  //crie os sprites aqui
  box = createSprite(200, 200, 50, 80);
  box.shapeColor = "green";



}

function controles() {
  if (keyDown("w")) {
    box.y = box.y - 2;
  }

  if (keyDown("s")) {
    box.y = box.y + 2;
  }

  if (keyDown("a")) {
    box.x = box.x - 2;
  }

  if (keyDown("d")) {
    box.x = box.x + 2;
  }
}

function draw() {
  background(255, 255, 255);
  controles()
  drawSprites();
}
