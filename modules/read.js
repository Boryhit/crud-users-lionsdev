const { listaFuncionarios } = require('./store')

function listandoFuncionario(lista) {
  console.log('\n\n-------------------LISTA DE FUNCIONARIOS-------------------\n\n')
  lista.forEach((element, index) => {
    console.log(`\nID: ${index + 1} || Nome: ${element.nome} | Cargo: ${element.cargo} | Salário: ${element.salario}\n`)
  })
}

function maiorSalario(voltarMenu) {
  if (listaFuncionarios.length === 0) {
    console.log('\nNão há funcionários cadastrados.\n')
    voltarMenu()
    return
  }

  let salarioMaior = listaFuncionarios[0].salario
  listaFuncionarios.forEach((objetoAtual) => {
    if (objetoAtual.salario > salarioMaior) {
      salarioMaior = objetoAtual.salario
    }
  })

  const salariosMaiores = listaFuncionarios.filter((f) => f.salario === salarioMaior)

  console.log('\n-----------------------Lista de funcionarios com maiores salarios--------------------')
  salariosMaiores.forEach((todasMaiores) =>
    console.log(`\n Nome: ${todasMaiores.nome} --- salario: ${salarioMaior}\n\n`),
  )
  voltarMenu()
}

function menorSalario(voltarMenu) {
  if (listaFuncionarios.length === 0) {
    console.log('\nNão há funcionários cadastrados.\n')
    voltarMenu()
    return
  }

  let salariomenor = listaFuncionarios[0].salario
  listaFuncionarios.forEach((objetoAtual) => {
    if (objetoAtual.salario < salariomenor) {
      salariomenor = objetoAtual.salario
    }
  })

  const salariosmenores = listaFuncionarios.filter((f) => f.salario === salariomenor)

  console.log('\n-----------------------Lista de funcionarios com menores salarios--------------------')
  salariosmenores.forEach((todasmenores) =>
    console.log(`\n Nome: ${todasmenores.nome} --- salario: ${salariomenor}\n\n`),
  )
  voltarMenu()
}

module.exports = { listandoFuncionario, maiorSalario, menorSalario }
