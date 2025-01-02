const { TransacoesRepositoryinMemory }  = require('../repositories/transacoesRepositoryinMemory');

function execute (id) {
    const repository = new TransacoesRepositoryinMemory();
    repository.deleteTransacao(id);
};

module.exports = { execute }    

