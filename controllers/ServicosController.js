const ServicoModel = require("../models/ServicoModels");
const { v4 } = require("uuid");

const ServicosController = {
  listar: () => {
    return ServicoModel.findAll();
  },

  criarUmServico: (descricao, preco) => {
    const novoServico = {
      id: v4(),
      desc: descricao,
      preco: Number(preco)
    }

    const respostaModel = ServicoModel.create(novoServico);

    if (respostaModel) {
      return novoServico;
    } else {
      return "Não foi possível criar o serviço."
    }
  }
}

module.exports = ServicosController;