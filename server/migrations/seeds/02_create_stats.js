exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stats')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stats').insert([
        //webhook: /insert/constructionjobs.com/revenue
        {
          category: 'constructionjobs.com',
          slug: 'revenue',
          frequency: 'weekly',
        },
        { category: 'kimmel', slug: 'revenue2', frequency: 'weekly' },
        { category: 'walter', slug: 'weekly', frequency: 'weekly' },

        { category: 'walter', slug: 'mtd', frequency: 'weekly' },
        { category: 'walter', slug: 'revenue', frequency: 'weekly' },
        { category: 'kimmel', slug: 'revenue', frequency: 'weekly' },
        { category: 'kimmel', slug: 'newsletter' },
      ]);
    });
};
