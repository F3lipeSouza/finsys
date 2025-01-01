const  {  v4 : uuidv4  }  =  require ( 'uuid' ) ; 
const { DateTime } = require('luxon');
const date = DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
const { data } = require("../infra/database/database")

class TransacoesRepositoryinMemory{
    findAll (){
        return data;
    };

    findById (id){
        return data.find((transacao) => transacao.id === id)
    }

    create (transacao){
        const id = uuidv4();
        data.push({
            id,
            date,
            ...transacao
        })
    }
    
    async atualizaTransacao (id, transacao){
        console.log('data', data)
        const index = await data.findIndex((transacao) => transacao.id === id);
        if (index === -1){
            console.log('id', id)
            console.log('transacao', transacao)
            throw new Error('Transação não encontrada')
        }
        console.log('index', index);
        data[index] = {
            id,
            date,
            ...transacao
        }
    }
}


module.exports = { TransacoesRepositoryinMemory }