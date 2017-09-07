exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('boards').insert([{ id: 1, name: 'Test' }]);
    });
};
