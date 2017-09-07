exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
    table.increments();
    table
      .integer('board_id')
      .references('boards.id')
      .unsigned();
    table
      .integer('stat_id')
      .references('stats.id')
      .unsigned();
    table.string('name');
    table.enu('type', ['count', 'line', 'pie']);
    table.string('gridArea');

    table.timestamps(true, true);

    table.index(['stat_id', 'type']);
    table.dateTime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
