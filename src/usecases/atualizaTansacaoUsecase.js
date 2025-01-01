const { TransacoesRepositoryinMemory } = require('../repositories/transacoesRepositoryinMemory')


function execute (id, transacao) {
    const repositories = new TransacoesRepositoryinMemory();
    const transacoes = repositories.atualizaTransacao(id, transacao);
    return transacoes;  
}

module.exports = { execute }