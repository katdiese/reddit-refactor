var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'comments',
  file: 'data/comments.csv'
});


