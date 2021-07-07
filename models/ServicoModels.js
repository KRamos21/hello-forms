const servicos = require("../database/servicos.json");
const fs = require("fs");

const ServicoModel = {
  findAll: () => servicos,

  create: (servico) => {
    servicos.push(servico)

    try {
      fs.writeFileSync("./database/servicos.json", JSON.stringify(servicos, null, "\t")); 
      return true
    } catch (error) {
      return false
    }
  }
}


module.exports = ServicoModel