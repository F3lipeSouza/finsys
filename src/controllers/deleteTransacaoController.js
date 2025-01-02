const deleteTransacaoUsecase = require('../usecases/deleteTransacaoUsecase')

function deleteTransacaoController(req, res) {
    const { id } = req.params;
    deleteTransacaoUsecase.execute(id);
    return res.status(201).json();
};

module.exports = { deleteTransacaoController }