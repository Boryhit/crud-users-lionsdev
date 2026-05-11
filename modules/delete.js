const { listaFuncionarios } = require('./store')
const { listandoFuncionario } = require('./read')
const { promptIdFuncionario } = require('./prompts')

function excluir(rl, voltarMenu, id) {
  const i = id - 1
  const nome = listaFuncionarios[i].nome
  rl.question(`Tem certeza que deseja demitir o ${nome}? [1]SIM\n [2]NÃO\n`, (input) => {
    const escolha = parseInt(input, 10)
    switch (escolha) {
      case 1:
        listaFuncionarios.splice(i, 1)
        voltarMenu()
        break
      case 2:
        console.log('\n--Que bom, menos um funcionario demitido\n')
        voltarMenu()
        break
      default:
        console.log('Opção inválida...Reiniciando...')
        voltarMenu()
        break
    }
  })
}

function iniciarExclusao(rl, voltarMenu) {
  promptIdFuncionario(
    rl,
    listaFuncionarios,
    listandoFuncionario,
    'demitir um funcionario: \n',
    voltarMenu,
    excluir,
  )
}

module.exports = { iniciarExclusao }
