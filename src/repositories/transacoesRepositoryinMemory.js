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
        const index = await data.findIndex((transacao) => transacao.id === id);
        if (index === -1){
            throw new Error('Transação não encontrada')
        }
        data[index] = {
            id,
            date,
            ...transacao
        }
    }

    deleteTransacao (id){
        const index = data.findIndex((transacao) => transacao.id === id);

        if (index !== -1){
            data.splice(index, 1);
        }else{
            console.log(`Transação não encontrada`)
        }
        return data;
    }
}


module.exports = { TransacoesRepositoryinMemory }