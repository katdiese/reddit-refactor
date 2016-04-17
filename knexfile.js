module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/reddit-refactor'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};