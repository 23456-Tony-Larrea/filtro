var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '149.62.169.149',
    user : 'marisol',
    password : 'D*4jx3e7',
    database : 'eventos_nuevo_bot'
  }
});

  module.exports=
      knex