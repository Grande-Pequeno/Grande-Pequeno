//variáveis da bolinha//
let xBolinha = 100;
let yBolinha = 200
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha//
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete 1//
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete 2//
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let colidiu = false;

//variáveis do placar//
let meusPontos = 0;
let pontosDoOponente = 0;

//comando principais//
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("darkblue");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluirPlacar();
  marcaPonto();
}

//comando da bolinha//
function mostraBolinha() {
  fill("orange");
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

//comando das raquetes 1-2//
function mostraRaquete(x,y) {
  fill("yellow");
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(82)) {
    yRaquete -= 10;
  }
  if(keyIsDown(70)) {
    yRaquete += 10;
  }
}
  
function movimentaRaqueteOponente() {
    if (keyIsDown(85)) {
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(74)) {
        yRaqueteOponente += 10;
    }
}

function verificaColisaoRaquete(x,y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}  

//comando do placar//
function incluirPlacar() {
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 15) {
    pontosDoOponente += 1;
  }
}
  
