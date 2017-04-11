const express = require("express");
const app = express();

const config = require("./knexfile");
const env = process.env.NODE_ENV || "development";
const knex = require("knex")(
    config[env]
);

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static("public"));

app.get('/listar', function(req, res) {
  knex("pessoa").select().then((ret) => res.send(ret));
});

app.post("/salvar", (req,res) => {
	let pessoa = req.body;
	knex("pessoa").insert(pessoa, "idpessoa").then((ret) => {
		pessoa.idpessoa = ret[0];
		res.send(true); 
	});
	console.log(pessoa);
});

knex.migrate.latest().then( () => {
  app.listen(3000);
  console.log("app online na porta 3000");
});
