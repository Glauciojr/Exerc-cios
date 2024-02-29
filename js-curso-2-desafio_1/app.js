let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function Clicar () {
    let frase = document.querySelector('button');
    frase = console.log ('O botão foi clicado');
}

function Alerta () {
    let frase = document.getElementById('alert');
    frase = window.alert('Eu amo JS');
}

function Mensagem () {
    let frase = document.getElementById('button3');
    frase = window.prompt('Escreva o nome de uma cidade do Brasil');
    window.alert(`Estive em ${frase} e lembrei de você.`);
}

function Soma () {
    document.getElementById('button4');
    let num1 = parseInt(window.prompt('Digite o primeiro numero'));
    let num2 = parseInt(window.prompt('Digite o segundo numero'));
    let resultado = num1 + num2;
    alert(`O resultado da soma é ${resultado}`);
}
