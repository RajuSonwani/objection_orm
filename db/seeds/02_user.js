
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          name: 'user1',
          email: 'user1@test.com',
          channel_id: 1,
        },
        {
          id: 2,
          name: 'user2',
          email: 'user2@test.com',
          channel_id: 2,
        },
        {
          id: 3,
          name: 'user2',
          email: 'user3@test.com',
        }
      ]);
    });
};
