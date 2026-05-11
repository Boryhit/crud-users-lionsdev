const { listaFuncionarios } = require('./store')

const tipoNome = ''
const tipoCargo = ''
const tipoSalario = 0

function transformaEmString(letras) {
  return letras.toString()
}

function transformaEmNumber(numero) {
  return parseFloat(numero)
}

let guardarCadastro = []

function criarUsuario(rl, voltarMenu, infos) {
  listaFuncionarios.push({
    nome: infos[0],
    cargo: infos[1],
    salario: infos[2],
  })
  guardarCadastro = []
  voltarMenu()
}

function inputs(rl, voltarMenu, solicitacaAtual, tipo, transforma) {
  rl.question(`Digite ${solicitacaAtual}: `, (input) => {
    const dadoCadastro = transforma(input)
    validacaodados(rl, voltarMenu, dadoCadastro, tipo, solicitacaAtual)
  })
}

function validacaodados(rl, voltarMenu, input, tipo, solicitacao) {
  if (typeof input !== typeof tipo) {
    console.log(`Você digitou a informação de ${solicitacao} inválida, tente novamente...`)
    if (guardarCadastro.length === 0) {
      inputs(rl, voltarMenu, 'o seu nome para cadastro', tipoNome, transformaEmString)
    } else if (guardarCadastro.length === 1) {
      inputs(rl, voltarMenu, 'o seu cargo para cadastro', tipoCargo, transformaEmString)
    } else {
      inputs(rl, voltarMenu, 'o valor do seu salário para cadastro', tipoSalario, transformaEmNumber)
    }
    return
  }

  switch (true) {
    case guardarCadastro.length === 0:
      guardarCadastro.push(input)
      inputs(rl, voltarMenu, 'o seu cargo para cadastro', tipoCargo, transformaEmString)
      break
    case guardarCadastro.length === 1:
      guardarCadastro.push(input)
      inputs(rl, voltarMenu, 'o valor do seu salário para cadastro', tipoSalario, transformaEmNumber)
      break
    case guardarCadastro.length === 2:
      guardarCadastro.push(input)
      criarUsuario(rl, voltarMenu, guardarCadastro)
      break
    default:
      break
  }
}

/** Inicia o fluxo de cadastro (solicita nome, cargo e salário). */
function iniciarCadastro(rl, voltarMenu) {
  guardarCadastro = []
  inputs(rl, voltarMenu, 'o seu nome para cadastro', tipoNome, transformaEmString)
}

module.exports = { iniciarCadastro }
