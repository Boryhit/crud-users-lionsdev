let contatos = require('./contatos.js');


function listarContatos() {
    contatos.forEach(contato => {
        console.log(`ID: ${contato.id}`);
        console.log(`Nome: ${contato.nome}`);
        console.log(`Email: ${contato.email}`);

        if (contato.telefones && contato.telefones.length > 0) {
            console.log("Telefones:");
            contato.telefones.forEach(telefone => {
                console.log(telefone);
            });
        } else {
            console.log("Nenhum telefone cadastrado.");
        }

        console.log('----------------');
    });
}
module.exports = listarContatos;
