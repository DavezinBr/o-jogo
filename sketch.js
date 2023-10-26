//crie as variaveis dos seus personagens aqui
var box;
var areia;

function preload() {
  boxImg = loadImage("James das Frutas (2).png");
  areiaImg = loadImage("areia do Projeto.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //crie os sprites aqui
  box = createSprite(200, 200, 50, 80);
  box.addImage(boxImg)
  



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

//super velocidade
/*function controles() {
  if (keyDown("w")) {
    box.y = box.y - 12;
  }

  if (keyDown("s")) {
    box.y = box.y + 12;
  }

  if (keyDown("a")) {
    box.x = box.x - 12;
  }

  if (keyDown("d")) {
    box.x = box.x + 12;
  }
}*/

function draw() {
  background(areiaImg);
  controles()
  drawSprites();
}
