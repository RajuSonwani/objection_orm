
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('video').del()
      .then(function () {
        // Inserts seed entries
        return knex('video').insert([
            {
                id: 1,
                title: 'video1ByUser1',
                channel_id: 1,
              },
              {
                id: 2,
                title: 'video2ByUser1',
                channel_id: 1,
              },
              {
                id: 3,
                title: 'video3ByUser2',
                channel_id: 2,
              }
        ]);
      });
  };
  