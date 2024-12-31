const registraTransacaoUsecase = require('../usecases/registraTransacaoUsecase')

function registraTransacaoController (req, res) {
    const data = req.body;
    console.log('data',data);
    registraTransacaoUsecase.execute(data);
    return res.status(201).json()
}

module.exports = { registraTransacaoController }