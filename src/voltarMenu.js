const prompt = require("prompt-sync")();

function voltarMenu(){
    prompt("Precione enter para voltar ao menu!");
    limparTexto();
    menu();
};

function limparTexto() {
    console.clear();
}


module.exports = { voltarMenu, limparTexto };