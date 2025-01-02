const atualizaTransacoesUsecase= require('../usecases/atualizaTansacaoUsecase')

function atualizaTransacaoController(req, res) {
    const data = req.body;
    atualizaTransacoesUsecase.execute(data.id,{...data}); 
    return res.status(201).json();
}

module.exports = { atualizaTransacaoController }