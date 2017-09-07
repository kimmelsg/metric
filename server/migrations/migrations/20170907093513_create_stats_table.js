exports.up = function(knex, Promise) {
  return knex.schema.createTable('stats', function(table) {
    table.increments();
    table.string('category');
    table.string('slug');
    table.enu('frequency', ['hourly', 'daily', 'weekly', 'monthly']);

    table.timestamps(true, true);

    table.dateTime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stats');
};
