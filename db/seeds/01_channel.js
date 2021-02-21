
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('channel').del()
      .then(function () {
        // Inserts seed entries
        return knex('channel').insert([
            {
                id: 1,
                name: 'channel1',
              },
              {
                id: 2,
                name: 'channel2',
              }
        ]);
      });
  };
  