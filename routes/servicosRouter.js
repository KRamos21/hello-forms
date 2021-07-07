const express = require("express");
const ServicosController = require("../controllers/ServicosController");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("servicos");
})

router.post("/", (req, res) => {
  const { descricao, preco } = req.body;
  
  const respostaRouter = ServicosController.criarUmServico(descricao, preco);
  
  res.status(201).json(respostaRouter);  
})

router.get("/listarTodos", (req, res) => {
  const servicos = ServicosController.listar();

  res.json(servicos);
})

module.exports = router;