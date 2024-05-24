let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}