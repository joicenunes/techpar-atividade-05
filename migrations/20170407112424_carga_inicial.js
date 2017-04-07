const lista = [{
    nomepessoa: "Leonardo",
    telefonepessoa: "996736441"
    },
    {
    nomepessoa: "Brunna",
    telefonepessoa: "998258005"
    },
    {
    nomepessoa: "Grazielly",
    telefonepessoa: "987526087"
}];

exports.up = function(knex, Promise) {
  return knex("pessoa").insert(lista);
};

exports.down = function(knex, Promise) {
  return knex("pessoa").del().whereIn("telefonepessoa", lista.map(e => e.telefonepessoa));
};
