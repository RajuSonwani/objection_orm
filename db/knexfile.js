require('dotenv').config();
const { DB_CLIENT, DB_NAME, DB_USER, DB_PASS, SERVER_HOST} = process.env

// Update with your config settings.

module.exports = {

  development: {
    client: process.env.DB_CLIENT,
    connection: {
    host: process.env.SERVER_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASS, 
    database: process.env.DB_NAME
    },
    debug: true,
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
        directory: __dirname + "/seeds",
    }
  },

  staging: {
    client: DB_CLIENT,
    connection: {
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: DB_CLIENT,
    connection: {
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
