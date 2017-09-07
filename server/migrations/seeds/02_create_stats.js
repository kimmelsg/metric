exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stats')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stats').insert([
        { name: 'CJ revenue', frequency: 'weekly' },
        { name: 'Kimmel MTD', frequency: 'weekly' },
        { name: 'Walter WTD', frequency: 'weekly' },

        { name: 'Walter Revenue', frequency: 'weekly' },
        { name: 'Walter MTD', frequency: 'weekly' },
        { name: 'Kimmel Revenue', frequency: 'weekly' },
      ]);
    });
};
