module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'aws.connect.psdb.cloud',
      user: 'aesgtti7ne857gmovyt3',
      password: 'pscale_pw_DtAgFk6RPVCInXRBIbWBa1lwWrxAFMWDerSwUcIEnvc',
      database: 'test-database',
      ssl: { rejectUnauthorized: false }
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  },
};