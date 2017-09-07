exports.up = function(knex, Promise) {
  return knex.schema.createTable('stats', function(table) {
    table.increments();
    table.string('name');
    table.enu('frequency', ['daily', 'weekly', 'monthly']);

    table.string('gridArea');

    table.timestamps(true, true);

    table.dateTime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stats');
};
