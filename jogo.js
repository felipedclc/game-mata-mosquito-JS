
var height = 0;
var width = 0;
var vidas = 1;

function ajusteTamanhoJanela() {
    height = window.innerHeight;
    width = window.innerWidth;
    console.log(height, width);
}

ajusteTamanhoJanela()

function posicaoRandomica(){

    // REMOVENDO O MOSQUITO ANTES DE CRIAR OUTRO (caso exista)
    if(document.getElementById('mosquito') !== null) {
        document.getElementById('mosquito').remove(); 

        if(vidas > 3) {
           alert('Interromper o jogo: (game over)') 
        }  
        else {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png" // alterando a imagem da vida
            vidas++;
        }
        
    }
    

    var posicaoX = Math.floor(Math.random() * width) - 90;
    var posicaoY = Math.floor(Math.random() * height) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    // CRIANDO O ELEMENTO HTML
    var mosquito = document.createElement('img');

    mosquito.src = 'imagens/mosca.png'; // atribuindo a variavel mosquito a imagem
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio(); // espaço para diferenciar as chamadas
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    mosquito.onclick = function() {
        this.remove(); // "this." faz referência ao elemento html(mosquito)
    }

    document.body.appendChild(mosquito);  // add um filtro para o body
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    if(classe === 0) {
        return 'mosquito1';
    }
    else if(classe === 1) {
        return 'mosquito2';
    }

    else {
        return 'mosquito3';
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    if(classe === 0) {
        return 'ladoA';
    }

    else if(classe === 1) {
        return 'ladoB';
    }

    else {
        return 'ladoC';
    }
}