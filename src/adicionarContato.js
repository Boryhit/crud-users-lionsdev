let contatos = require('./contatos.js');
let emailUsedByDifferentUser = require('./emailAlreadyInUse');

function adicionarContato(contato) {

  const id = contatos.length + 1;
  let isEmailInUse = emailUsedByDifferentUser(
    contato.email,
    id
  );

  if (!isEmailInUse) {
    contatos.push({
      id,
      nome: contato.nome,
      email: contato.email,
      telefones: contato.telefones
    });
    return true;
  } else {
    console.log(
      'O email já está em uso por outro contato.'
    );
    return false;
  }
}

module.exports = adicionarContato;