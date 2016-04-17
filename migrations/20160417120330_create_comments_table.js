exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments('comment_id');
    table.integer('user_id');
    table.integer('post_id');
    table.text('comment');
    table.dateTime('comment_date').defaultTo('NOW()');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
