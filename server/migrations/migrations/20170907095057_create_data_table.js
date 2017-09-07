exports.up = function(knex, Promise) {
  return knex.schema.createTable('data', function(table) {
    table.increments();
    table
      .integer('stat_id')
      .references('stats.id')
      .unsigned();

    table.specificType('value', 'json');

    table.timestamps(true, true);

    table.index(['stat_id']);
    table.dateTime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('data');
};
