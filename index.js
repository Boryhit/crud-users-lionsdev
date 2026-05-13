const prompt = require('prompt-sync')();
const listarContatos = require('./src/listarContatos');
const contatos = require('./src/contatos');
const adicionarContato  = require('./src/adicionarContato');
const removerContato = require('./src/removerContato');
const atualizarContato = require('./src/atualizarContato');
const emailUsedByDifferentUser = require('./src/emailAlreadyInUse');

function mainMenu() {

let opcao = -1;

while (opcao !== 5) {
  console.log('\n--- Gerenciador de Contatos ---');
  console.log('1. Listar Contatos');
  console.log('2. Adicionar Contato');
  console.log('3. Atualizar Contato');
  console.log('4. Remover Contato');
  console.log('5. Sair');

  opcao = parseInt(prompt('Escolha uma opção: '));
  if (isNaN(opcao)) {
    console.log('Digite um número válido!');
    continue;
  }
  
  switch (opcao) {
    case 1:
      if (contatos.length === 0) {
        console.log('Nenhum contato cadastrado.');
      } else {
        listarContatos();
      }
      break;
    case 2:
      const telefones = []
      const nome = prompt('Digite o nome do contato: '); 
      const email = prompt('Digite o email do contato: ');
      if (emailUsedByDifferentUser(email, null)) {
        console.log('O email já está em uso por outro contato.');
        break;
      }

      let telefone = prompt('Digite o telefone: ');

      while (telefone !== '') {
        telefones.push(telefone);

        telefone = prompt(
          'Digite outro telefone: (deixe vazio para parar)'
        );
      }
      const resultadoAdicionar = adicionarContato({nome, email, telefones});
      
      if (resultadoAdicionar) {
        console.log('Contato adicionado com sucesso!');
      }
      break;
    case 3:
      listarContatos(contatos);
      const novosTelefones = []
      const id = parseInt(prompt('Digite o ID do contato que deseja atualizar: '));
      if (isNaN(id)) {
        console.log('Digite um número válido!');
        continue;
      }

      if (id < 1 || id > contatos.length) {
        console.log('ID inválido. Por favor, escolha um ID existente.');
        continue;
      } else {
        const novoNome = prompt('Novo nome: (deixe vazio para manter o nome atual) ') || undefined;
        const novoEmail = prompt('Novo email: (deixe vazio para manter o email atual) ') || undefined;

        if (novoEmail && emailUsedByDifferentUser(novoEmail, id)) {
          console.log('O email já está em uso por outro contato.');
          continue;
        }

        let novoTelefone = prompt('Digite o telefone: ');

        while (novoTelefone !== '') {
          novosTelefones.push(novoTelefone);

          novoTelefone = prompt(
            'Digite outro telefone: (deixe vazio para parar)'
          );
        }
        
        const resultadoAtualizar = atualizarContato(id, {nome: novoNome, email: novoEmail, telefones: novosTelefones});
        
        if (resultadoAtualizar) {
          console.log('Contato atualizado com sucesso!');
        }
      }
      break;
    case 4:
      listarContatos(contatos);
      const idRemover = parseInt(prompt('Digite o ID do contato que deseja remover: '));
      if (isNaN(idRemover)) {
        console.log('Digite um número válido!');
        continue;
      }
      if (idRemover < 1 || idRemover > contatos.length) {
        console.log('ID inválido. Por favor, escolha um ID existente.');
        continue;
      } else {
        const confirmacao = prompt('Tem certeza que deseja remover o contato? (s/n): ');
        const resultadoRemover = removerContato(idRemover, confirmacao);
        
        if (resultadoRemover) {
          console.log('Contato removido com sucesso!');
        } else {
          console.log('Falha ao remover contato. Verifique o ID e a confirmação.');
        }
      }
      break;
    case 5:
      console.log('Saindo do programa...');
      break;
    default:
      console.log('Opção inválida. Por favor, escolha uma opção válida.');
  } 
} 

}
mainMenu();
