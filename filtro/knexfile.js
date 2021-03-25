;
let entorno = require('./setup/config/config')
entorno.initVar()
let datosDb = require('./database/db') 


module.exports={
  development:{
    migrations:{table: 'knex_migrations'},
    seeds: { tableName: './seeds' },
    client: datosDb.client,
    connection: datosDb.connection
  },
  production:{
    migrations:{table: 'knex_migrations'},
    seeds: { tableName: './seeds' },
    client: datosDb.client,
    connection: datosDb.connection
  }
}