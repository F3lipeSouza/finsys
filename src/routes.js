const{ Router } = require('express');
const{ listaTransacoesController }= require('./controllers/listaTransacoesController');
const{ registraTransacaoController }= require('./controllers/registraTransacaoController');
const router = Router();

router.get('/transacoes', listaTransacoesController);

router.post('/transacao', registraTransacaoController)

router.put('/transacao/:id', (req, res) =>{
    return res.send('Transação criada com sucesso');
});

router.delete('/transacao/:id', (req, res) =>{
    return res.send('Transação criada com sucesso');
});

module.exports = {router}