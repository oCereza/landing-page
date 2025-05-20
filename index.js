var Leo = window.document.getElementById("leo");
var Sama = window.document.getElementById("sama");
var Bruna = window.document.getElementById("bruna");
var SetaDiretia = window.document.getElementById("seta-direita");
var SetaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita() {
  Bruna.style = "display:none";
  Sama.style = "display:flex";
  SetaDiretia.style = "display:none";
  SetaEsquerda.style = "display:flex";
}

function RolarParaEsquerda() {
  Bruna.style = "display:flex";
  Sama.style = "display:none";
  SetaDiretia.style = "display:flex";
  SetaEsquerda.style = "display:none";
}
