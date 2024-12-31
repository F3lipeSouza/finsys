const { TransacoesRepositoryinMemory} = require('../repositories/transacoesRepositoryinMemory')

function execute (input){
    const repositories = new TransacoesRepositoryinMemory();
    repositories.create(input);
}

module.exports = { execute }