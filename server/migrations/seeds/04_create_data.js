exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('data')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('data').insert([
        { stat_id: 1, value: JSON.stringify({ value: '$98,392' }) },
        { stat_id: 2, value: JSON.stringify({ value: '$8,392' }) },
        { stat_id: 3, value: JSON.stringify({ value: '$58' }) },

        { stat_id: 4, value: JSON.stringify({ value: '$389' }) },
        { stat_id: 4, value: JSON.stringify({ value: '$396' }) },
        { stat_id: 5, value: JSON.stringify({ value: '$5,622' }) },
        {
          stat_id: 6,
          value: JSON.stringify({
            chart: [
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ],
          }),
        },
        {
          stat_id: 6,
          value: JSON.stringify({
            chart: [
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 13 },
            ],
          }),
        },
        {
          stat_id: 7,
          value: JSON.stringify({
            chart: [
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 13 },
            ],
          }),
        },
      ]);
    });
};
