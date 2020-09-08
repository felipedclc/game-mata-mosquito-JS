
var height = 0;
var width = 0;

function ajusteTamanhoJanela() {
    height = window.innerHeight;
    width = window.innerWidth;
    console.log(height, width);
}

ajusteTamanhoJanela()

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * width) - 90;
    var posicaoY = Math.floor(Math.random() * height) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    /****CRIANDO O ELEMENTO HTML****/
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png'; // atribuindo a variavel mosquito a imagem
    mosquito.className = 'mosquito1';
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    // " . " acessa os atributos html

    document.body.appendChild(mosquito);  // ADD UM FILHO PARA O BODY
}
