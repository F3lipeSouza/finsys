const{ Router } = require('express');
const{ listaTransacoesController }= require('./controllers/listaTransacoesController');
const{ registraTransacaoController }= require('./controllers/registraTransacaoController');
const{ atualizaTransacaoController }= require('./controllers/atualizaTransacaoController');
const router = Router();

router.get('/transacoes', listaTransacoesController);

router.post('/transacao', registraTransacaoController)

router.put('/transacao/:id', atualizaTransacaoController)

router.delete('/transacao/:id', (req, res) =>{
    return res.send('Transação criada com sucesso');
});

module.exports = {router}