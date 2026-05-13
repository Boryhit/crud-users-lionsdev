let contatos = require('./contatos.js');

function getIndexByUserId(id) {
  const index = contatos.findIndex(contato => contato.id === parseInt(id));

  if (index === -1) {
    console.log('Contato não encontrado.');
  }
  return index;
}

module.exports = getIndexByUserId;