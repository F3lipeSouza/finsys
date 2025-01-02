const{ Router } = require('express');
const{ listaTransacoesController }= require('./controllers/listaTransacoesController');
const{ registraTransacaoController }= require('./controllers/registraTransacaoController');
const{ atualizaTransacaoController }= require('./controllers/atualizaTransacaoController');
const { deleteTransacaoController} = require ('./controllers/deleteTransacaoController');
const router = Router();

router.get('/transacoes', listaTransacoesController);

router.post('/transacao', registraTransacaoController);

router.put('/transacao/:id', atualizaTransacaoController);

router.delete('/transacao/:id', deleteTransacaoController)

module.exports = {router}