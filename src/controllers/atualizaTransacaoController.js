const atualizaTransacoesUsecase= require('../usecases/atualizaTansacaoUsecase')

function atualizaTransacaoController(req, res) {
    console.log('req.body', req.body);
    const data = req.body;
    atualizaTransacoesUsecase.execute(data.id,{...data}); 
    return res.status(201).json();
}

module.exports = { atualizaTransacaoController }