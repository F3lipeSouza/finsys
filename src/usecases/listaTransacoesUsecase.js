const { TransacoesRepositoryinMemory} = require('../repositories/transacoesRepositoryinMemory')

function execute() {
 const repositories = new TransacoesRepositoryinMemory();
 const transacoes = repositories.findAll();
 return transacoes;
}

module.exports = { execute }