var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'posts',
  file: 'data/posts.csv'
});


