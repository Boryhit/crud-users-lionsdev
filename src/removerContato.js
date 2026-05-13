const getIndexByUserId = require('./getIndexByUserId');
let contatos = require('./contatos.js');

function removerContato(id, confirmacao) {
  const index = getIndexByUserId(id);
  
    if (confirmacao.toLowerCase() != 's') {
      console.log('Desitindo de remover contato!');
      return false;
    } 
    if (index === -1) {
      return false;
    }
    contatos.splice(index, 1);
    return true;
}

module.exports = removerContato;
