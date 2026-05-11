/**
 * Lista funcionários, solicita ID numérico e chama callback(rl, voltarMenu, id).
 * id é 1-based (como exibido na listagem).
 */
function promptIdFuncionario(rl, lista, listar, mensagemContexto, voltarMenu, callback) {
  listar(lista)
  rl.question(`Selecione o ID de um funcionario para ${mensagemContexto}`, (input) => {
    const idSelecionado = parseInt(input, 10)
    if (Number.isNaN(idSelecionado) || idSelecionado < 1 || idSelecionado > lista.length) {
      console.log('Digite um id valido!!')
      promptIdFuncionario(rl, lista, listar, mensagemContexto, voltarMenu, callback)
      return
    }
    callback(rl, voltarMenu, idSelecionado)
  })
}

module.exports = { promptIdFuncionario }
