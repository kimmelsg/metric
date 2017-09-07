exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('data')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('data').insert([
        { stat_id: 1, value: '$98,392' },
        { stat_id: 2, value: '$23' },
        { stat_id: 3, value: '$2,589' },

        { stat_id: 4, value: '$257' },
        { stat_id: 5, value: '$1' },
        {
          stat_id: 6,
          value: JSON.stringify([
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]),
        },
      ]);
    });
};
