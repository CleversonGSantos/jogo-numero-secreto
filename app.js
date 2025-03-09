let listaNumerosSortiados = [];
let numeroLimite = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
console.log('numero: ' + numeroAleatorio);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}

tituloInicioJogo();

function verificarChute() {
    let valorChute = document.querySelector('input').value;
    console.log(valorChute == numeroAleatorio);

    if (valorChute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} tentativas!`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('btChute').setAttribute('disabled', 'true');
    } else {
        tentativas += 1;
        limpaCampo();
        if (valorChute > numeroAleatorio){
                exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }
}    

function limpaCampo() {
    valorChute = document.querySelector('input');
    valorChute.value = '';
}

function reiniciarJogo() {
    tituloInicioJogo();
    tentativas = 1;
    numeroAleatorio = gerarNumeroAleatorio();
    console.log(`numero secreto: ${numeroAleatorio}`)
    limpaCampo();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('btChute').removeAttribute('disabled');
}

function tituloInicioJogo() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroLimite}`);
}

function gerarNumeroAleatorio() {
    if (listaNumerosSortiados.length > (numeroLimite / 2)) {
        listaNumerosSortiados = [];
    }
    let numeroSortiado;
    do {
        numeroSortiado = parseInt(Math.random() * numeroLimite + 1);
    } while (listaNumerosSortiados.includes(numeroSortiado));
    
    listaNumerosSortiados.push(numeroSortiado);
    console.log(listaNumerosSortiados);
    return numeroSortiado;
}