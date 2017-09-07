exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
    table.increments();
    table.string('name');
    table
      .integer('stat_id')
      .references('stats.id')
      .unsigned();
    table.enu('type', ['count', 'line', 'pie']);

    table.timestamps(true, true);

    table.index(['stat_id', 'type']);
    table.dateTime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
