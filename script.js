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

document.getElementById("telefone").addEventListener("input", function () {
  // Remove todos os caracteres não numéricos
  var telefone = this.value.replace(/\D/g, "");

  // Formata o número de telefone conforme necessário
  if (telefone.length === 11) {
      this.value = "(" + telefone.substring(0, 2) + ") " + telefone.substring(2, 7) + "-" + telefone.substring(7);
      document.getElementById("telefoneErro").textContent = "";
  } else {
      document.getElementById("telefoneErro").textContent = "Formato inválido";
  }
});

// Função para validar o formulário
function validarFormulario(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos
  const nomeSobrenome = document.getElementById('nome-sobrenome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  //const mensagem = document.getElementById('mensagem').value;

  // Verifica se todos os campos estão preenchidos
  if (nomeSobrenome && telefone && email) {
    // Exibe o alerta de sucesso
    alert("Muito obrigado, seus dados foram cadastrados e entraremos em contato em breve.");
    // Limpa o formulário (opcional)
    document.getElementById('formulario').reset();
  } else {
    alert("Por favor, preencha todos os campos do formulário.");
  }
}
// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('formulario').addEventListener('submit', validarFormulario);
