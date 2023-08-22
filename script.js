// Função menu-hamburguer
function clickMenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}

document.addEventListener('DOMContentLoaded', function() {
document.querySelector('.home').classList.add('active');
});

// Função para adicionar o comportamento de clique aos botões
function cliqueBotao(event) {
  // Seleciona todos os botões com a classe "botao" e remove a classe "clicado"
  var botoes = document.querySelectorAll('.botao');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove('clicado');
  }

  // Adiciona a classe "clicado" ao botão que foi clicado
  event.target.classList.add('clicado');
}

// Adiciona o evento de clique aos botões
var botao1 = document.getElementById('botao1');
var botao2 = document.getElementById('botao2');
var botao3 = document.getElementById('botao3');
var botao4 = document.getElementById('botao4');
botao1.addEventListener('click', cliqueBotao);
botao2.addEventListener('click', cliqueBotao);
botao3.addEventListener('click', cliqueBotao);
botao4.addEventListener('click', cliqueBotao);

function mostrarSecao(numeroSecao) {
  // Esconde todas as seções
  var secoes = document.getElementsByTagName("section");
  for (var i = 0; i < secoes.length; i++) {
      secoes[i].style.display = "none";
  }
  
  // Mostra a seção selecionada
  document.getElementById("secao" + numeroSecao).style.display = "block";
}

 // codigo para o carrossel
let count = 1;
document.getElementById('radio1').checked = true;
 // seta o intervalo entre as imagens
setInterval( function(){
  nextImage();
}, 4000)

function nextImage() {
  count++
  if(count>3){
    count=1
  }
  document.getElementById('radio'+count).checked = true
}
