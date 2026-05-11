const { iniciarCadastro } = require('./create')
const { listandoFuncionario, maiorSalario, menorSalario } = require('./read')
const { listaFuncionarios } = require('./store')
const { iniciarEdicao } = require('./update')
const { iniciarExclusao } = require('./delete')

function exibirMenu(rl, voltarMenu) {
  rl.question(
    '\n\nSelecione uma opção \n[1] Cadastrar funcionario (CREATE)\n[2] Listar funcionarios (READ)\n[3] Maior salário\n[4] Menor Salário\n[5] Excluir (DELETE)\n[6] Editar (UPDATE)\n[0] Sair\n\n',
    (input) => {
      const escolhaMenu = parseInt(input, 10)
      if (Number.isNaN(escolhaMenu)) {
        console.log('Opção inválida, tente novamente...')
        voltarMenu()
        return
      }

      switch (escolhaMenu) {
        case 1:
          iniciarCadastro(rl, voltarMenu)
          break
        case 2:
          listandoFuncionario(listaFuncionarios)
          voltarMenu()
          break
        case 3:
          maiorSalario(voltarMenu)
          break
        case 4:
          menorSalario(voltarMenu)
          break
        case 5:
          iniciarExclusao(rl, voltarMenu)
          break
        case 6:
          iniciarEdicao(rl, voltarMenu)
          break
        case 0:
          console.log('\nAté logo.\n')
          rl.close()
          break
        default:
          console.log('Opção inválida...Tente Novamente!')
          voltarMenu()
          break
      }
    },
  )
}

module.exports = { exibirMenu }
