//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete (xRaquete, yRaquete);
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
 yBolinha += velocidadeyBolinha;
}
function verificaColisaoBorda(){
  if (xBolinha + raio> width || 
      xBolinha - raio< 0){
  velocidadexBolinha *= -1;
   }
  if (yBolinha + raio> height ||
      yBolinha - raio< 0){
    velocidadeyBolinha *= -1;
       }
   }

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  function movimentaMinhaRaquete(){
  if (keyIsDown(DOWN_ARROW))
    yRaquete += 10;
}
  }

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *=-1;
  }
}
function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30; yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar (){
  fill (225);
  text (meusPontos, 278, 26);
  text (pontosdoOponente, 321, 26)
}

function marcaPonto (){
  if (xBolinha > 590){
    meuspontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}