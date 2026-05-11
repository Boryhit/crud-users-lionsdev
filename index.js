const readline = require('readline')
const { exibirMenu } = require('./modules/menu')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

function voltarMenu() {
  exibirMenu(rl, voltarMenu)
}

voltarMenu()
