// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

// velocidade da bolinha
let velocidadeXbolinha = 12;
let velocidadeYbolinha = 12;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentarBolinha();
  verificaColisaoBorda();

}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);

}

function movimentarBolinha() {
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;

}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXbolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYbolinha *= -1;
  }
}