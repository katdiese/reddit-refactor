exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments('post_id');
    table.string('title');
    table.text('content');
    table.dateTime('post_date').defaultTo('NOW');
    table.text('image_url');
    table.string('location');
    table.integer('user_id');
    table.integer('score');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
