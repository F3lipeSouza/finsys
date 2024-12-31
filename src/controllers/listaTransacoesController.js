const listaTransacoesUsecase = require('../usecases/listaTransacoesUsecase');

function listaTransacoesController(req, res) {
   const transacoesList = listaTransacoesUsecase.execute();
   return res.json(transacoesList);
}

module.exports = { listaTransacoesController };