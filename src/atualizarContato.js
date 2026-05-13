let contatos = require('./contatos.js');
let emailUsedByDifferentUser = require('./emailAlreadyInUse');
let getIndexByUserId = require('./getIndexByUserId');

function atualizarContato(id, novoContato) {
  const index = getIndexByUserId(id);

  if (index === -1) {
    console.log('Contato não encontrado.');
    return false;
  }
  
  if (emailUsedByDifferentUser(novoContato.email, id)) {
    console.log('O email já está em uso por outro contato.');
    return false;
  }

  contatos[index].nome = novoContato.nome || contatos[index].nome;
  contatos[index].email = novoContato.email || contatos[index].email;

  if (novoContato.telefones.length > 0) {
    contatos[index].telefones = novoContato.telefones;
  } 
  return true;
}

module.exports = atualizarContato;