exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        { board_id: 1, stat_id: 1, name: 'Revenue', type: 'count' },
        { board_id: 1, stat_id: 2, name: 'MTD', type: 'count' },
        { board_id: 1, stat_id: 3, name: 'WTD', type: 'count' },

        { board_id: 1, stat_id: 4, name: 'Revenue 2', type: 'count' },
        { board_id: 1, stat_id: 5, name: 'MTD 2', type: 'count' },
        {
          board_id: 1,
          stat_id: 6,
          name: 'Revenue',
          type: 'line',
          gridArea: '2 / 3 / 4 / 1',
        },
      ]);
    });
};
