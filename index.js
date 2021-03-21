const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

app.get('/ping', (req, res) => {
  res.send("<h1>Pong</h1>");
});

app.get('/json', (req, res) => {
  res.status(200).json({nome: "Paulo Ricardo", Idade: 27, EstadoCivil: "Casado"});
});

app.get('/funcionario/:id/dependentes/', (req, res) => {
  res.status(200).json(
    [
      {nome: "Rafaela Roque", Idade: 26, funcionarioId: req.params.id},
      {nome: "Ana luiza Noé", Idade: 3, funcionarioId: req.params.id}]
  );
});

app.post('/post/', (req, res) => {
  console.log(req.body);
  res.send('Valor Enviado: ' + JSON.stringify(req.body));
})

app.get('*', (req, res) => {
  res.status(404).send("Rota inexistente!");
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

