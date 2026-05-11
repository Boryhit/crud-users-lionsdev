const { listaFuncionarios } = require('./store')
const { listandoFuncionario } = require('./read')
const { promptIdFuncionario } = require('./prompts')

function qualEditar(rl, voltarMenu, id) {
  rl.question('O que você deseja editar? [1]NOME || [2]CARGO || [3]SALARIO\n\n ', (input) => {
    const qual = parseInt(input, 10)
    const i = id - 1
    switch (qual) {
      case 1:
        rl.question('Digite o dado atualizado: \n', (novoNome) => {
          listaFuncionarios[i].nome = novoNome
          voltarMenu()
        })
        break
      case 2:
        rl.question('Digite o dado atualizado: \n', (novoCargo) => {
          listaFuncionarios[i].cargo = novoCargo
          voltarMenu()
        })
        break
      case 3:
        rl.question('Digite o dado atualizado: \n', (novoSalario) => {
          listaFuncionarios[i].salario = parseFloat(novoSalario)
          voltarMenu()
        })
        break
      default:
        console.log('Opção inválida...')
        voltarMenu()
        break
    }
  })
}

function iniciarEdicao(rl, voltarMenu) {
  promptIdFuncionario(
    rl,
    listaFuncionarios,
    listandoFuncionario,
    'editar os dados de um funcionario:  \n',
    voltarMenu,
    qualEditar,
  )
}

module.exports = { iniciarEdicao }
