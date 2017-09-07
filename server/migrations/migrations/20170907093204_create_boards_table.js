exports.up = function(knex, Promise) {
  return knex.schema.createTable('boards', function(table) {
    table.increments();
    table.string('name');
    table.string('slug');

    table.timestamps(true, true);

    table.index(['slug']);
    table.dateTime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('boards');
};
