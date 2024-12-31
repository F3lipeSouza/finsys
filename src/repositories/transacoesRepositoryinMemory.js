const { data } = require("../infra/database/database")

class TransacoesRepositoryinMemory{
    findAll (){
        return data;
    }

    create (transacao){
        data.push(transacao)
    }
}


module.exports = { TransacoesRepositoryinMemory }