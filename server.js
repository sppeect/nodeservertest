const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// Rota para receber o webhook POST
app.post("/webhook", (req, res) => {
  // Obtenha os dados do webhook do corpo da solicitação
  const webhookData = req.body;

  // Exiba os dados no console
  console.log("Webhook Data Received:");
  console.log(JSON.stringify(webhookData, null, 2));

  // Envie uma resposta de sucesso
  res.status(200).send("Webhook Received");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Webhook rodando na porta ${PORT}`);
});
